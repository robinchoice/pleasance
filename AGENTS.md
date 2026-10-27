# pleasance

## Zweck & Links

- Website von Pleasance (https://pleasance.org und `www.`): statisches HTML, CSS und JS ohne Build, dazu eine kleine Bun-API in `api/` (https://api.pleasance.org).
- Coolify auf VPS 1, Projekt `pleasance-website`, Anwendungen `pleasance-site` und `pleasance-api`.
- Gestaltung: DESIGN.md.
- `POST /savor/feedback`: Der Bug-Käfer in Savor schickt Meldungen über den lokalen Savor-Daemon hierher, die API legt daraus ein Issue im privaten Repo `robinchoice/savor-feedback` an (Screenshot unter `screenshots/`). Nichts wird gespeichert.

## Checks

- Website: keine automatischen Checks. Geänderte Seiten lokal im Browser ansehen, beide Sprachen.
- API: `cd api && bun install --frozen-lockfile && bun test && bun build index.ts --target=bun --outdir="$(mktemp -d)"`. Die Tests in `index.test.ts` gehen durch `app.request()`, ohne SMTP, GitHub spielt ein lokaler `Bun.serve`.

## Deploy

- Coolify deployt per Repo-Webhook bei jedem Push auf `main`, ein Push geht also direkt live. Watch Paths: die Website bei allem außer `api/**`, die API nur bei `api/**`. Das gilt auch für die Commits der Werkstatt-Action.
- Prüfen: `curl -sI https://pleasance.org` und für die API `curl -s https://api.pleasance.org` (antwortet `{"ok":true}`).

## Fallen

- Jeder Text steht auf Deutsch und Englisch: im HTML mit `data-i18n`, die Übersetzungen und Seiten-Metadaten in `i18n.js`.
- Die GitHub Action `werkstatt.yml` committet die GitHub-Zahlen in alle HTML-Seiten im Repo-Hauptverzeichnis mit `data-gh`-Attributen: nach jedem Prototyp-Deploy (`repository_dispatch` `prototype-deployed` aus den starter-Repos) und jede Nacht um 01:17 UTC. Vor dem Push also immer `git fetch`.
- Dieselbe Action schreibt in `werkstatt.html` zwischen die Marker `<!-- werkstatt:… -->`, dort nie von Hand ändern: „Außerdem in Arbeit“ sind alle öffentlichen, nicht archivierten Repos mit Push in den letzten 60 Tagen außer denen auf der Werkzeug-Wand, Texte DE/EN in `scripts/projects.json` (`hidden: true` blendet aus). Das Logbuch sind die Einträge mit `"public": true` in `milestones.jsonl` von `robinchoice/chronik` (Regeln in deren AGENTS.md). Die Wand pflegt man von Hand.
- Dieselbe Action schreibt `apps.html` zwischen `<!-- werkstatt:apps -->`: ein Block je Eintrag mit `app` in `scripts/projects.json` (Reihenfolge der Datei), auch dort nie von Hand ändern. Auf die Seite kommen nur Apps, die live oder herunterladbar sind. Screenshots liegen als `img/apps/<icon>-desktop.webp` (16:10) und `-phone.webp` (780×1688), kopiert aus `docs/screenshots` der App, fehlt einer, endet der Lauf rot. Hat die App eine englische Oberfläche, kommen ihre englischen Bilder als `-desktop-en.webp` und `-phone-en.webp` dazu, die Seite tauscht sie mit der Sprache (heute Döner und Songgate, Music Hub ist nur auf Deutsch). Nach einer Änderung an `projects.json` lokal das Skript laufen lassen und `apps.html` mit committen.
- Fehlt einem Repo der Text, ist ein Wand-Projekt archiviert oder das Logbuch älter als 14 Tage, endet der Lauf rot (nicht bei `repository_dispatch`), die Zahlen gehen trotzdem live. Lokal: `GITHUB_TOKEN=$(gh auth token) node scripts/werkstatt.mjs`. Der Savor-Workflow „Website-Pflege“ hält Texte und Logbuch wöchentlich nach.
- Der Commit der Action läuft mit dem `GITHUB_TOKEN`. Das startet keine weiteren Workflows, der Repo-Webhook an Coolify feuert aber trotzdem, die neuen Zahlen gehen also live. Die Action braucht das Secret `WERKSTATT_TOKEN` (liest die privaten Repos), ohne es scheitert sie mit 401.
- `/savor/feedback` braucht in Coolify `GITHUB_SAVOR_FEEDBACK_TOKEN` (Fine-grained PAT nur für `robinchoice/savor-feedback`, Contents und Issues read/write), ohne ihn antwortet der Endpunkt auf gültige Meldungen 503. Lokal testen: `GITHUB_API_URL` auf einen nachgebauten GitHub-Server zeigen lassen.
- Das Repo ist öffentlich, auch seine CI-Logs. `secrets.yml` scannt Branch- und Tag-Pushes und PRs aus Forks mit gitleaks (Docker-Image per Digest, `--redact`), Vorbild starter, README „Secret-Scan“. `werkstatt.yml` scannt seine Bot-Commits vor dem Push selbst, weil sie keinen weiteren Workflow starten. Fehlalarme eng abfangen, per Fingerprint in `.gitleaksignore` oder per Pfad und Regel in `.gitleaks.toml`, nie eine Regel ganz abschalten. Ein echter Fund ist schon öffentlich: das Secret sofort rotieren.
- Secret-Scan: Gitleaks 8.30.1 liest zusätzlich zu `--gitleaks-ignore-path` auch `.gitleaksignore` aus dem Checkout. `secrets.yml` ersetzt diese Datei deshalb ebenfalls durch die Fassung aus `CONFIG_REF`, bei Fork-PRs also aus dem Base-Commit.
