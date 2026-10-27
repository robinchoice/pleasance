// Keeps the werkstatt pages current: GitHub numbers of the last 30 days and 24 hours in every
// HTML page with data-gh attributes, the project list and the logbook in werkstatt.html.
// Projects: the wall in werkstatt.html (by hand) plus every public, active repository, texts in
// scripts/projects.json. Logbook: entries with "public": true in milestones.jsonl of robinchoice/chronik.
// Anything stale (missing texts, old logbook, a wall project gone) is listed at the end and fails the run.
// Usage: GITHUB_TOKEN=… node scripts/werkstatt.mjs
import { readdir, readFile, writeFile } from 'node:fs/promises'

const OWNER = 'robinchoice'
const DAYS = 30
const ACTIVE_DAYS = 60
const LOG_ENTRIES = 10
const MISSES = 3
const STALE_LOG_DAYS = 14
const AGENT = /^Co-Authored-By:.*(Claude|Codex|noreply@anthropic\.com|noreply@openai\.com)/im
const isWerkstattCommit = (c) => c.author?.login === 'github-actions[bot]' || c.commit.message === 'chore: update werkstatt numbers'

const daysAgo = (n) => new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString()
const since = daysAgo(DAYS)
const daySince = daysAgo(1)
const headers = {
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
}

async function api(path, accept) {
  const res = await fetch(`https://api.github.com/${path}`, { headers: accept ? { ...headers, Accept: accept } : headers })
  if (res.status === 409) return []
  if (!res.ok) throw new Error(`${path}: ${res.status} ${await res.text()}`)
  return accept ? res.text() : res.json()
}
const get = (path) => api(`repos/${OWNER}/${path}`)
const chronik = (file) => api(`repos/${OWNER}/chronik/contents/${file}`, 'application/vnd.github.raw+json')

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
    if (latest || batch.length < 100) return latest
  }
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function setText(html, key, text, datetime) {
  const re = new RegExp(`(<(\\w+)[^>]*\\sdata-gh="${escape(key)}"[^>]*>)[^<]*(</\\2>)`, 'g')
  return html.replace(re, (_, open, _tag, close) => {
    if (datetime !== undefined) {
      open = open.replace(/ datetime="[^"]*"/, '')
      if (datetime) open = open.replace(/>$/, ` datetime="${datetime}">`)
    }
    return open + text + close
  })
}

// Replaces everything between <!-- werkstatt:name --> and <!-- /werkstatt:name -->
function fill(html, name, lines) {
  const re = new RegExp(`(\\n( *)<!-- werkstatt:${name} -->)[\\s\\S]*?(\\n *<!-- /werkstatt:${name} -->)`)
  if (!re.test(html)) throw new Error(`werkstatt.html: markers for "${name}" missing`)
  return html.replace(re, (_, open, indent, close) => open + lines.map((l) => `\n${indent}${l}`).join('') + close)
}

const day = (iso) => new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', timeZone: 'Europe/Berlin' })
const problems = []

const projects = JSON.parse(await readFile('scripts/projects.json', 'utf8'))
const werkstatt = await readFile('werkstatt.html', 'utf8')
const wall = [...fill(werkstatt, 'projects', []).matchAll(/data-gh-bar="([^"]+)"/g)].map((m) => m[1])

const repos = []
for (let page = 1; ; page++) {
  const batch = await api(`users/${OWNER}/repos?type=owner&per_page=100&page=${page}`)
  repos.push(...batch)
  if (batch.length < 100) break
}
const visible = new Set(repos.filter((r) => !r.private && !r.archived).map((r) => r.name))
for (const repo of wall) if (!visible.has(repo)) problems.push(`wall project ${repo} is archived, private or gone: take it off the wall`)
for (const key of Object.keys(projects)) if (!visible.has(key)) problems.push(`scripts/projects.json: ${key} is archived, private or gone: remove it`)

const listed = repos
  .filter((r) => visible.has(r.name) && !r.fork && r.pushed_at >= daysAgo(ACTIVE_DAYS))
  .map((r) => r.name)
  .filter((repo) => !wall.includes(repo) && !projects[repo]?.hidden)
for (const repo of listed) if (!projects[repo]?.de || !projects[repo]?.en) problems.push(`scripts/projects.json: ${repo} needs name, de, en and stack`)

const stats = await Promise.all([...wall, ...listed].map(async (repo) => {
  const commits = await commitsSince(repo)
  const latest = commits[0] ?? await latestCommit(repo)
  return {
    repo,
    commits: commits.length,
    agent: commits.filter((c) => AGENT.test(c.commit.message)).length,
    day: commits.filter((c) => c.commit.committer.date >= daySince).length,
    last: latest?.commit.committer.date.slice(0, 10) ?? null,
  }
}))

const total = stats.reduce((sum, s) => sum + s.commits, 0)
const agent = stats.reduce((sum, s) => sum + s.agent, 0)
const dayCommits = stats.reduce((sum, s) => sum + s.day, 0)
const max = Math.max(...stats.map((s) => s.commits))
const width = (s) => (max ? Math.round((s.commits / max) * 1000) / 10 : 0)
const now = new Date().toISOString()

const STATUS = { live: 'Live', test: 'Testphase', work: 'In Arbeit', quiet: 'Ruht' }
const projectList = stats.filter((s) => listed.includes(s.repo)).sort((a, b) => b.commits - a.commits).flatMap((s) => {
  const p = projects[s.repo] ?? {}
  const status = p.status ?? (p.url ? 'live' : s.commits ? 'work' : 'quiet')
  const links = [
    p.url && `<a href="${esc(p.url)}">${esc(new URL(p.url).host)}</a>`,
    `<a href="https://github.com/${OWNER}/${s.repo}" data-i18n="home.facts.code_t">Quellcode</a>`,
  ].filter(Boolean).join(' · ')
  return [
    '<details>',
    '  <summary>',
    `    <span><span class="project__name">${esc(p.name ?? s.repo)}</span><span class="project__desc" data-en="${esc(p.en ?? '')}">${esc(p.de ?? '')}</span></span>`,
    `    <span class="status${status === 'live' ? '' : ` status--${status}`}" data-i18n="werkstatt.status.${status}">${STATUS[status]}</span>`,
    `    <span class="commits"><b data-gh="${s.repo}.commits">${s.commits}</b> Commits, <b data-gh="${s.repo}.agent">${s.agent}</b> <span data-i18n="werkstatt.projekte.agent">mit Agent</span><i data-gh-bar="${s.repo}" style="width: ${width(s)}%"></i></span>`,
    '  </summary>',
    '  <dl class="project__more">',
    `    <div><dt data-i18n="werkstatt.projekte.last">Zuletzt geändert</dt><dd><time data-gh="${s.repo}.last"${s.last ? ` datetime="${s.last}">${day(s.last)}` : '>—'}</time></dd><dt data-i18n="werkstatt.projekte.stack">Technik</dt><dd>${esc(p.stack ?? '')}</dd></div>`,
    `    <div><dt>Links</dt><dd>${links}</dd></div>`,
    '  </dl>',
    '</details>',
  ]
})

// Logbook: public milestones, newest first. "miss": true goes to "what didn't work".
const chronikNames = JSON.parse(await chronik('projects.json'))
const milestones = (await chronik('milestones.jsonl')).split('\n').filter((l) => l.trim()).map((l) => JSON.parse(l))
  .filter((e) => e.public)
  .sort((a, b) => b.at.localeCompare(a.at))
for (const e of milestones) if (!e.en) problems.push(`chronik milestones.jsonl: public entry "${e.title}" needs "en"`)
const logDate = (e) => `<time datetime="${e.at.slice(0, 10)}">${e.at.slice(8, 10)}.${e.at.slice(5, 7)}.</time>`
const logText = (e) => {
  const [de, en] = e.tag ? [`${e.tag}: ${e.title}`, `${e.tag}: ${e.en}`] : [e.title, e.en]
  return `<span data-en="${esc(en ?? de)}">${esc(de)}</span>`
}
const entries = milestones.filter((e) => !e.miss)
const log = entries.slice(0, LOG_ENTRIES).map((e) =>
  `<li>${logDate(e)}<b>${esc(projects[e.repo]?.name ?? chronikNames[e.repo]?.name ?? e.repo)}</b>${logText(e)}</li>`)
const misses = milestones.filter((e) => e.miss).slice(0, MISSES).map((e) => `<li>${logDate(e)}${logText(e)}</li>`)
if (!entries.length || entries[0].at < daysAgo(STALE_LOG_DAYS).slice(0, 10)) {
  problems.push(`logbook: no public milestone in the last ${STALE_LOG_DAYS} days, add some to chronik milestones.jsonl`)
}

let page = fill(werkstatt, 'projects', projectList)
page = fill(page, 'log', log)
page = fill(page, 'misses', misses)
if (page !== werkstatt) await writeFile('werkstatt.html', page)

const values = {
  projects: [String(stats.filter((s) => s.commits > 0).length)],
  commits: [String(total)],
  agent: [`${total ? Math.round((agent / total) * 100) : 0}&nbsp;%`],
  'day.commits': [String(dayCommits)],
  'day.projects': [String(stats.filter((s) => s.day > 0).length)],
}
for (const s of stats) {
  values[`${s.repo}.commits`] = [String(s.commits)]
  values[`${s.repo}.agent`] = [String(s.agent)]
  values[`${s.repo}.last`] = [s.last ? day(s.last) : '—', s.last]
}

for (const file of (await readdir('.')).filter((file) => file.endsWith('.html'))) {
  const original = await readFile(file, 'utf8')
  // Fail loudly: a key the script does not know, or a bar the regex below cannot
  // reach, would otherwise keep showing stale numbers forever.
  for (const [, key] of original.matchAll(/data-gh="([^"]+)"/g)) {
    if (!Object.hasOwn(values, key) && key !== 'updated') throw new Error(`${file}: unknown data-gh key "${key}"`)
  }
  for (const [, repo, style] of original.matchAll(/data-gh-bar="([^"]+)"( style="width: )?/g)) {
    if (!style) throw new Error(`${file}: data-gh-bar="${repo}" needs style="width: …" right after it`)
    if (!stats.some((s) => s.repo === repo)) throw new Error(`${file}: data-gh-bar "${repo}" is not in werkstatt.html`)
  }
  let html = original
  for (const [key, value] of Object.entries(values)) html = setText(html, key, ...value)
  for (const s of stats) {
    html = html.replace(new RegExp(`(data-gh-bar="${escape(s.repo)}" style="width: )[\\d.]+%`), `$1${width(s)}%`)
  }
  if (html !== original) {
    html = setText(html, 'updated', new Date(now).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Berlin' }), now)
    await writeFile(file, html)
  }
}

console.log(`${stats.length} repositories, ${total} commits, ${agent} with an agent, ${log.length} logbook entries`)
// A new prototype's deploy should not fail on old problems, the nightly run reports them.
if (problems.length) {
  console.error(`\nStale content on pleasance.org:\n${problems.map((p) => `- ${p}`).join('\n')}`)
  if (process.env.GITHUB_EVENT_NAME !== 'repository_dispatch') process.exitCode = 1
}
