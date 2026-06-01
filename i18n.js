'use strict';

// ── Page meta (title + description) ───────────────────────────────────────
const I18N_META = {
  index: {
    title: {
      de: 'Pleasance — Ein Atelier für Dinge, die mit Sorgfalt gemacht sind',
      en: 'Pleasance — A Studio for Things Made with Care',
    },
    desc: {
      de: 'Pleasance ist das Atelier von Robin Wahl — für Coaching, Webdesign und Musik. Sorgfältig gemacht.',
      en: 'Pleasance is the studio of Robin Wahl — for coaching, web design and music. Made with care.',
    },
  },
  coaching: {
    title: {
      de: 'Pleasance — Systemisches Coaching',
      en: 'Pleasance — Systemic Coaching',
    },
    desc: {
      de: 'Systemisches Coaching für Menschen in Veränderung. Aktives Zuhören, Logotherapie und Raum für neue Wege.',
      en: 'Systemic coaching for people in transition. Active listening, logotherapy, and space for new paths.',
    },
  },
  studio: {
    title: {
      de: 'Bureau — Pleasance',
      en: 'Bureau — Pleasance',
    },
    desc: {
      de: 'Webdesign, Tech-Beratung und Wissensarbeit für Menschen, die ihr Handwerk ernst nehmen.',
      en: 'Web design, tech consulting and knowledge work for people who take their craft seriously.',
    },
  },
  buehne: {
    title: {
      de: 'Records — Pleasance',
      en: 'Records — Pleasance',
    },
    desc: {
      de: 'Musikproduktion im Studio-Netzwerk. Aufnahme, Mix und Mastering für Künstler, die Klanggüte ernst nehmen.',
      en: 'Music production in the studio network. Recording, mix and mastering for artists who take sound quality seriously.',
    },
  },
  ueber: {
    title: {
      de: 'Über mich — Pleasance',
      en: 'About — Pleasance',
    },
    desc: {
      de: 'Robin Wahl — systemischer Coach, Webdesigner und Musikproduzent. Hinter Pleasance steht eine Person mit einer Haltung.',
      en: 'Robin Wahl — systemic coach, web designer and music producer. Behind Pleasance is one person with a clear stance.',
    },
  },
  kontakt: {
    title: {
      de: 'Kontakt — Pleasance',
      en: 'Contact — Pleasance',
    },
    desc: {
      de: 'Coaching, Webdesign oder Musik — such dir aus, worum es geht.',
      en: 'Coaching, web design or music — choose what it\'s about.',
    },
  },
};

// ── Translations ───────────────────────────────────────────────────────────
const I18N = {

  // ── Shared: Nav ───────────────────────────────────────────────────────────
  nav: {
    coaching:  { de: 'Coaching',  en: 'Coaching'  },
    studio:    { de: 'Bureau',    en: 'Bureau'     },
    buehne:    { de: 'Records',   en: 'Records'    },
    projekte:  { de: 'Projekte',  en: 'Projects'   },
    ueber:     { de: 'Über',      en: 'About'      },
    kontakt:   { de: 'Kontakt',   en: 'Contact'    },
  },

  // ── Shared: Footer ────────────────────────────────────────────────────────
  footer: {
    tagline:       { de: 'Ein Atelier für Dinge, die mit Sorgfalt gemacht sind.', en: 'A studio for things made with care.'         },
    rooms:         { de: 'Räume',         en: 'Rooms'     },
    mehr:          { de: 'Mehr',          en: 'More'      },
    legal_heading: { de: 'Rechtliches',   en: 'Legal'     },
    impressum:     { de: 'Impressum',     en: 'Imprint'   },
    datenschutz:   { de: 'Datenschutz',   en: 'Privacy'   },
    legal_line:    { de: '© 2026 Pleasance · Robin Wahl', en: '© 2026 Pleasance · Robin Wahl' },
  },

  // ── index.html ────────────────────────────────────────────────────────────
  index: {
    hero: {
      h1:       { de: 'Pleasance ist ein Atelier<br>für Dinge, die mit<br><em>Sorgfalt</em> gemacht sind.', en: 'Pleasance is a studio<br>for things made with<br><em>care</em>.' },
      subtitle: { de: 'Coaching, das zuhört. Prozesse, die aufhören Zeit zu stehlen. Musik, die wirklich klingt. Geführt von Robin Wahl.', en: 'Coaching that listens. Processes that stop stealing your time. Music that truly sounds. Led by Robin Wahl.' },
    },
    doors: {
      label: { de: 'Drei Räume',       en: 'Three Rooms'    },
      h2:    { de: 'Womit ich arbeite.', en: 'What I work with.' },
    },
    coaching: {
      verb:  { de: 'Zuhören.',    en: 'Listening.'  },
      title: { de: 'Coaching',    en: 'Coaching'    },
      text:  { de: 'Systemisches Coaching und Logotherapie für Menschen in Veränderungsphasen. Ich höre zu und begleite dich dabei, Klarheit zu finden.', en: 'Systemic coaching and logotherapy for people at turning points. I listen and guide you toward clarity.' },
      link:  { de: 'Coaching entdecken →', en: 'Explore Coaching →' },
    },
    studio: {
      verb:  { de: 'Optimieren.',   en: 'Optimising.' },
      title: { de: 'Bureau',        en: 'Bureau'       },
      text:  { de: 'Prozessoptimierung für Selbstständige — ich schaue wie du arbeitest, finde wo die Zeit verloren geht, und räume das weg.', en: 'Process optimisation for solopreneurs — I look at how you work, find where the time goes, and clear it out.' },
      link:  { de: 'Bureau entdecken →', en: 'Explore Bureau →' },
    },
    buehne: {
      verb:  { de: 'Klingen.',   en: 'Sounding.'       },
      title: { de: 'Records',    en: 'Records'          },
      text:  { de: 'Musikproduktion für Künstler, die Klanggüte ernst nehmen. Kein Baukasten-Sound.', en: 'Music production for artists who take sound quality seriously. No cookie-cutter sound.' },
      link:  { de: 'Records entdecken →', en: 'Explore Records →' },
    },
    about: {
      label: { de: 'Hinter Pleasance', en: 'Behind Pleasance' },
      h2:    { de: 'Eine Person, drei Räume, eine Haltung.', en: 'One person, three rooms, one stance.' },
      text:  { de: 'Ich bin Robin Wahl. Pleasance ist nicht eine Agentur, sondern mein Werkstatt-Name für Dinge, die ich mit Sorgfalt mache. Coaching ist meine älteste Säule, Webdesign meine handwerklichste, Musik mein Resonanzraum. Was sie verbindet, ist die Überzeugung, dass weniger und langsamer oft besser ist als mehr und schneller.', en: 'I\'m Robin Wahl. Pleasance isn\'t an agency — it\'s my studio name for things I make with care. Coaching is my oldest pillar, web design my most hands-on, music my resonance space. What connects them is the conviction that less and slower is often better than more and faster.' },
      link:  { de: 'Mehr über mich →', en: 'More about me →' },
    },
  },

  // ── studio.html ───────────────────────────────────────────────────────────
  studio: {
    status: { de: '● Verfügbar für neue Projekte', en: '● Available for new projects' },
    hero: {
      label:    { de: 'Bureau',  en: 'Bureau' },
      h1:       { de: 'Weniger Prozess.\nMehr von dem, was du wirklich kannst.', en: 'Less process.\nMore of what you\'re actually good at.' },
      subtitle: { de: 'Selbstständige verbringen zu viel Zeit mit dem Falschen. Ich schaue mir an wie du arbeitest, finde wo die Zeit verloren geht — und räume das weg.', en: 'Solopreneurs spend too much time on the wrong things. I look at how you work, find where the time goes — and clear it out.' },
      cta:      { de: 'Zeig mir wie du arbeitest', en: 'Show me how you work' },
      cta2:     { de: 'Wie ich vorgehe ↓', en: 'How I work ↓' },
    },
    stack: {
      label: { de: 'Womit ich arbeite', en: 'What I work with' },
    },
    workshops: {
      label: { de: 'Leistungen', en: 'Services' },
      h2:    { de: 'Drei Hebel, eine Richtung.', en: 'Three levers, one direction.' },
    },
    w1: {
      title: { de: 'Prozess-Review', en: 'Process Review' },
      tag:   { de: 'Analyse', en: 'Analysis' },
      li1:   { de: 'Wie arbeitest du gerade wirklich?', en: 'How do you actually work right now?' },
      li2:   { de: 'Wo verlierst du täglich Zeit?', en: 'Where are you losing time every day?' },
      li3:   { de: 'Welche Tools nutzt du gar nicht?', en: 'Which tools aren\'t actually being used?' },
      li4:   { de: 'Klares Bild in ein bis zwei Wochen', en: 'Clear picture in one to two weeks' },
    },
    w2: {
      title: { de: 'Vereinfachung & Entschlackung', en: 'Simplification & Streamlining' },
      tag:   { de: 'Entschlacken', en: 'Simplify' },
      li1:   { de: 'Fünf Tools die dasselbe tun → eines', en: 'Five tools doing the same thing → one' },
      li2:   { de: 'Verwaltung die 3h kostet → 30 Minuten', en: 'Admin that costs 3h → 30 minutes' },
      li3:   { de: 'Open Source first, kein Lock-in', en: 'Open Source first, no lock-in' },
      li4:   { de: 'Struktur die du in 6 Monaten noch verstehst', en: 'Structure you\'ll still understand in 6 months' },
    },
    w3: {
      title: { de: 'Automatisierung', en: 'Automation' },
      tag:   { de: 'Automatisieren', en: 'Automate' },
      li1:   { de: 'Rechnungen, Follow-ups, Onboarding', en: 'Invoices, follow-ups, onboarding' },
      li2:   { de: 'n8n, Make, KI-Workflows', en: 'n8n, Make, AI workflows' },
      li3:   { de: 'Nur was wirklich Sinn macht — kein Overkill', en: 'Only what actually makes sense — no overkill' },
      li4:   { de: 'Du behältst die Kontrolle', en: 'You stay in control' },
    },
    card: {
      cta: { de: 'Anfragen →', en: 'Inquire →' },
    },
    process: {
      label: { de: 'Vorgehen', en: 'Process' },
      h2:    { de: 'Erst verstehen, dann eingreifen.', en: 'Understand first, then act.' },
      intro: { de: 'Bevor ich irgendetwas ändere, will ich wirklich verstehen wie du arbeitest. Deshalb beginnt alles mit einem Review.', en: 'Before I change anything, I want to genuinely understand how you work. That\'s why everything starts with a review.' },
    },
    step1: {
      title: { de: 'Review',  en: 'Review' },
      text:  { de: 'Ein 60–90-minütiges Gespräch über deinen Alltag: welche Tools, welche Schritte, wo zwickt es. Danach bekommst du ein klares Bild was raus kann, was besser werden kann, was automatisiert werden soll — und ein konkretes Festpreisangebot für die Umsetzung.', en: 'A 60–90-minute conversation about your daily work: which tools, which steps, where it pinches. Afterwards you get a clear picture of what can go, what can improve, what can be automated — and a concrete fixed-price offer for implementation.' },
    },
    step2: {
      title: { de: 'Umsetzung', en: 'Implementation' },
      text:  { de: 'Festpreis auf Basis dessen, was wir im Review gemeinsam definiert haben. Keine bösen Überraschungen, kein Stundenzettel-Spiel.', en: 'Fixed price based on what we defined together in the review. No unpleasant surprises, no hourly billing games.' },
    },
    portfolio: {
      label: { de: 'Ausgewählte Projekte', en: 'Selected Projects' },
      h2:    { de: 'Was ich gebaut habe.', en: 'What I\'ve built.' },
    },
    p1: {
      name: { de: 'Pleasance', en: 'Pleasance' },
      year: { de: '2025 – 2026', en: '2025 – 2026' },
      desc: { de: 'Atelier-Website mit Hub-Architektur, DE/EN Umschaltung und Dark Mode — selbstgehostet, kein CMS, volle Kontrolle.', en: 'Atelier website with hub architecture, DE/EN toggle and dark mode — self-hosted, no CMS, full control.' },
    },
    p2: {
      name: { de: 'mydrugismusic.com', en: 'mydrugismusic.com' },
      year: { de: '2024 – lfd.', en: '2024 – ongoing' },
      desc: { de: 'Musik-Plattform auf eigener Infrastruktur — Gitea, Coolify, Selfhosting auf Hetzner VPS.', en: 'Music platform on own infrastructure — Gitea, Coolify, self-hosting on Hetzner VPS.' },
    },
    p3: {
      name: { de: 'OpenClaw', en: 'OpenClaw' },
      year: { de: '2025', en: '2025' },
      desc: { de: 'Persönlicher KI-Assistent — automatisiert Wissensarbeit, ersetzt langfristig kommerzielle Subscriptions.', en: 'Personal AI assistant — automates knowledge work, long-term replacement for commercial subscriptions.' },
    },
    forwhom: {
      label: { de: 'Mit wem ich gern arbeite', en: 'Who I work with' },
      h2:    { de: 'Für Selbstständige, die im Falschen versinken.', en: 'For solopreneurs drowning in the wrong things.' },
      text:  { de: 'Coaches, Therapeutinnen, Berater, kleine Marken — Menschen die wissen was sie können, aber deren Prozesse ihnen im Weg stehen. Ich arbeite remote und komme vor Ort, wenn es passt.', en: 'Coaches, therapists, consultants, small brands — people who know what they\'re good at, but whose processes get in the way. I work remote and come on-site when it makes sense.' },
    },
    values: {
      label: { de: 'Werte', en: 'Values' },
      h2:    { de: 'Wofür ich stehe.', en: 'What I stand for.' },
    },
    v1: {
      title: { de: 'Einfach vor komplex.', en: 'Simple over complex.' },
      text:  { de: 'Das beste System ist das, das du wirklich nutzt. Ich baue nichts das beeindruckt aber im Weg steht.', en: 'The best system is the one you actually use. I build nothing that impresses but gets in the way.' },
    },
    v2: {
      title: { de: 'Open Source zuerst.', en: 'Open Source first.' },
      text:  { de: 'Wenn es eine freie Lösung gibt, nehme ich die. Du sollst nicht in zehn Jahren bei einem Anbieter feststecken, der seine Preise verdoppelt hat.', en: 'If there\'s a free solution, I take that one. You shouldn\'t be stuck with a vendor in ten years who doubled their prices.' },
    },
    v3: {
      title: { de: 'Eigentum vor Miete.', en: 'Ownership over rental.' },
      text:  { de: 'Deine Inhalte, dein Server, deine Daten. Ich helfe dir, davon möglichst viel selbst zu besitzen.', en: 'Your content, your server, your data. I help you own as much of that as possible.' },
    },
    cta: {
      h2:  { de: 'Zeig mir wie du arbeitest.', en: 'Show me how you work.' },
      text: { de: 'Beschreib mir kurz deinen Alltag — womit du arbeitest, wo es hakt. Ich melde mich mit einem konkreten nächsten Schritt.', en: 'Briefly describe your daily work — what you use, where it pinches. I\'ll get back to you with a concrete next step.' },
      btn:  { de: 'Gespräch anfragen', en: 'Request a conversation' },
    },
  },

  // ── buehne.html ───────────────────────────────────────────────────────────
  buehne: {
    hero: {
      label:     { de: 'Records', en: 'Records' },
      h1:        { de: 'Musik, die wirklich klingt.',  en: 'Music that truly sounds.' },
      subtitle:  { de: 'Ich produziere Musik im Studio-Netzwerk — von der Single bis zum Album. Aufnahme, Mix, Mastering. Kein Baukasten-Sound.', en: 'I produce music in my studio network — from single to album. Recording, mix, mastering. No cookie-cutter sound.' },
      cta_prod:  { de: 'Im Studio →', en: 'In the studio →' },
      cta_book:  { de: 'Anfrage senden ↓', en: 'Send inquiry ↓' },
    },
    prod: {
      label: { de: 'Im Studio',  en: 'In the Studio' },
      h2:    { de: 'Aufnahme, Mix und Mastering.', en: 'Recording, mix and mastering.' },
      text1: { de: 'Ich arbeite mit einem Netzwerk von Tonstudios im Saar-/Südwest-Raum. Recording, Mixing, Mastering — von der einzelnen Single bis zum vollen Album. Wenn du nicht weißt, welches Studio zu deinem Projekt passt, finde ich das mit dir gemeinsam heraus.', en: 'I work with a network of recording studios in the Saar/Southwest region. Recording, mixing, mastering — from a single track to a full album. If you\'re not sure which studio fits your project, I\'ll figure that out with you.' },
      text2: { de: 'Meine Rolle ist je nach Projekt unterschiedlich: manchmal Producer, manchmal Vermittler, manchmal beides. Kein Baukasten-Sound. Kein schneller Take.', en: 'My role varies by project: sometimes producer, sometimes connector, sometimes both. No cookie-cutter sound. No quick take.' },
      cta:   { de: 'Produktion anfragen →', en: 'Inquire about production →' },
    },
    brands: {
      label: { de: 'Womit ich arbeite', en: 'What I work with' },
      h2:    { de: 'Werkzeuge & Partner.', en: 'Tools & partners.' },
    },
    cta: {
      h2:  { de: 'Du machst Musik und willst, dass sie klingt?', en: 'You make music and want it to sound right?' },
      text: { de: 'Schreib mir, was du vorhast. Ich melde mich.', en: 'Tell me about your project. I\'ll get back to you.' },
      btn:  { de: 'Anfrage senden', en: 'Send inquiry' },
    },
  },

  // ── ueber.html ────────────────────────────────────────────────────────────
  ueber: {
    hero: {
      label: { de: 'Über mich', en: 'About me' },
      h1:    { de: 'Ich glaube, dass die meisten Dinge zu schnell gemacht werden.', en: 'I believe most things are made too fast.' },
    },
    p1: { de: 'Ich heiße Robin Wahl. Ich arbeite remote — und komme vor Ort, wenn es passt und der Rahmen stimmt.', en: 'My name is Robin Wahl. I work remotely — and come on-site when it makes sense and the conditions are right.' },
    p2: { de: 'Ich bin systemischer Coach mit einem Hintergrund in Logotherapie. Mein wichtigstes Werkzeug ist das aktive Zuhören — weil echte Veränderung dort beginnt, wo jemand wirklich gehört wird.', en: 'I\'m a systemic coach with a background in logotherapy. My most important tool is active listening — because real change begins where someone is truly heard.' },
    p3: { de: 'Daneben baue ich Websites, betreue Tech-Setups und richte Knowledge Bases ein. Nicht weil ich „auch noch was mit Computern" mache, sondern weil sich für mich beides aus derselben Haltung speist: erst verstehen, dann handeln. Zuhören, dann bauen.', en: 'I also build websites, manage tech setups, and set up knowledge bases. Not because I \'also do something with computers,\' but because for me both stem from the same stance: understand first, then act. Listen, then build.' },
    p4: { de: 'Und weil Musik der Raum ist, in dem ich angefangen habe, gehört Musikproduktion ebenfalls zu Pleasance. Wenn ich helfe, eine Aufnahme entstehen zu lassen, ist das für mich nicht weit weg vom Coaching — es ist nur ein anderes Medium für dieselbe Frage: was will da gerade entstehen, und wie räume ich den Weg dafür frei.', en: 'And because music is the space where I started, music production is also part of Pleasance. When I help a recording come to life, for me that\'s not far from coaching — it\'s just a different medium for the same question: what wants to emerge here, and how do I clear the path for it.' },
    p5: { de: 'Pleasance ist mein Versuch, all das nicht zu trennen, sondern zusammen zu zeigen. Eine Person, drei Räume, eine Haltung.', en: 'Pleasance is my attempt not to keep these things separate, but to show them together. One person, three rooms, one stance.' },
    timeline: {
      label: { de: 'Werdegang',          en: 'Career'       },
      h2:    { de: 'Wie ich dahin gekommen bin.', en: 'How I got here.' },
    },
    t1: {
      company: { de: 'HTW Saarland & Universität des Saarlandes', en: 'HTW Saarland & University of Saarland' },
      role:    { de: 'BA Betriebswirtschaft · MSc Marketing Science · MSc Business Informatics', en: 'BA Business Administration · MSc Marketing Science · MSc Business Informatics' },
      desc:    { de: 'Bachelorarbeit in Kooperation mit Deezer. Frühe Berührung mit Musikstreaming, Marketing und Daten.', en: 'Bachelor\'s thesis in collaboration with Deezer. Early contact with music streaming, marketing and data.' },
    },
    t2: {
      company: { de: 'Deezer', en: 'Deezer' },
      role:    { de: 'Praktikant Social Media & PR Marketing — Berlin', en: 'Intern Social Media & PR Marketing — Berlin' },
      desc:    { de: 'Kampagnen, Künstlerinterviews, Konzertdokumentation. Musik nicht als Konsum, sondern als Handwerk.', en: 'Campaigns, artist interviews, concert documentation. Music not as consumption, but as craft.' },
    },
    t3: {
      company: { de: 'SAP', en: 'SAP' },
      role:    { de: 'Werkstudent → Business Processes Consultant — Sankt Ingbert', en: 'Working Student → Business Processes Consultant — St. Ingbert' },
      desc:    { de: 'Scrum Master in SAFe-Projekten (Catena-X, BMW, VW, Mercedes), Co-Innovation mit dem Bundesfinanzministerium, interne Workshops zu Bitcoin und Open Source.', en: 'Scrum Master in SAFe projects (Catena-X, BMW, VW, Mercedes), co-innovation with the Federal Ministry of Finance, internal workshops on Bitcoin and Open Source.' },
    },
    t4: {
      company: { de: 'Decentraliced AG', en: 'Decentraliced AG' },
      role:    { de: 'Assistent der Geschäftsleitung — Zug, Schweiz', en: 'Assistant to Management — Zug, Switzerland' },
      desc:    { de: 'Holding-Struktur mit 5 Gesellschaften. Prozessautomatisierung, Schnittstelle zu Banken und externen Partnern.', en: 'Holding structure with 5 companies. Process automation, interface to banks and external partners.' },
    },
    t5: {
      company: { de: 'Pleasance', en: 'Pleasance' },
      role:    { de: 'Gründer — Coaching · Bureau · Records', en: 'Founder — Coaching · Bureau · Records' },
      desc:    { de: 'Alles zusammen unter einem Dach. Coaching, Webdesign, Musik — aus einer Haltung.', en: 'Everything together under one roof. Coaching, web design, music — from one stance.' },
    },
    cvcta: {
      label: { de: 'Lebenslauf',  en: 'CV' },
      title: { de: 'Den vollständigen Werdegang als PDF', en: 'The full career as PDF' },
      sub:   { de: 'Alle Stationen, Ausbildungen und Zertifikate — zum Speichern oder Weiterleiten.', en: 'All stations, education and certifications — to save or share.' },
      btn:   { de: 'Lebenslauf öffnen →', en: 'Open CV →' },
    },
    values: {
      label: { de: 'Wofür ich stehe',               en: 'What I stand for'          },
      h2:    { de: 'Eine Haltung, drei Prinzipien.', en: 'One stance, three principles.' },
    },
    v1: {
      title: { de: 'Sorgfalt vor Tempo.',  en: 'Care over speed.'       },
      text:  { de: 'Ich liefere lieber etwas Gutes spät als etwas Halbes pünktlich. Meistens auch pünktlich.', en: 'I\'d rather deliver something good late than something half-finished on time. Usually on time too.' },
    },
    v2: {
      title: { de: 'Open Source zuerst.', en: 'Open Source first.'      },
      text:  { de: 'Wenn es eine freie Lösung gibt, nehme ich die. Du sollst nicht in zehn Jahren bei einem Anbieter feststecken, der seine Preise verdoppelt hat.', en: 'If there\'s a free solution, I take that one. You shouldn\'t be stuck with a vendor in ten years who doubled their prices.' },
    },
    v3: {
      title: { de: 'Eigentum vor Miete.', en: 'Ownership over rental.'  },
      text:  { de: 'Deine Inhalte, dein Server, deine Domain, dein Wissen. Ich helfe dir, davon möglichst viel selbst zu besitzen.', en: 'Your content, your server, your domain, your knowledge. I help you own as much of that as possible.' },
    },
    cta: {
      h2:  { de: 'Wenn dich eines der drei Themen interessiert.', en: 'If one of the three topics interests you.' },
      text: { de: 'Melde dich gern — ich schaue, wie ich helfen kann.', en: 'Feel free to get in touch — I\'ll see how I can help.' },
      btn:  { de: 'Kontakt aufnehmen', en: 'Get in touch' },
    },
  },

  // ── kontakt.html ──────────────────────────────────────────────────────────
  kontakt: {
    hero: {
      label:    { de: 'Kontakt',  en: 'Contact' },
      h1:       { de: 'Sprechen wir.', en: 'Let\'s talk.' },
      subtitle: { de: 'Such dir aus, worum es geht. Ich melde mich innerhalb von zwei Werktagen.', en: 'Choose what it\'s about. I\'ll get back to you within two business days.' },
    },
    form: {
      topic_label:    { de: 'Worum geht es?',  en: 'What is it about?' },
      topic_coaching: { de: 'Coaching',         en: 'Coaching' },
      topic_bureau:   { de: 'Bureau',           en: 'Bureau' },
      topic_records:  { de: 'Records',          en: 'Records' },
      name_label:     { de: 'Dein Name',        en: 'Your name' },
      email_label:    { de: 'Deine E-Mail',     en: 'Your email' },
      message_label:  { de: 'Deine Nachricht',  en: 'Your message' },
      submit:         { de: 'Absenden',         en: 'Send' },
    },
  },

  // ── coaching.html ─────────────────────────────────────────────────────────
  coaching: {
    hero: {
      label:    { de: 'Systemisches Coaching', en: 'Systemic Coaching' },
      h1:       { de: 'Raum für<br><em>Veränderung</em>', en: 'Space for<br><em>change</em>.' },
      subtitle: { de: 'Du spürst, dass sich etwas verändern will — aber der Weg ist noch unklar. Ich höre zu und begleite dich dabei, Klarheit zu finden.', en: 'You sense something wants to change — but the path is still unclear. I listen and guide you toward clarity.' },
      cta:      { de: 'Discovery Call vereinbaren', en: 'Book a discovery call' },
    },
    about: {
      label: { de: 'Über mich',            en: 'About me'              },
      h2:    { de: 'Zuhören ist der Anfang', en: 'Listening is the beginning' },
      p1:    { de: 'Ich bin systemischer Coach mit einem Hintergrund in Logotherapie. Mein wichtigstes Werkzeug ist das aktive Zuhören — weil echte Veränderung dort beginnt, wo jemand wirklich gehört wird.', en: 'I\'m a systemic coach with a background in logotherapy. My most important tool is active listening — because real change begins where someone is truly heard.' },
      p2:    { de: 'In meiner Arbeit geht es nicht darum, dir Ratschläge zu geben. Es geht darum, gemeinsam hinzuschauen: Was bewegt dich? Was hält dich? Und was will sich verändern?', en: 'My work isn\'t about giving you advice. It\'s about looking together: what moves you? What holds you? And what wants to change?' },
      p3:    { de: 'Ich arbeite mit Menschen, die an einem Wendepunkt stehen — beruflich, persönlich oder beides. Wenn du das Gefühl hast, dass es Zeit ist für einen neuen Weg, bist du hier richtig.', en: 'I work with people who are at a turning point — professionally, personally, or both. If you feel it\'s time for a new path, you\'re in the right place.' },
    },
    quiz: {
      label: { de: 'Selbstcheck', en: 'Self-check' },
      h2:    { de: 'Wo stehst du gerade?', en: 'Where are you right now?' },
      q0:    { de: 'Wie zufrieden bist du gerade mit deiner beruflichen Situation?', en: 'How satisfied are you with your professional situation right now?' },
      q0a1:  { de: 'Sehr zufrieden — es passt gut so',                              en: 'Very satisfied — it fits well'          },
      q0a2:  { de: 'Ganz okay, aber da ist ein leises Grummeln',                     en: 'Okay, but there\'s a quiet rumble'      },
      q0a3:  { de: 'Eher unzufrieden — ich merke, dass etwas nicht stimmt',          en: 'Rather dissatisfied — something feels off' },
      q0a4:  { de: 'Ich halte es kaum noch aus',                                     en: 'I can barely stand it anymore'          },
      q1:    { de: 'Wie oft denkst du darüber nach, etwas Grundlegendes zu verändern?', en: 'How often do you think about making a fundamental change?' },
      q1a1:  { de: 'Selten bis nie',                                                 en: 'Rarely or never'                        },
      q1a2:  { de: 'Ab und zu, aber ich schiebe es weg',                             en: 'Occasionally, but I push it aside'      },
      q1a3:  { de: 'Regelmäßig — der Gedanke lässt mich nicht los',                  en: 'Regularly — the thought won\'t leave me' },
      q1a4:  { de: 'Ständig, es ist das Erste woran ich morgens denke',              en: 'Constantly, it\'s the first thing I think of in the morning' },
      q2:    { de: 'Hast du das Gefühl, dass dein Leben gerade einen tieferen Sinn hat?', en: 'Do you feel your life has deeper meaning right now?' },
      q2a1:  { de: 'Ja, ich weiß wofür ich aufstehe',                                en: 'Yes, I know why I get up'               },
      q2a2:  { de: 'Meistens schon, aber manchmal zweifle ich',                       en: 'Mostly, but sometimes I have doubts'    },
      q2a3:  { de: 'Ich bin mir nicht sicher — die Frage beschäftigt mich',           en: 'I\'m not sure — the question preoccupies me' },
      q2a4:  { de: 'Nein, mir fehlt gerade die Richtung',                             en: 'No, I\'m missing direction right now'   },
      q3:    { de: 'Wenn du an eine Veränderung denkst — was hält dich zurück?',      en: 'When you think about change — what\'s holding you back?' },
      q3a1:  { de: 'Eigentlich nichts, mir geht es gut',                              en: 'Nothing really, I\'m doing well'        },
      q3a2:  { de: 'Unsicherheit — ich weiß nicht, wohin',                            en: 'Uncertainty — I don\'t know where to go' },
      q3a3:  { de: 'Angst vor den Konsequenzen',                                      en: 'Fear of the consequences'               },
      q3a4:  { de: 'Ich fühle mich festgefahren und allein damit',                    en: 'I feel stuck and alone in this'         },
      q4:    { de: 'Wann hast du das letzte Mal mit jemandem offen über deine Situation gesprochen?', en: 'When did you last openly talk to someone about your situation?' },
      q4a1:  { de: 'Kürzlich — ich habe gute Gesprächspartner',                       en: 'Recently — I have good people to talk to' },
      q4a2:  { de: 'Schon eine Weile her',                                             en: 'A while ago'                            },
      q4a3:  { de: 'Ich rede selten darüber',                                          en: 'I rarely talk about it'                 },
      q4a4:  { de: 'Ich habe das Gefühl, niemand versteht wirklich was ich meine',     en: 'I feel like no one really understands what I mean' },
      result_low: {
        h3:  { de: 'Du scheinst gut im Fluss zu sein',              en: 'You seem to be in a good flow'              },
        p:   { de: 'Im Moment scheint vieles zu passen. Aber wenn du irgendwann das Gefühl hast, dass sich etwas verschiebt — meld dich gerne. Die Tür steht offen.', en: 'Right now much seems to fit. But if you ever feel something shifting — feel free to reach out. The door is open.' },
        cta: { de: 'Trotzdem Kontakt aufnehmen',                    en: 'Get in touch anyway'                        },
      },
      result_mid: {
        h3:  { de: 'Ein Gespräch könnte dir neue Perspektiven eröffnen', en: 'A conversation could open new perspectives' },
        p:   { de: 'Du spürst, dass sich etwas bewegt. Das ist ein guter Zeitpunkt, um hinzuschauen — bevor der Druck noch größer wird. Manchmal reicht ein einzelnes Gespräch, um Klarheit zu finden.', en: 'You sense something is moving. That\'s a good moment to take a closer look — before the pressure grows further. Sometimes a single conversation is enough to find clarity.' },
        cta: { de: 'Discovery Call vereinbaren',                          en: 'Book a discovery call'                    },
      },
      result_high: {
        h3:  { de: 'Es klingt so, als wärst du bereit für Veränderung',  en: 'It sounds like you\'re ready for change'   },
        p:   { de: 'Du trägst gerade viel mit dir. Und allein damit zu bleiben macht es nicht leichter. Ein geschützter Raum, in dem du gehört wirst, kann der erste Schritt sein. Ich bin da, wenn du bereit bist.', en: 'You\'re carrying a lot right now. And staying with it alone doesn\'t make it easier. A protected space where you\'re heard can be the first step. I\'m here when you\'re ready.' },
        cta: { de: 'Jetzt Discovery Call vereinbaren',                     en: 'Book a discovery call now'                },
      },
      restart: { de: 'Quiz wiederholen', en: 'Restart quiz' },
    },
    angebot: {
      label:        { de: 'Angebot',    en: 'Offering'     },
      h2:           { de: 'Wie ich arbeite', en: 'How I work'  },
      c1_title:     { de: 'Aktives Zuhören',  en: 'Active Listening'  },
      c1_text:      { de: 'Ein geschützter Raum, in dem du dich gehört fühlst — ohne Bewertung, ohne Eile. Das ist die Basis meiner Arbeit.', en: 'A protected space where you feel heard — without judgment, without rush. That\'s the foundation of my work.' },
      c2_title:     { de: 'Systemischer Blick', en: 'Systemic View' },
      c2_text:      { de: 'Wir schauen nicht nur auf dich, sondern auf das ganze System: Beziehungen, Muster, Zusammenhänge — und was sich daraus entwickeln kann.', en: 'We don\'t just look at you, but at the whole system: relationships, patterns, connections — and what can develop from them.' },
      c3_title:     { de: 'Sinn & Richtung',    en: 'Meaning & Direction' },
      c3_text:      { de: 'Mit Elementen der Logotherapie erforschen wir, was dir wirklich wichtig ist und wie du einen Weg findest, der sich stimmig anfühlt.', en: 'Using elements of logotherapy, we explore what truly matters to you and how to find a path that feels right.' },
      discovery_label:  { de: 'Einstieg',                              en: 'Getting started'          },
      discovery_detail: { de: 'Discovery Call — 20 Min · kostenlos', en: 'Discovery call — 20 min · free' },
      discovery_btn:    { de: 'Discovery Call vereinbaren',           en: 'Book a discovery call'    },
      price_label:      { de: 'Einzelsession',                        en: 'Single session'           },
      price_detail:     { de: '60 Minuten — online oder vor Ort',     en: '60 minutes — online or in person' },
      btn:              { de: 'Session anfragen',                      en: 'Request session'          },
    },
    netzwerk: {
      label:      { de: 'Ich kenne jemanden', en: 'I know someone' },
      h2:         { de: 'Wenn ich nicht der Richtige bin,<br><em>kenne ich vielleicht jemanden</em>', en: 'If I\'m not the right fit,<br><em>I might know someone who is</em>' },
      intro:      { de: 'Coaching ist Vertrauenssache — und manchmal passt es einfach nicht. Über die Jahre habe ich einen Kreis von Menschen kennengelernt, denen ich vertraue: Coaches, Therapeuten, Berater mit ganz unterschiedlichen Schwerpunkten. Wenn dein Anliegen nicht zu mir passt, vermittle ich dich gern weiter — persönlich, ohne Liste, ohne Provision.', en: 'Coaching is a matter of trust — and sometimes it just doesn\'t fit. Over the years I\'ve met a circle of people I trust: coaches, therapists, consultants with very different specialties. If your concern doesn\'t fit me, I\'m happy to connect you — personally, without a list, without commission.' },
      step1_title: { de: 'Kurz erzählen',   en: 'Tell me briefly'   },
      step1_text:  { de: 'Schreib mir in ein paar Sätzen, wo du gerade stehst und was du suchst.', en: 'Write me a few sentences about where you are and what you\'re looking for.' },
      step2_title: { de: 'Ich denke nach',  en: 'I\'ll think it over' },
      step2_text:  { de: 'Ich überlege, wer aus meinem Kreis zu deinem Anliegen passen könnte.', en: 'I\'ll consider who from my circle might match your concern.' },
      step3_title: { de: 'Ich verbinde euch', en: 'I\'ll connect you' },
      step3_text:  { de: 'Du bekommst eine persönliche Empfehlung — und entscheidest selbst, was daraus wird.', en: 'You\'ll receive a personal recommendation — and decide yourself what happens next.' },
      note:        { de: 'Kostenlos. Unverbindlich. Vertraulich.', en: 'Free. Non-binding. Confidential.' },
      btn:         { de: 'Erzähl mir, was du suchst', en: 'Tell me what you\'re looking for' },
    },
    contact: {
      label: { de: 'Kontakt',           en: 'Contact'      },
      h2:    { de: 'Lass uns sprechen',  en: 'Let\'s talk'  },
      text:  { de: 'Du brauchst nichts vorzubereiten. Schreib mir einfach — ich melde mich innerhalb von zwei Werktagen.', en: 'You don\'t need to prepare anything. Just write to me — I\'ll get back to you within two business days.' },
      btn:   { de: 'Kontakt aufnehmen', en: 'Get in touch'  },
    },
    faq: {
      label: { de: 'Häufige Fragen',          en: 'FAQ'                         },
      h2:    { de: 'Das werde ich oft gefragt', en: 'Questions I\'m often asked'  },
      q1:    { de: 'Was ist systemisches Coaching?',     en: 'What is systemic coaching?'    },
      a1:    { de: 'Systemisches Coaching betrachtet nicht nur dich als Einzelperson, sondern das gesamte System, in dem du dich bewegst — Beziehungen, Rollen, Muster. So entstehen oft überraschend neue Perspektiven und Lösungen.', en: 'Systemic coaching looks not just at you as an individual, but at the entire system you move in — relationships, roles, patterns. This often creates surprisingly new perspectives and solutions.' },
      q2:    { de: 'Was ist Logotherapie?',              en: 'What is logotherapy?'          },
      a2:    { de: 'Logotherapie wurde von Viktor Frankl begründet und arbeitet mit der Frage nach dem Sinn. Es geht darum, herauszufinden was dir wirklich wichtig ist und wie du danach leben kannst — besonders in Zeiten des Umbruchs.', en: 'Logotherapy was founded by Viktor Frankl and works with the question of meaning. It\'s about finding out what truly matters to you and how to live accordingly — especially in times of upheaval.' },
      q3:    { de: 'Für wen ist das Coaching geeignet?', en: 'Who is coaching suitable for?' },
      a3:    { de: 'Für Menschen, die an einem Wendepunkt stehen — beruflich, persönlich oder beides. Wenn du das Gefühl hast, dass sich etwas verändern will, aber der Weg noch unklar ist, bist du hier richtig. Vorkenntnisse brauchst du keine.', en: 'For people who are at a turning point — professionally, personally, or both. If you feel something wants to change but the path is still unclear, you\'re in the right place. No prior knowledge needed.' },
      q4:    { de: 'Wie läuft eine Session ab?',         en: 'How does a session work?'      },
      a4:    { de: 'Wir treffen uns für 60 Minuten — online oder vor Ort. Du bestimmst das Thema. Ich höre zu, stelle Fragen und begleite dich dabei, Klarheit zu finden. Es gibt keine Hausaufgaben und keinen Druck.', en: 'We meet for 60 minutes — online or in person. You choose the topic. I listen, ask questions, and guide you toward clarity. No homework, no pressure.' },
      q5:    { de: 'Finden die Sessions online oder vor Ort statt?', en: 'Are sessions online or in person?' },
      a5:    { de: 'Beides ist möglich. Online-Sessions laufen über einen Videocall. Für Vor-Ort-Sessions stimmen wir den Ort gemeinsam ab.', en: 'Both are possible. Online sessions run via video call. For in-person sessions, we agree on the location together.' },
      q6:    { de: 'Muss ich mich auf ein Erstgespräch vorbereiten?',  en: 'Do I need to prepare for the initial consultation?' },
      a6:    { de: 'Nein. Komm einfach so wie du bist. Wir finden gemeinsam heraus, ob und wie ich dich begleiten kann. Das Erstgespräch ist unverbindlich.', en: 'No. Come as you are. Together we\'ll find out if and how I can support you. The initial consultation is non-binding.' },
    },
    newsletter: {
      h2:          { de: 'Impulse für deinen Weg',  en: 'Impulses for your path'       },
      subtitle:    { de: 'Gedanken zu Veränderung, Sinn und neuen Wegen — kostenlos in dein Postfach.', en: 'Thoughts on change, meaning, and new directions — free in your inbox.' },
      placeholder: { de: 'Deine E-Mail-Adresse',    en: 'Your email address'            },
      btn:         { de: 'Anmelden',                en: 'Subscribe'                     },
    },
  },
};
