// Writes the GitHub numbers of the last 30 days into werkstatt.html and kurs-agenten.html.
// The repositories are the data-gh-bar attributes in werkstatt.html.
// Usage: GITHUB_TOKEN=… node scripts/werkstatt.mjs
import { readFile, writeFile } from 'node:fs/promises'

const OWNER = 'robinchoice'
const DAYS = 30
const FILES = ['werkstatt.html', 'kurs-agenten.html']
const AGENT = /^Co-Authored-By:.*(Claude|Codex|noreply@anthropic\.com|noreply@openai\.com)/im
const isWerkstattCommit = (c) => c.author?.login === 'github-actions[bot]' || c.commit.message === 'chore: update werkstatt numbers'

const since = new Date(Date.now() - DAYS * 24 * 60 * 60 * 1000).toISOString()
const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
}

async function get(path) {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${path}`, { headers })
  if (!res.ok) throw new Error(`${path}: ${res.status} ${await res.text()}`)
  return res.json()
}

async function commitsSince(repo) {
  const commits = []
  for (let page = 1; ; page++) {
    const batch = await get(`${repo}/commits?since=${since}&per_page=100&page=${page}`)
    commits.push(...batch.filter((c) => !isWerkstattCommit(c)))
    if (batch.length < 100) return commits
  }
}

async function latestCommit(repo) {
  for (let page = 1; ; page++) {
    const batch = await get(`${repo}/commits?per_page=100&page=${page}`)
    const latest = batch.find((c) => !isWerkstattCommit(c))
    if (latest) return latest
    if (batch.length < 100) throw new Error(`${repo}: no non-bot commits`)
  }
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function setText(html, key, text, datetime) {
  const re = new RegExp(`(<(\\w+)[^>]*\\sdata-gh="${escape(key)}"[^>]*>)[^<]*(</\\2>)`, 'g')
  return html.replace(re, (_, open, _tag, close) =>
    (datetime ? open.replace(/datetime="[^"]*"/, `datetime="${datetime}"`) : open) + text + close)
}

const day = (iso) => new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', timeZone: 'Europe/Berlin' })

const werkstatt = await readFile('werkstatt.html', 'utf8')
const repos = [...werkstatt.matchAll(/data-gh-bar="([^"]+)"/g)].map((m) => m[1])

const stats = []
for (const repo of repos) {
  const commits = await commitsSince(repo)
  const latest = commits[0] ?? await latestCommit(repo)
  stats.push({
    repo,
    commits: commits.length,
    agent: commits.filter((c) => AGENT.test(c.commit.message)).length,
    last: latest.commit.committer.date.slice(0, 10),
  })
}

const total = stats.reduce((sum, s) => sum + s.commits, 0)
const agent = stats.reduce((sum, s) => sum + s.agent, 0)
const max = Math.max(...stats.map((s) => s.commits))
const now = new Date().toISOString()

for (const file of FILES) {
  let html = await readFile(file, 'utf8')
  html = setText(html, 'projects', String(stats.filter((s) => s.commits > 0).length))
  html = setText(html, 'commits', String(total))
  html = setText(html, 'agent', `${total ? Math.round((agent / total) * 100) : 0}&nbsp;%`)
  html = setText(html, 'updated', new Date(now).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Berlin' }), now)
  for (const s of stats) {
    html = setText(html, `${s.repo}.commits`, String(s.commits))
    html = setText(html, `${s.repo}.agent`, String(s.agent))
    html = setText(html, `${s.repo}.last`, day(s.last), s.last)
    html = html.replace(
      new RegExp(`(data-gh-bar="${escape(s.repo)}" style="width: )(?:[\\d.]+|NaN)%`),
      `$1${max ? Math.round((s.commits / max) * 1000) / 10 : 0}%`)
  }
  await writeFile(file, html)
}

console.log(`${repos.length} repositories, ${total} commits, ${agent} with an agent`)
