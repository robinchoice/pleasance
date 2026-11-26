---
name: Pleasance
colors:
  paper: "#F4F4EE"
  white: "#FFFFFF"
  ink: "#0E2218"
  muted: "#4E5F55"
  fir: "#1D4A34"
  error: "#9B2C2C"
typography:
  family: Bricolage Grotesque (variable, opsz 12–96, wdth 75–100, wght 200–800)
  statement:
    fontSize: clamp(3.4rem, 8.8vw, 8.75rem)
    fontWeight: 800
    fontStretch: 75%
    lineHeight: 0.92
    letterSpacing: -0.025em
  page-title:
    fontSize: clamp(3rem, 7vw, 6.5rem)
    fontWeight: 800
    fontStretch: 75%
  word:
    fontSize: clamp(3rem, 6vw, 5.5rem)
    fontWeight: 750
    fontStretch: 80%
  heading:
    fontSize: clamp(2rem, 3.6vw, 3.25rem)
    fontWeight: 750
    fontStretch: 80%
  h2:
    fontSize: 1.5rem
    fontWeight: 650
  body:
    fontSize: 1.125rem
    lineHeight: 1.55
  lead:
    fontSize: 1.3125rem
    lineHeight: 1.45
layout:
  max-width: 80rem
  gutter: 2rem (mobile 1.25rem)
  grid: 5fr / 7fr
rules:
  thin: 1.5px ink
  thick: 4px ink
  hairline: rgba(14, 34, 24, 0.18)
rounded:
  default: 3px
---

## Überblick

Pleasance ist der Name, unter dem Robin Wahl kleine Apps baut. Die Seite ist bewusst klein: eine Startseite „Ich baue kleine Apps.“ mit den Apps, die live sind, je ein App-Block, darunter nur Impressum und Datenschutz. Keine Angebote, keine Preise, keine Projektzahlen.

Haltung: Eigentum vor Miete, Open Source zuerst, Sorgfalt vor Tempo. Die Seite beweist das selbst: keine Cookies, keine Tracker von Dritten, Schriften auf eigenem Server. Keine Infrastruktur-Details (Hosts, Anbieter, Server) auf die Seite.

## Farben

Tannengrün auf hellem, leicht grünstichigem Papier. Kein Creme, kein Terrakotta.

- **Paper (#F4F4EE):** Seitengrund.
- **Ink (#0E2218):** Text, Linien, Buttons. Sehr dunkles Grün statt Schwarz.
- **Muted (#4E5F55):** Nebentexte.
- **Fir (#1D4A34):** Links, Unterstreichungen, Hover.

## Typografie

Eine Familie: Bricolage Grotesque, selbst gehostet (OFL). Charakter entsteht über die Achsen:

- Große Aussagen schmal (wdth 75–80 %) und fett (750–800), eng gesetzt.
- Fließtext normal breit, 400, optische Größe klein (opsz 14).
- Keine Versalien-Labels über Überschriften, keine einzelnen hervorgehobenen Wörter in Überschriften.

Die Wortmarke (PLEASANCE, Fraunces-Versalien als Pfad) bleibt unverändert und wird per CSS-Mask in Ink eingefärbt.

## Layout

Linksbündig, Raster 5fr/7fr: links das große Wort oder die Überschrift, rechts der Inhalt. Struktur kommt aus Linien, nicht aus Karten:

- 4px-Linie trennt Kopf und Inhalt.
- 1,5px-Linien trennen Zeilen und Abschnitte.
- Haarlinien trennen Listeneinträge.

Nummerierungen nur, wo der Inhalt wirklich eine Reihenfolge ist.

## Komponenten

- **Button:** Ink-Fläche, Paper-Text, 3px Radius. Sekundär: `btn--ghost` mit 1,5px-Kontur.
- **Links:** Fir, 2px unterstrichen.
- **App-Block (Startseite):** Raster 5fr/7fr, links Zeichen aus `img/werkzeuge`, Name und Tagline, rechts Satz, Knöpfe, Quellcode und die Screenshots (`img/apps/<zeichen>-desktop.webp` und `-phone.webp`, aus `docs/screenshots` der App) gleich hoch nebeneinander, auf dem Handy als waagrechte Reihe. Die Blöcke stehen von Hand in `index.html`.

## Bewegung

Keine Einblend-Animationen. Nur Reaktionen auf Nutzeraktionen (Hover). `prefers-reduced-motion` schaltet weiches Scrollen ab.

## Was dieses Design nicht ist

- Kein Creme-mit-Serifen-und-Terrakotta-Look
- Keine Karten-Raster mit Schatten und Icons
- Keine Tracker, keine eingebetteten Dienste von Dritten beim Seitenaufruf
