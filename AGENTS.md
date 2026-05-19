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

<!-- Zuletzt aktualisiert: 2026-05-20 via /save -->

**Sprint / Phase:** Coaching-MVP live — Resend-API-Anbindung ausstehend

**Zuletzt implementiert:**
- `index.html` ist jetzt die Coaching-Landingpage (warm, einladend, kein Dark-by-default)
- Alle drei Seiten (index, über, kontakt) einheitliche warme Farbpalette + konsistente Nav (Coaching/Über/Kontakt)
- Dark-/Light-Toggle + Sprachumschalter auf allen Seiten wiederhergestellt
- `RESEND_API_KEY` in Coolify gesetzt (App-UUID pleasance-api: `v10lvwfo0he2o3vh0gnqvddp`)
- Formulare aktuell noch auf Formsubmit.co (Übergangslösung bis DNS ready)

**Als nächstes:**
- DNS A-Record `api.pleasance.org` → Hetzner-VPS-IP bei Porkbun setzen
- Formulare auf `api.pleasance.org/contact` umschalten + `topic`-Feld ergänzen
- Formsubmit.co Aktivierungsmail in hallo@pleasance.org bestätigen

**Offene Punkte:**
- `img/robin.jpg` fehlt weiterhin

## Ring-Kontext

Dieses Repo ist Ring 3 (öffentlich). Strategiedokumentation liegt in Ring 1 (`robin-work`) und ist hier nicht zugänglich — alles Nötige ist in `.notes/` gespiegelt.
