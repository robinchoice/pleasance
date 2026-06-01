# Pleasance — Claude-Kontext

## Was dieses Repo ist

`pleasance` ist die Website für **Pleasance** — Robins Atelier-Dach-Brand für Coaching, Webdesign/Tech und Musik/Booking. Die Site ist plain HTML/CSS, kein Build-Step, kein Framework.

## Dein erster Schritt in jeder Session

**Lies zuerst alle `.notes/`-Dateien** — sie enthalten den vollständigen Bauplan, alle Texte und den aktuellen Stand:

1. `.notes/00-handoff.md` — Kontext, Entscheidungen, Blocker
2. `.notes/01-build-plan.md` — Dateistruktur, Header/Footer-Markup, CSS-Sketch, Build-Reihenfolge
3. `.notes/02-copy.md` — alle Texte für alle Seiten (Entwurf, Robin bringt sie in seine Stimme)

Danach: kurz zusammenfassen wo wir stehen und fragen ob Blocker geklärt sind.

## Ziel

Pleasance.org von einer Coaching-Single-Page-Site zur Atelier-Hub-Site mit 7 Seiten erweitern:

- `index.html` — Hub (Drei-Türen-Startseite)
- `coaching.html` — bestehende Coaching-Site (umbenannt, inhaltlich unverändert)
- `studio.html` — Webdesign & Tech-Angebot (Verkaufs-Tür, höchste Priorität)
- `buehne.html` — Musikproduktion & Booking
- `projekte.html` — Portfolio-Übersicht aller Projekte
- `ueber.html` — Robin als Person
- `kontakt.html` — drei Eingänge (Coaching / Studio / Bühne)

## Tech-Stack

- Plain HTML/CSS — kein Build-Step, kein Framework
- Schriften: Playfair Display + Inter (Google Fonts CDN)
- Analytics: Plausible (self-hosted)
- Booking: cal.com
- Bestehende `style.css` wird erweitert, nicht ersetzt
- Bestehende Naturpalette bleibt: `#A0522D` Rost / `#FAF5F0` Off-White / `#8B9A6B` Moos

## Wichtigste Regel

Die bestehende Coaching-Strecke (`coaching.html`) wird **inhaltlich nicht angefasst** — nur Header/Footer werden auf das neue Schema umgestellt. Quiz, FAQ, Newsletter, alle Texte bleiben unverändert.

## Aktueller Stand

<!-- Zuletzt aktualisiert: 2026-06-01 via /save -->

**Sprint / Phase:** Branding live (Logo + Mail) — Resend-Anbindung + Deploy-Pipeline ausstehend

**Zuletzt implementiert:**
- Wortmarke „Pleasance" (Fraunces-Versalien, outlined SVG) auf allen Seiten via CSS-Mask + `currentColor` (`style.css`, `img/pleasance-logo-mask.svg`); Quellen + PNG-Exports in `logo/`
- E-Mail site-weit `hallo@` → `hello@pleasance.org` (alle 5 Seiten + Doku)
- Commit `b6923a8` + Push; `gh` als git-Credential-Helper eingerichtet
- **Deploy-Bug behoben:** Coolify-Auto-Deploy hatte seit ~19.5. nicht ausgelöst (Site 2 Wochen alt) → manuell über coolify.diespaetzles.lol-API deployt, Live-Stand verifiziert
- `RESEND_API_KEY` in Coolify gesetzt; Formulare noch auf Formsubmit.co (Übergang bis DNS ready)
- Achtung CSS-Mask: nur über HTTP sichtbar, nicht `file://` (lokal Server nutzen)

**Morgen (2026-06-02) — Kontaktformular von Formsubmit.co auf Resend umstellen:**
1. `hello@pleasance.org` als Alias/Postfach anlegen
2. DNS A-Record `api.pleasance.org` → Hetzner-VPS-IP bei Porkbun setzen
3. `pleasance-api`-App (UUID `v10lvwfo0he2o3vh0gnqvddp`) prüfen: `/contact`-Endpoint live? (nutzt `RESEND_API_KEY`)
4. Die zwei `fetch`-Stellen (`index.html:448`, `kontakt.html:107`) von Formsubmit auf `api.pleasance.org/contact` umschalten + `topic`-Feld ergänzen
5. Fallback, falls DNS morgen noch nicht ready: Formsubmit.co-Aktivierungsmail in hello@ bestätigen, dann bleibt Formsubmit übergangsweise aktiv

**Offene Punkte:**
- Coolify Auto-Deploy-Webhook für pleasance.org defekt — sonst muss jeder Push manuell deployt werden (im Kanban-Board)
- DNS bei Porkbun: `api.` + `kanban.pleasance.org` lösen nicht auf
- `img/robin.jpg` fehlt weiterhin

## Ring-Kontext

Dieses Repo ist Ring 3 (öffentlich). Strategiedokumentation liegt in Ring 1 (`robin-work`) und ist hier nicht zugänglich — alles Nötige ist in `.notes/` gespiegelt.
