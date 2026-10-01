import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { createTransport } from 'nodemailer'

const app = new Hono()
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

const MAX_REQUESTS = 5
const requestsPerIp = new Map<string, number>()
setInterval(() => requestsPerIp.clear(), 10 * 60 * 1000)

const TOPIC_LABELS: Record<string, string> = {
  software: 'Software',
  lehre:    'Lehre',
  coaching: 'Coaching',
}

app.get('/', (c) => c.json({ ok: true }))

app.use('/contact', cors({
  origin: (origin) => ALLOWED_ORIGINS.includes(origin) || LOCAL_ORIGIN.test(origin) ? origin : null,
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
}))

app.post('/contact', async (c) => {
  const ip = c.req.header('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  const count = (requestsPerIp.get(ip) ?? 0) + 1
  requestsPerIp.set(ip, count)
  if (count > MAX_REQUESTS) {
    return c.json({ error: 'Too many requests' }, 429)
  }

  let body: { topic?: string; name?: string; email?: string; message?: string; _honey?: string }

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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return c.json({ error: 'Invalid email' }, 400)
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return c.json({ error: 'Input too long' }, 400)
  }

  const topicLabel = TOPIC_LABELS[topic] ?? topic

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
    return c.json({ error: 'Send failed' }, 500)
  }

  return c.json({ ok: true })
})

export default {
  port: Number(process.env.PORT) || 3000,
  fetch: app.fetch,
}
