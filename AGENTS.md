# pleasance

## Zweck & Links

- Website von Pleasance (https://pleasance.org und `www.`): statisches HTML, CSS und JS ohne Build, dazu eine kleine Bun-API in `api/` (https://api.pleasance.org).
- Coolify auf VPS 1, Projekt `pleasance-website`, Anwendungen `pleasance-site` und `pleasance-api`.
- Gestaltung: DESIGN.md.

## Checks

- Website: keine automatischen Checks. Geänderte Seiten lokal im Browser ansehen, beide Sprachen.
- API: `cd api && bun install --frozen-lockfile && bun build index.ts --target=bun --outdir="$(mktemp -d)"`

## Deploy

- Coolify deployt per Repo-Webhook bei jedem Push auf `main`, ein Push geht also direkt live. Watch Paths: die Website bei allem außer `api/**`, die API nur bei `api/**`.
- Prüfen: `curl -sI https://pleasance.org` und für die API `curl -s https://api.pleasance.org` (antwortet `{"ok":true}`).

## Fallen

- Jeder Text steht auf Deutsch und Englisch: im HTML mit `data-i18n`, die Übersetzungen und Seiten-Metadaten in `i18n.js`.
- Die GitHub Action `werkstatt.yml` committet jede Nacht um 01:17 UTC die GitHub-Zahlen in `werkstatt.html` und `kurs-agenten.html`. Vor dem Push also immer `git fetch`.
