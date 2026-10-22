// Tests the API through its interface: app.request() with the same headers a
// browser or the Savor daemon sends. Nothing is mailed: /contact is covered up
// to the point where a mail would leave, /savor/feedback talks to a fake GitHub.
import { afterAll, beforeAll, describe, expect, test } from 'bun:test'

const githubRequests: { method: string, path: string, body: any }[] = []
const github = Bun.serve({
  port: 0,
  async fetch(request) {
    githubRequests.push({ method: request.method, path: new URL(request.url).pathname, body: await request.json() })
    return Response.json({ ok: true }, { status: 201 })
  },
})
process.env.GITHUB_API_URL = `http://localhost:${github.port}`
delete process.env.GITHUB_SAVOR_FEEDBACK_TOKEN
const { app } = await import('./index.ts')
afterAll(() => github.stop(true))

let ipCounter = 0
const json = (path: string, body: unknown, headers: Record<string, string> = {}) =>
  app.request(path, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'X-Forwarded-For': `10.0.0.${++ipCounter}`, ...headers },
    body:    typeof body === 'string' ? body : JSON.stringify(body),
  })

test('GET / answers ok', async () => {
  expect(await (await app.request('/')).json()).toEqual({ ok: true })
})

describe('/contact', () => {
  const origin = { Origin: 'https://pleasance.org' }
  const valid = { topic: 'software', name: 'Ada', email: 'ada@example.org', message: 'Hallo' }

  test('needs an allowed origin', async () => {
    expect((await json('/contact', valid)).status).toBe(403)
    expect((await json('/contact', valid, { Origin: 'https://evil.example' })).status).toBe(403)
    expect((await json('/contact', { ...valid, _honey: 'x' }, { Origin: 'http://localhost:8080' })).status).toBe(200)
  })

  test('rejects broken or incomplete bodies', async () => {
    expect((await json('/contact', '{', origin)).status).toBe(400)
    expect((await json('/contact', { ...valid, message: '' }, origin)).status).toBe(400)
    expect((await json('/contact', { ...valid, name: 42 }, origin)).status).toBe(400)
    expect((await json('/contact', { ...valid, topic: 'constructor' }, origin)).status).toBe(400)
    expect((await json('/contact', { ...valid, email: 'ada at example' }, origin)).status).toBe(400)
    expect((await json('/contact', { ...valid, message: 'x'.repeat(5001) }, origin)).status).toBe(400)
  })

  test('honeypot submissions are accepted and dropped', async () => {
    expect(await (await json('/contact', { ...valid, _honey: 'bot' }, origin)).json()).toEqual({ ok: true })
  })

  test('limits requests per address', async () => {
    const ip = { ...origin, 'X-Forwarded-For': '10.1.0.1' }
    for (let i = 0; i < 5; i++) expect((await json('/contact', { _honey: 'x' }, ip)).status).toBe(200)
    expect((await json('/contact', { _honey: 'x' }, ip)).status).toBe(429)
  })
})

describe('/savor/feedback', () => {
  const valid = { text: 'Button does nothing\n\nSteps: click it', context: [['Agents', 'claude 2.1']] }

  test('only accepts JSON', async () => {
    const response = await json('/savor/feedback', valid, { 'Content-Type': 'text/plain' })
    expect(response.status).toBe(415)
  })

  test('validates text, context and screenshot', async () => {
    expect((await json('/savor/feedback', '[]')).status).toBe(400)
    expect((await json('/savor/feedback', { ...valid, text: '   ' })).status).toBe(400)
    expect((await json('/savor/feedback', { ...valid, text: 'x'.repeat(4001) })).status).toBe(400)
    expect((await json('/savor/feedback', { ...valid, context: [['too', 'few', 'cols']] })).status).toBe(400)
    expect((await json('/savor/feedback', { ...valid, context: { Agents: 'claude' } })).status).toBe(400)
    expect((await json('/savor/feedback', { ...valid, screenshot: 'data:image/gif;base64,R0lGODlh' })).status).toBe(400)
    expect((await json('/savor/feedback', { ...valid, screenshot: 'https://example.org/x.png' })).status).toBe(400)
  })

  test('answers 503 without a token', async () => {
    expect((await json('/savor/feedback', valid)).status).toBe(503)
    expect(githubRequests).toHaveLength(0)
  })

  describe('with a token', () => {
    beforeAll(() => { process.env.GITHUB_SAVOR_FEEDBACK_TOKEN = 'test-token' })
    afterAll(() => { delete process.env.GITHUB_SAVOR_FEEDBACK_TOKEN })

    test('files an issue with the screenshot and a context table', async () => {
      githubRequests.length = 0
      const screenshot = `data:image/png;base64,${Buffer.from('png').toString('base64')}`
      const response = await json('/savor/feedback', { ...valid, screenshot, context: [['A | B', 'line\nbreak']] })
      expect(response.status).toBe(200)
      expect(githubRequests.map((r) => [r.method, r.path.replace(/[0-9a-f-]{36}/, 'UUID')])).toEqual([
        ['PUT', '/repos/robinchoice/savor-feedback/contents/screenshots/UUID.png'],
        ['POST', '/repos/robinchoice/savor-feedback/issues'],
      ])
      const issue = githubRequests[1].body
      expect(issue.title).toBe('Button does nothing')
      expect(issue.labels).toEqual(['bug', 'feedback'])
      expect(issue.body).toContain('![Screenshot](https://github.com/robinchoice/savor-feedback/blob/main/screenshots/')
      expect(issue.body).toContain('| A \\| B | line break |')
    })

    test('truncates long titles by grapheme', async () => {
      githubRequests.length = 0
      const text = '👩‍💻'.repeat(80)
      expect((await json('/savor/feedback', { ...valid, text })).status).toBe(200)
      expect(githubRequests[0].body.title).toBe(`${'👩‍💻'.repeat(69)}…`)
    })

    test('reports GitHub failures as 502', async () => {
      github.reload({ fetch: () => new Response('nope', { status: 500 }) })
      expect((await json('/savor/feedback', valid)).status).toBe(502)
    })
  })
})
