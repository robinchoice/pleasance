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
  lehre:    'Lehre',
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

export default {
  port: Number(process.env.PORT) || 3000,
  fetch: app.fetch,
}
