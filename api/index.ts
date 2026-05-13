import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Resend } from 'resend'

const app = new Hono()
const resend = new Resend(process.env.RESEND_API_KEY)

const ALLOWED_ORIGINS = [
  'https://pleasance.org',
  'https://www.pleasance.org',
  'http://localhost',
  'http://127.0.0.1',
]

const TOPIC_LABELS: Record<string, string> = {
  coaching: 'Coaching',
  bureau:   'Bureau',
  records:  'Records',
}

app.use('/contact', cors({
  origin: (origin) => ALLOWED_ORIGINS.includes(origin) ? origin : null,
  allowMethods: ['POST', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
}))

app.post('/contact', async (c) => {
  let body: { topic?: string; name?: string; email?: string; message?: string }

  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Invalid JSON' }, 400)
  }

  const { topic, name, email, message } = body

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

  const { error } = await resend.emails.send({
    from:    'Pleasance Kontakt <hallo@pleasance.org>',
    to:      'hallo@pleasance.org',
    replyTo: email,
    subject: `[${topicLabel}] Anfrage von ${name}`,
    text:    `Thema: ${topicLabel}\nName: ${name}\nE-Mail: ${email}\n\n${message}`,
  })

  if (error) {
    console.error('Resend error:', error)
    return c.json({ error: 'Send failed' }, 500)
  }

  return c.json({ ok: true })
})

export default {
  port: Number(process.env.PORT) || 3000,
  fetch: app.fetch,
}
