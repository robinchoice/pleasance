# pleasance

## Zweck & Links

- Website von Pleasance (https://pleasance.org und `www.`): eine Startseite mit den Apps, die live sind (Lieblingsdöner, Songgate, Savor, Music Hub als Testzugang auf Anfrage), dazu Impressum, Datenschutz und die AGB für gehostetes Savor. Statisches HTML, CSS und JS ohne Build, dazu eine kleine Bun-API in `api/` (https://api.pleasance.org), die nur noch `/savor/feedback` bedient.
- Coolify auf VPS 1, Projekt `pleasance-website`, Anwendungen `pleasance-site` und `pleasance-api`.
- Gestaltung: DESIGN.md.
- `POST /savor/feedback`: Der Bug-Käfer in Savor schickt Meldungen über den lokalen Savor-Daemon hierher, die API legt daraus ein Issue im privaten Repo `robinchoice/savor-feedback` an (Screenshot unter `screenshots/`). Nichts wird gespeichert.

## Checks

- Website: keine automatischen Checks. Geänderte Seiten lokal im Browser ansehen, beide Sprachen.
- API: `cd api && bun install --frozen-lockfile && bun test && bun build index.ts --target=bun --outdir="$(mktemp -d)"`. Die Tests in `index.test.ts` gehen durch `app.request()`, GitHub spielt ein lokaler `Bun.serve`.

## Deploy

- Coolify deployt per Repo-Webhook bei jedem Push auf `main`, ein Push geht also direkt live. Watch Paths: die Website bei allem außer `api/**`, die API nur bei `api/**`.
- Prüfen: `curl -sI https://pleasance.org` und für die API `curl -s https://api.pleasance.org` (antwortet `{"ok":true}`).

## Fallen

- **Bescheiden bleiben: nur Releastes, keine Preise.** Auf die Seite kommen nur Apps, die live oder herunterladbar sind, keine Angebote, Kurse, Coaching, Preise oder Projektzahlen. Die App-Blöcke stehen von Hand in `index.html`, ihre Texte DE/EN in `i18n.js`, Screenshots als `img/apps/<icon>-desktop.webp` (16:10) und `-phone.webp` (780×1688) aus `docs/screenshots` der App, englische als `-en.webp`.

- Jeder Text steht auf Deutsch und Englisch: im HTML mit `data-i18n`, die Übersetzungen und Seiten-Metadaten in `i18n.js`.
- Deutsche Texte ohne Gendern: keine Sternchen, kein „jede und jeder“ und kein generisches Maskulinum, sondern Formulierungen, die gar kein Gendern brauchen: „Alle arbeiten anders“ statt „Jeder arbeitet anders“, „pro Person“ statt „pro Nutzer“, „die Person“, „Kundschaft“. Das gilt für Seiten, `i18n.js` und Rechtsseiten. Gesetzliche Begriffe und Muster in Impressum, Datenschutz und AGB (Verbraucher, Unternehmer, Verantwortlicher, Muster-Widerrufsformular) bleiben, wie das Gesetz sie vorgibt.
- `apps.json` speist das App-Dock im Footer aller Prototypen (starter, `AppDock.svelte`, Schema `pleasanceAppsSchema` in `packages/shared/src/schemas.ts`). Eine neue App auf der Startseite kommt im selben Zug dorthin: Name, URL, Icon unter `https://pleasance.org/img/werkzeuge/` (die CSP der Apps erlaubt nur diesen Ursprung), `band` gleich der `APP_BAND` der App, `desktop: true`, wenn die URL eine Download- oder Landing-Seite ist. Danach gegen das Schema prüfen. `apps.json` und `img/werkzeuge/*.svg` liefert die Nginx-Konfiguration der Coolify-App `pleasance-site` mit `Access-Control-Allow-Origin: *` aus.
- `/savor/feedback` braucht in Coolify `GITHUB_SAVOR_FEEDBACK_TOKEN` (Fine-grained PAT nur für `robinchoice/savor-feedback`, Contents und Issues read/write), ohne ihn antwortet der Endpunkt auf gültige Meldungen 503. Lokal testen: `GITHUB_API_URL` auf einen nachgebauten GitHub-Server zeigen lassen.
- Das Repo ist öffentlich, auch seine CI-Logs. `secrets.yml` scannt Branch- und Tag-Pushes und PRs aus Forks mit gitleaks (Docker-Image per Digest, `--redact`), Vorbild starter, README „Secret-Scan“. Fehlalarme eng abfangen, per Fingerprint in `.gitleaksignore` oder per Pfad und Regel in `.gitleaks.toml`, nie eine Regel ganz abschalten. Ein echter Fund ist schon öffentlich: das Secret sofort rotieren.
- Secret-Scan: Gitleaks 8.30.1 liest zusätzlich zu `--gitleaks-ignore-path` auch `.gitleaksignore` aus dem Checkout. `secrets.yml` ersetzt diese Datei deshalb ebenfalls durch die Fassung aus `CONFIG_REF`, bei Fork-PRs also aus dem Base-Commit.
- Cooldown gegen Lieferkettenangriffe: `api/bunfig.toml` lässt Bun beim Auflösen (`bun add`, `bun update`) keine npm-Versionen wählen, die jünger als 3 Tage sind (`minimumReleaseAge`), `api/Dockerfile` kopiert sie vor `bun install`. Was schon in `bun.lock` steht, installiert `--frozen-lockfile` ohne diese Prüfung, das Lockfile also nur mit `bun` im Ordner `api` ändern. Braucht ein Paket sofort eine frische Version (Sicherheitsfix), es einzeln in `minimumReleaseAgeExcludes` eintragen, nie den Cooldown abschalten.
