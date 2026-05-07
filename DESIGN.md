---
name: Pleasance
colors:
  primary: "#A0522D"
  primary-light: "#C4845C"
  bg: "#FAF5F0"
  bg-alt: "#F0E8DF"
  text: "#3B2F2F"
  text-light: "#6B5B5B"
  accent: "#8B9A6B"
  white: "#FFFDF9"
colors-dark:
  primary: "#C4845C"
  primary-light: "#D4A07A"
  bg: "#1E1A17"
  bg-alt: "#2A2420"
  text: "#E8E0D8"
  text-light: "#A89888"
  accent: "#A0B080"
  white: "#252019"
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: clamp(2.5rem, 5vw, 4rem)
    fontWeight: 400
    lineHeight: 1.2
  h2:
    fontFamily: Playfair Display
    fontSize: clamp(1.8rem, 3.5vw, 2.8rem)
    fontWeight: 400
    lineHeight: 1.2
  h3:
    fontFamily: Playfair Display
    fontSize: 1.3rem
    fontWeight: 400
  body:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.7
  label:
    fontFamily: Inter
    fontSize: 0.85rem
    letterSpacing: 0.15em
    textTransform: uppercase
  nav:
    fontFamily: Inter
    fontSize: 0.9rem
    letterSpacing: 0.03em
    textTransform: uppercase
spacing:
  section-v: 6rem
  section-h: 2rem
  max-width: 1100px
  gap-grid: 4rem
  gap-cards: 2rem
rounded:
  card: 12px
  card-lg: 16px
  btn: 50px
  avatar: 50%
transitions:
  default: 0.3s ease
  fade: 0.8s ease
shadows:
  card: "0 4px 24px rgba(59, 47, 47, 0.06)"
  card-hover: "0 8px 30px rgba(59, 47, 47, 0.08)"
  btn-primary: "0 4px 20px rgba(160, 82, 45, 0.25)"
  nav: "0 1px 10px rgba(59, 47, 47, 0.08)"
---

## Überblick

Pleasance ist ein Atelier — ein persönliches Dach für drei Ausdrucksformen: Coaching, Webdesign/Tech (Studio) und Musikproduktion/Booking (Bühne). Das Gefühl ist **Concierge, nicht Plattform**: warm, handgemacht, direkt. Keine Skalierungsversprechen, keine Dashboards — sondern eine Tür, hinter der eine echte Person steht.

Die Site richtet sich an Menschen, die eine persönliche Empfehlung suchen, keine Buchungsmaschine.

## Farben

Die Palette ist organisch — Erde, Moos, warmes Licht. Kein Primärblau, kein Startup-Türkis.

- **Primary (#A0522D) — Rost:** Hauptakzent für Headlines, Links, CTAs. Warm, nicht aggressiv. Im Dark Mode aufgehellt auf #C4845C, damit der Kontrast stimmt.
- **Accent (#8B9A6B) — Moos:** Zweiter Akzent für Labels, Eyebrows, dekorative Elemente. Gibt Tiefe ohne zu konkurrieren.
- **Background (#FAF5F0) — Off-White:** Kein reines Weiß — das Papier hat Wärme. Alt-Variante (#F0E8DF) für abgehobene Sections.
- **Text (#3B2F2F) — Dunkelbraun:** Kein Schwarz. Soft, aber lesbar. Light-Variante (#6B5B5B) für Fließtext und Metainfo.
- **White (#FFFDF9):** Für Karten-Hintergründe — minimal wärmer als rein weiß.

Dark Mode verwendet dieselben Rollen, nur wärmer abgedunkelt. Kein kühles Dark-Theme — das Atelier-Feeling bleibt.

## Typografie

Zwei Fonts, klare Aufgabenteilung.

**Playfair Display (Serif):** Für alle Überschriften (h1–h3), das Logo, Pull Quotes. Weight 400 — keine fetten Überschriften. Der editoriale, handwerkliche Charakter ist gewollt. Kein Bold, kein Italic als Default.

**Inter (Sans-serif):** Für Body, Nav, Labels, Buttons. Klar, neutral, skaliert gut. Labels und Nav-Links immer uppercase mit großzügigem Letter-Spacing — gibt Struktur ohne Strenge.

Die Kombination: Serif für Charakter, Sans für Lesbarkeit. Niemals zwei Serifenschriften mischen.

## Spacing & Layout

Max-Width 1100px — kein breites Dashboard-Layout. Abschnitte atmen: 6rem vertikal, 2rem horizontal. Grid-Gaps 4rem zwischen Inhaltsspalten.

Kein enges Packen — Whitespace ist Teil des Designs.

## Buttons

Zwei Varianten:
- **Primary:** Rostfarben, pill-shape (border-radius: 50px), uppercase. Hover: aufgehellt + leichtes translateY(-2px).
- **Outline:** Transparent mit Rostrand. Hover: füllt sich mit Primary.

Buttons wirken wie Siegel, nicht wie UI-Elemente.

## Karten & Elevation

Karten haben `border-radius: 12px`, keinen scharfen Schatten — nur ein weiches Aufhellen beim Hover. Im Dark Mode: keine Schatten, stattdessen subtile Border `rgba(255,255,255,0.06)`.

Elevation kommuniziert Interaktivität, nicht Hierarchie.

## Animationen

Sparsam. Scroll-triggered fade-ins (opacity + translateY) für Content-Sections. Transition `0.3s ease` als Default für alle interaktiven Elemente. Die Neurographic-SVG-Animation auf buehne.html ist die einzige komplexe Animation — bewusst einmalig.

Keine Parallax, keine Loader, kein Auto-Play.

## Was dieses Design nicht ist

- Kein Tech-Startup (kein Blau, kein Gradient-Mesh)
- Kein Corporate (keine serifenlose Headline-Schrift, kein Grid aus 12 gleichen Karten)
- Kein Hipster-Minimal (kein reines Weiß, keine 9px Schrift, keine erzwungene Reduktion)
- Keine Plattform (kein Onboarding-Flow, keine Feature-Liste, keine Pricing-Table als Primärelement)
