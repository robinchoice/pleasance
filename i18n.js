'use strict';

// ── Page meta (title + description) ───────────────────────────────────────
const I18N_META = {
  home: {
    title: {
      de: 'Kleine Apps von Robin Wahl — Pleasance',
      en: 'Small apps by Robin Wahl — Pleasance',
    },
    desc: {
      de: 'Songgate, Savor und Music Hub: kleine Open-Source-Apps von Robin Wahl aus Freiburg, mit KI-Agenten gebaut und selbst betrieben.',
      en: 'Songgate, Savor and Music Hub: small open source apps by Robin Wahl from Freiburg, Germany, built with AI agents and self-hosted.',
    },
  },
};

// ── Texts ──────────────────────────────────────────────────────────────────
const I18N = {
  skip: { de: 'Zum Inhalt springen', en: 'Skip to content' },

  nav: {
    theme: { de: 'Dunkles Farbschema', en: 'Dark colour scheme' },
  },
  footer: {
    impressum:   { de: 'Impressum',   en: 'Imprint' },
    datenschutz: { de: 'Datenschutz', en: 'Privacy' },
  },

  // ── index.html ────────────────────────────────────────────────────────────
  home: {
    h1:   { de: 'Ich baue kleine Apps.', en: 'I build small apps.' },
    lead: {
      de: 'Robin Wahl aus Freiburg. Lebenslauf auf <a href="https://www.linkedin.com/in/robinwahl359">LinkedIn</a>.',
      en: 'Robin Wahl from Freiburg, Germany. CV on <a href="https://www.linkedin.com/in/robinwahl359">LinkedIn</a>.',
    },
  },

  apps: {
    code: { de: 'Quellcode', en: 'Source code' },
    songgate: {
      tagline: { de: 'Musik teilen, egal wer was hört.', en: 'Share music, whatever they listen on.' },
      text: {
        de: 'Füg einen Link zu Song, Album oder Podcast ein, Songgate findet ihn bei Spotify, Apple Music, YouTube Music, Deezer und TIDAL. Ohne Konto, Kontakte und Gruppen bleiben auf deinem Gerät.',
        en: 'Paste a link to a song, album or podcast and Songgate finds it on Spotify, Apple Music, YouTube Music, Deezer and TIDAL. No account, friends and groups stay on your device.',
      },
      open: { de: 'Songgate öffnen', en: 'Open Songgate' },
    },
    savor: {
      tagline: { de: 'Deine Coding-Agents. Auf deinem Rechner.', en: 'Your coding agents. On your own machine.' },
      text: {
        de: 'Ein Arbeitsplatz für Claude Code, Codex und OpenCode auf dem eigenen Rechner: Jede Aufgabe endet mit einem klaren Ergebnis, den Fragen an dich und den nächsten Schritten. Für Linux, macOS und Windows, die App fürs Handy ist im Test.',
        en: 'A workspace for Claude Code, Codex and OpenCode on your own computer: every task ends with one clear result, the questions that need you, and next steps. For Linux, macOS and Windows, the phone app is in testing.',
      },
      download: { de: 'Herunterladen', en: 'Download' },
      more:     { de: 'Mehr über Savor', en: 'More about Savor' },
    },
    musichub: {
      tagline: { de: 'Versionen für Musik. Ohne Chaos.', en: 'Versions for music. Without the chaos.' },
      text: {
        de: 'Jede Fassung eines Tracks an einem Ort, Kommentare auf der Sekunde, und am Ende ist klar, welcher Mix freigegeben ist. Music Hub ist noch im Test, einen Zugang gibt es auf Anfrage.',
        en: 'Every version of a track in one place, comments pinned to the second, and in the end it is clear which mix is approved. Music Hub is still in testing, access is available on request.',
      },
      ask: { de: 'Testzugang anfragen', en: 'Request test access' },
    },
  },

  // ── hosting-agb.html ──────────────────────────────────────────────────────
  agb: {
    note: { de: 'Verbindlich ist die deutsche Fassung.', en: 'These terms are available in German only. The German version is binding.' },
  },
};
