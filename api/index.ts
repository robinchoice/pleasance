import * as Sentry from '@sentry/bun'
import { Hono } from 'hono'
import { bodyLimit } from 'hono/body-limit'
import { cors } from 'hono/cors'
import { createTransport } from 'nodemailer'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'development',
  release: process.env.SENTRY_RELEASE,
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: false,
    httpBodies: [],
    urlQueryParams: false,
    graphQL: { document: false, variables: false },
    genAI: { inputs: false, outputs: false },
    databaseQueryData: false,
    queues: false,
    stackFrameVariables: false,
    frameContextLines: 0,
  },
  maxBreadcrumbs: 0,
  tracesSampleRate: 0,
  defaultIntegrations: false,
  integrations: [Sentry.onUncaughtExceptionIntegration(), Sentry.onUnhandledRejectionIntegration({ mode: 'strict' })],
  beforeSend(event) {
    delete event.request
    delete event.user
    return event
  },
})

const app = new Hono()
app.onError((error, c) => {
  Sentry.captureException(error)
  console.error(error)
  return c.json({ error: 'Internal server error' }, 500)
})
const mailer = createTransport({
  host:       'smtp.protonmail.ch',
  port:       587,
  requireTLS: true,
  auth:       { user: 'noreply@pleasance.org', pass: process.env.SMTP_TOKEN },
})

const ALLOWED_ORIGINS = [
  'https://pleasance.org',
  'https://www.pleasance.org',
]
const LOCAL_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/
const isAllowedOrigin = (origin: string) => ALLOWED_ORIGINS.includes(origin) || LOCAL_ORIGIN.test(origin)

const MAX_REQUESTS = 5
const requestsPerIp = new Map<string, number>()
setInterval(() => requestsPerIp.clear(), 10 * 60 * 1000)

const MAX_MAILS_PER_HOUR = 20
let mailsThisHour = 0
setInterval(() => { mailsThisHour = 0 }, 60 * 60 * 1000)

const TOPIC_LABELS: Record<string, string> = {
  software: 'Software',
  lehre:    'Training',
  coaching: 'Coaching',
}

app.get('/', (c) => c.json({ ok: true }))

app.use('/contact', cors({
  origin: (origin) => isAllowedOrigin(origin) ? origin : null,
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
}))
app.use('/contact', bodyLimit({ maxSize: 32 * 1024 }))

app.post('/contact', async (c) => {
  if (!isAllowedOrigin(c.req.header('origin') ?? '')) {
    return c.json({ error: 'Forbidden' }, 403)
  }

  const ip = c.req.header('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  const count = (requestsPerIp.get(ip) ?? 0) + 1
  requestsPerIp.set(ip, count)
  if (count > MAX_REQUESTS) {
    return c.json({ error: 'Too many requests' }, 429)
  }

  let body: Record<string, unknown>

  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400)
  }

  const { topic, name, email, message, _honey } = body

  if (_honey) {
    return c.json({ ok: true })
  }

  if (!topic || !name || !email || !message) {
    return c.json({ error: 'Missing fields' }, 400)
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return c.json({ error: 'Invalid fields' }, 400)
  }

  if (typeof topic !== 'string' || !Object.hasOwn(TOPIC_LABELS, topic)) {
    return c.json({ error: 'Invalid topic' }, 400)
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return c.json({ error: 'Invalid email' }, 400)
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return c.json({ error: 'Input too long' }, 400)
  }

  if (mailsThisHour >= MAX_MAILS_PER_HOUR) {
    return c.json({ error: 'Too many requests' }, 429)
  }
  mailsThisHour++

  const topicLabel = TOPIC_LABELS[topic]

  try {
    await mailer.sendMail({
      from:    'Pleasance Kontakt <noreply@pleasance.org>',
      to:      'hello@pleasance.org',
      replyTo: email,
      subject: `[${topicLabel}] Anfrage von ${name}`,
      text:    `Thema: ${topicLabel}\nName: ${name}\nE-Mail: ${email}\n\n${message}`,
    })
  } catch (error) {
    console.error('SMTP error:', error)
    Sentry.captureException(error)
    return c.json({ error: 'Send failed' }, 500)
  }

  return c.json({ ok: true })
})

const FEEDBACK_REPO = 'robinchoice/savor-feedback'
const GITHUB_API_URL = process.env.GITHUB_API_URL || 'https://api.github.com'
const SCREENSHOT = /^data:image\/(jpeg|png);base64,([A-Za-z0-9+/]+={0,2})$/

const MAX_FEEDBACK_PER_IP = 5
const MAX_FEEDBACK_PER_HOUR = 30
const feedbackPerIp = new Map<string, number>()
let feedbackThisHour = 0
setInterval(() => {
  feedbackPerIp.clear()
  feedbackThisHour = 0
}, 60 * 60 * 1000)

const tableCell = (value: string) => value.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')

const isContext = (value: unknown): value is [string, string][] =>
  Array.isArray(value) && value.length <= 12 && value.every((row) =>
    Array.isArray(row) && row.length === 2 &&
    typeof row[0] === 'string' && row[0].length <= 40 &&
    typeof row[1] === 'string' && row[1].length <= 500)

async function github(path: string, method: string, token: string, body: unknown) {
  const response = await fetch(`${GITHUB_API_URL}/repos/${FEEDBACK_REPO}${path}`, {
    method,
    headers: {
      Authorization:          `Bearer ${token}`,
      Accept:                 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type':         'application/json',
      'User-Agent':           'pleasance-api',
    },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw new Error(`GitHub ${method} ${path}: ${response.status} ${await response.text()}`)
  }
}

app.use('/savor/feedback', bodyLimit({ maxSize: 5 * 1024 * 1024 }))

app.post('/savor/feedback', async (c) => {
  const ip = c.req.header('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  const count = (feedbackPerIp.get(ip) ?? 0) + 1
  feedbackPerIp.set(ip, count)
  if (count > MAX_FEEDBACK_PER_IP) {
    return c.json({ error: 'Too many requests' }, 429)
  }

  let body: Record<string, unknown>

  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400)
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return c.json({ error: 'Invalid body' }, 400)
  }

  const { text, context, screenshot } = body

  const message = typeof text === 'string' ? text.trim() : ''
  if (typeof text !== 'string' || !message || message.length > 4000) {
    return c.json({ error: 'Invalid text' }, 400)
  }

  if (!isContext(context)) {
    return c.json({ error: 'Invalid context' }, 400)
  }

  let image: { extension: string, content: string } | null = null
  if (screenshot != null) {
    const match = typeof screenshot === 'string' ? SCREENSHOT.exec(screenshot) : null
    if (!match || Buffer.byteLength(match[2], 'base64') > 3 * 1024 * 1024) {
      return c.json({ error: 'Invalid screenshot' }, 400)
    }
    image = { extension: match[1] === 'jpeg' ? 'jpg' : 'png', content: match[2] }
  }

  const token = process.env.GITHUB_SAVOR_FEEDBACK_TOKEN
  if (!token) {
    return c.json({ error: 'Feedback not configured' }, 503)
  }

  if (feedbackThisHour >= MAX_FEEDBACK_PER_HOUR) {
    return c.json({ error: 'Too many requests' }, 429)
  }
  feedbackThisHour++

  const firstLine = message.split('\n')[0].trim()
  const titleChars = Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(firstLine), ({ segment }) => segment)
  const title = titleChars.length > 70 ? `${titleChars.slice(0, 69).join('')}…` : firstLine
  const sections = [message]

  try {
    if (image) {
      const path = `screenshots/${crypto.randomUUID()}.${image.extension}`
      await github(`/contents/${path}`, 'PUT', token, {
        message: `Add ${path}`,
        content: image.content,
        branch:  'main',
      })
      sections.push(`![Screenshot](https://github.com/${FEEDBACK_REPO}/blob/main/${path}?raw=true)`)
    }

    if (context.length) {
      sections.push([
        '| Context | Value |',
        '| --- | --- |',
        ...context.map(([label, value]) => `| ${tableCell(label)} | ${tableCell(value)} |`),
      ].join('\n'))
    }

    await github('/issues', 'POST', token, {
      title,
      body:   sections.join('\n\n'),
      labels: ['bug', 'feedback'],
    })
  } catch (error) {
    console.error('GitHub error:', error)
    Sentry.captureException(error)
    return c.json({ error: 'Send failed' }, 502)
  }

  return c.json({ ok: true })
})

export default {
  port: Number(process.env.PORT) || 3000,
  fetch: app.fetch,
}
