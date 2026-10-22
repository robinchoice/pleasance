---
name: Pleasance
colors:
  paper: "#F4F4EE"
  white: "#FFFFFF"
  ink: "#0E2218"
  muted: "#4E5F55"
  fir: "#1D4A34"
  deep: "#0F2C1F"
  sprout: "#C8E39F"
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

Pleasance ist das Dach für Robin Wahls freie Arbeit: Software-Entwicklung, Lehre und 1:1-Coaching, gebaut und betrieben mit KI-Agenten. Die Seite zeigt Belege statt Adjektive: echte Werkzeuge, echte Zahlen aus GitHub, echte Abläufe und Lehren.

- **Startseite (Schaufenster):** „Software aus einer Werkstatt voller Agenten.“ Daneben die Werkzeug-Wand mit den 30-Tage-Zahlen, darunter der Weg von der Idee bis live, der Nacht-Band mit Links zu Nachtschicht und Handbuch, die drei Angebote und das Anfrageformular. Führt zu Anfragen.
- **Nachtschicht:** „Nachts arbeitet die Firma. Tagsüber entscheide ich.“ Die Nacht als Zeitleiste, ein Tag in der Fabrik, die Angebote unter den Wörtern Werkzeuge, Wissen und Wege.
- **Handbuch:** Die Arbeitsweise als offene Kapitel: Grundsätze, Fabrik, Nacht, was schiefging, mit mir arbeiten.

Haltung: Eigentum vor Miete, Open Source zuerst, Sorgfalt vor Tempo. Die Seite beweist das selbst: keine Cookies, keine Tracker von Dritten, Schriften auf eigenem Server. Der „Beipackzettel“ auf der Startseite zählt das auf. Er muss immer stimmen. Keine Infrastruktur-Details (Hosts, Anbieter, Server) auf die Seite.

## Farben

Tannengrün auf hellem, leicht grünstichigem Papier. Kein Creme, kein Terrakotta.

- **Paper (#F4F4EE):** Seitengrund.
- **Ink (#0E2218):** Text, Linien, Buttons. Sehr dunkles Grün statt Schwarz.
- **Muted (#4E5F55):** Nebentexte.
- **Fir (#1D4A34):** Links, Unterstreichungen, Hover.
- **Deep (#0F2C1F) + Sprout (#C8E39F):** für dunkle Blöcke: Beipackzettel und die Nacht (`.night`: Band auf der Startseite, Kopf der Nachtschicht). Sprout ist Text-, Link- und Knopffarbe auf Deep, nie Textfarbe auf hellem Grund. Einzige helle Ausnahme: die Kapitelleiste im Handbuch, eine Sprout-Fläche mit Deep-Text.

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

Nummerierungen nur, wo der Inhalt wirklich eine Reihenfolge ist (Ablauf eines Coachings, Weg von der Idee bis live, Kapitel des Handbuchs).

## Komponenten

- **Button:** Ink-Fläche, Paper-Text, 3px Radius. Sekundär: `btn--ghost` mit 1,5px-Kontur.
- **Links:** Fir, 2px unterstrichen.
- **Formulare:** weiße Felder mit 1,5px Ink-Rand; Themenwahl als Radio-Buttons im Button-Look.
- **FAQ:** `details` mit Linien und +/−.
- **Werkzeug-Wand (Werkstatt, Startseite, Reihe auf Software):** Die einzige Stelle mit Kacheln. Auf der Startseite verlinken die Kacheln auf ihr Feld in der Werkstatt, das Plus springt zum Anfrageformular. Jedes Werkzeug zeigt seine dunkle Kachel mit Zeichen aus der Produktfamilie (`img/werkzeuge`, Regeln in der DESIGN.md im Starter), Name und Status stehen auf Papier darunter, ohne Kasten und ohne Schatten. Reihenfolge nach Farbband. Die letzte Kachel „Neuer Prototyp“ öffnet das Anfrageformular in der Wand.

- **Zeitleiste der Nacht (Nachtschicht):** 22 bis 8 Uhr, die Nachtschritte mit ihren echten Uhrzeiten. Nachts zeigt eine Marke „jetzt“ die aktuelle Uhrzeit. Auf dem Handy wird sie zur Liste.
- **Kapitelleiste (Handbuch):** links, klebt beim Scrollen, auf dem Handy eine waagrechte Zeile oben.

## Bewegung

Keine Einblend-Animationen. Nur Reaktionen auf Nutzeraktionen (Hover, Menü, FAQ öffnen). `prefers-reduced-motion` schaltet weiches Scrollen ab.

## Was dieses Design nicht ist

- Kein Creme-mit-Serifen-und-Terrakotta-Look
- Keine Karten-Raster mit Schatten und Icons (die Werkzeug-Wand ist die Ausnahme, siehe Komponenten)
- Keine Tracker, keine eingebetteten Dienste von Dritten beim Seitenaufruf
