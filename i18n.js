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
      de: 'Studio — Pleasance',
      en: 'Studio — Pleasance',
    },
    desc: {
      de: 'Webdesign, Tech-Beratung und Wissensarbeit für Menschen, die ihr Handwerk ernst nehmen.',
      en: 'Web design, tech consulting and knowledge work for people who take their craft seriously.',
    },
  },
  buehne: {
    title: {
      de: 'Bühne — Pleasance',
      en: 'Stage — Pleasance',
    },
    desc: {
      de: 'Musikproduktion und Booking für Künstler, die mehr wollen als einen schnellen Take.',
      en: 'Music production and booking for artists who want more than a quick take.',
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
    studio:    { de: 'Studio',    en: 'Studio'     },
    buehne:    { de: 'Bühne',     en: 'Stage'      },
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
      subtitle: { de: 'Coaching, das zuhört. Websites, die nicht aus dem Baukasten kommen. Musik, die wirklich klingt. Geführt von Robin Wahl.', en: 'Coaching that listens. Websites that aren\'t cookie-cutter. Music that truly sounds. Led by Robin Wahl.' },
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
      verb:  { de: 'Bauen.',   en: 'Building.' },
      title: { de: 'Studio',   en: 'Studio'    },
      text:  { de: 'Websites, Tech-Setups und Wissensarbeit für Selbstständige und kleine Unternehmen. Sorgfältig gebaut, frei von Lock-in.', en: 'Websites, tech setups, and knowledge systems for solopreneurs and small businesses. Built with care, free from lock-in.' },
      link:  { de: 'Studio entdecken →', en: 'Explore Studio →' },
    },
    buehne: {
      verb:  { de: 'Klingen.',  en: 'Sounding.' },
      title: { de: 'Bühne',    en: 'Stage'      },
      text:  { de: 'Musikproduktion und Booking für Künstler, die mehr wollen als einen schnellen Take.', en: 'Music production and booking for artists who want more than a quick take.' },
      link:  { de: 'Bühne entdecken →', en: 'Explore Stage →' },
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
    hero: {
      label:    { de: 'Studio',  en: 'Studio' },
      h1:       { de: 'Websites, die nicht aus dem Baukasten kommen.', en: 'Websites that aren\'t cookie-cutter.' },
      subtitle: { de: 'Ich baue Websites, Tech-Setups und Wissensarbeit für Menschen, die ihr Handwerk ernst nehmen — mit Sorgfalt, ohne Effekthascherei, und ohne dass dir morgen jemand das Theme abschaltet.', en: 'I build websites, tech setups, and knowledge systems for people who take their craft seriously — with care, without gimmicks, and without someone switching off your theme tomorrow.' },
      cta:      { de: 'Lass uns sprechen', en: 'Let\'s talk' },
    },
    workshops: {
      label: { de: 'Drei Bereiche', en: 'Three Areas' },
      h2:    { de: 'Drei Werkstätten unter einem Dach.', en: 'Three workshops under one roof.' },
    },
    w1: {
      title: { de: 'Webdesign & Webentwicklung',  en: 'Web Design & Development' },
      text:  { de: 'Neue Websites und Redesigns für Selbstständige, kleine Unternehmen, Coaches, Studios. Ich arbeite gern auf bestehender Infrastruktur weiter, statt alles abzureißen — und ich baue lieber etwas Einfaches, das hält, als etwas Kompliziertes, das in zwei Jahren niemand mehr versteht.', en: 'New websites and redesigns for solopreneurs, small businesses, coaches, studios. I prefer building on existing infrastructure rather than tearing everything down — and I\'d rather build something simple that lasts than something complex no one understands in two years.' },
    },
    w2: {
      title: { de: 'Tech-Beratung & Selfhosting', en: 'Tech Consulting & Self-Hosting' },
      text:  { de: 'Wenn du raus willst aus den großen Plattformen — eigener Server, Coolify, eigene E-Mail, eigene Analytics, eigene KI-Tools — helfe ich dir beim Aufbau und der Betreuung. Open Source zuerst. Wenig Lock-in.', en: 'If you want out of the big platforms — own server, Coolify, own email, own analytics, own AI tools — I help you build and maintain it. Open Source first. Minimal lock-in.' },
    },
    w3: {
      title: { de: 'Wissensarbeit & Knowledge Bases', en: 'Knowledge Work & Knowledge Bases' },
      text:  { de: 'Ich richte dir Notion, Obsidian oder einen Zettelkasten so ein, dass du ihn auch in zwei Jahren noch benutzt. Für Solo-Wissensarbeit, kleine Teams, Coaches mit komplexem Material.', en: 'I set up Notion, Obsidian, or a Zettelkasten in a way you\'ll still be using in two years. For solo knowledge work, small teams, coaches with complex material.' },
    },
    process: {
      label: { de: 'Vorgehen', en: 'Process' },
      h2:    { de: 'Erst zuhören, dann anbieten.', en: 'Listen first, then propose.' },
      intro: { de: 'Bevor ich dir ein Angebot mache, will ich verstehen, was du brauchst. Deshalb arbeite ich in zwei Stufen.', en: 'Before I make you an offer, I want to understand what you need. That\'s why I work in two stages.' },
    },
    step1: {
      title: { de: 'Discovery & Konzept',  en: 'Discovery & Concept' },
      text:  { de: 'Ein 90-minütiges Gespräch, ein technisches Audit deiner aktuellen Situation, eine Sitemap, ein Moodboard, Wireframes für die wichtigsten Seiten — und ein konkretes Festpreisangebot für die Umsetzung. Dauer: ein bis zwei Wochen. Festpreis. Wenn du danach bei mir bleibst, wird die Hälfte auf das Umsetzungsbudget angerechnet.', en: 'A 90-minute conversation, a technical audit of your current situation, a sitemap, a moodboard, wireframes for key pages — and a concrete fixed-price offer for implementation. Duration: one to two weeks. Fixed price. If you stay with me, half is credited toward the implementation budget.' },
    },
    step2: {
      title: { de: 'Umsetzung',      en: 'Implementation' },
      text:  { de: 'Festpreis auf Basis dessen, was wir in der Discovery gemeinsam definiert haben. Keine bösen Überraschungen, kein Stundenzettel-Spiel.', en: 'Fixed price based on what we defined together in discovery. No unpleasant surprises, no hourly billing games.' },
    },
    forwhom: {
      label: { de: 'Mit wem ich gern arbeite',                          en: 'Who I work with'                      },
      h2:    { de: 'Für Menschen, die ihr Handwerk ernst nehmen.',       en: 'For people who take their craft seriously.' },
      text:  { de: 'Coaches, Therapeutinnen, Tonstudios, Handwerker, kleine Marken, Solo-Selbstständige. Ich arbeite remote und komme vor Ort, wenn es passt und der Rahmen stimmt.', en: 'Coaches, therapists, recording studios, craftspeople, small brands, solopreneurs. I work remote and come on-site when it makes sense and the conditions are right.' },
    },
    values: {
      label: { de: 'Werte',         en: 'Values'          },
      h2:    { de: 'Wofür ich stehe.', en: 'What I stand for.' },
    },
    v1: {
      title: { de: 'Sorgfalt vor Tempo.',    en: 'Care over speed.'        },
      text:  { de: 'Ich liefere lieber etwas Gutes spät als etwas Halbes pünktlich. Aber meistens auch pünktlich.', en: 'I\'d rather deliver something good late than something half-finished on time. But usually on time too.' },
    },
    v2: {
      title: { de: 'Open Source zuerst.',    en: 'Open Source first.'      },
      text:  { de: 'Wenn es eine freie Lösung gibt, die genauso gut ist, nehme ich die. Du sollst nicht in zehn Jahren bei einem Anbieter feststecken, der seine Preise verdoppelt hat.', en: 'If there\'s a free solution that works just as well, I take that one. You shouldn\'t be stuck with a vendor in ten years who doubled their prices.' },
    },
    v3: {
      title: { de: 'Eigentum vor Miete.',    en: 'Ownership over rental.'  },
      text:  { de: 'Deine Inhalte, dein Server, deine Domain, dein Wissen. Ich helfe dir, davon möglichst viel selbst zu besitzen.', en: 'Your content, your server, your domain, your knowledge. I help you own as much of that as possible.' },
    },
    cta: {
      h2:  { de: 'Lass uns reden.', en: 'Let\'s talk.' },
      text: { de: 'Schreib mir eine kurze Nachricht, was du vorhast. Ich melde mich innerhalb von ein paar Tagen mit konkreten nächsten Schritten zurück.', en: 'Write me a brief message about what you have in mind. I\'ll get back to you within a few days with concrete next steps.' },
      btn:  { de: 'Anfrage senden', en: 'Send inquiry' },
    },
  },

  // ── buehne.html ───────────────────────────────────────────────────────────
  buehne: {
    hero: {
      label:    { de: 'Bühne',  en: 'Stage' },
      h1:       { de: 'Wo Musik wirklich klingt.',  en: 'Where music truly sounds.' },
      subtitle: { de: 'Ich produziere Musik im Studio-Netzwerk und vermittle Künstler an Bühnen, die zu ihnen passen. Beides aus derselben Überzeugung: dass es sich lohnt, langsamer zu arbeiten als der Markt es verlangt.', en: 'I produce music in my studio network and connect artists with stages that fit them. Both from the same conviction: it\'s worth working slower than the market demands.' },
    },
    prod: {
      label: { de: 'Im Studio',  en: 'In the Studio' },
      h2:    { de: 'Aufnahme, Mix und Mastering.', en: 'Recording, mix and mastering.' },
      text1: { de: 'Ich arbeite mit einem Netzwerk von Tonstudios. Recording, Mixing, Mastering — von der einzelnen Single bis zum vollen Album. Wenn du nicht weißt, welches Studio zu deinem Projekt passt, finde ich das mit dir gemeinsam heraus.', en: 'I work with a network of recording studios. Recording, mixing, mastering — from a single track to a full album. If you\'re not sure which studio fits your project, I\'ll figure that out with you.' },
      text2: { de: 'Meine Rolle ist je nach Projekt unterschiedlich: manchmal Producer, manchmal Vermittler, manchmal beides.', en: 'My role varies by project: sometimes producer, sometimes connector, sometimes both.' },
    },
    booking: {
      label: { de: 'Auf der Bühne', en: 'On Stage' },
      h2:    { de: 'Künstler an Orte bringen, die sie verdienen.', en: 'Getting artists to the places they deserve.' },
      text1: { de: 'Ich arbeite mit Künstlern, deren Musik mehr Aufmerksamkeit verdient, als ein Algorithmus ihr gibt. Ich vermittle an Veranstalter, Festivals und Räume, die zu ihnen passen.', en: 'I work with artists whose music deserves more attention than an algorithm gives it. I connect them with promoters, festivals, and venues that fit.' },
      text2: { de: 'Kein Massengeschäft. Wenige Künstler, dafür mit Zeit.', en: 'No mass business. Few artists, but with time.' },
    },
    cta: {
      h2:  { de: 'Du machst Musik, oder bookst sie?', en: 'You make music, or book it?' },
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
    p4: { de: 'Und weil Musik der Raum ist, in dem ich angefangen habe, gehören Musikproduktion und Booking ebenfalls zu Pleasance. Wenn ich helfe, eine Aufnahme entstehen zu lassen oder einen Künstler auf eine Bühne zu bringen, ist das für mich nicht weit weg vom Coaching — es ist nur ein anderes Medium für dieselbe Frage: was will da gerade entstehen, und wie räume ich den Weg dafür frei.', en: 'And because music is the space where I started, music production and booking are also part of Pleasance. When I help a recording come to life or get an artist on stage, for me that\'s not far from coaching — it\'s just a different medium for the same question: what wants to emerge here, and how do I clear the path for it.' },
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
      role:    { de: 'Gründer — Coaching · Studio · Bühne', en: 'Founder — Coaching · Studio · Stage' },
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
      subtitle: { de: 'Such dir aus, worum es geht. Ich melde mich innerhalb weniger Tage.', en: 'Choose what it\'s about. I\'ll be in touch within a few days.' },
    },
    coaching: {
      label: { de: 'Coaching', en: 'Coaching' },
      title: { de: 'Du suchst Begleitung in einer Veränderungsphase.', en: 'You\'re looking for support during a period of change.' },
      text:  { de: 'Systemisches Coaching und Logotherapie. Wir beginnen mit einem kostenlosen Erstgespräch — such dir einfach einen Termin aus.', en: 'Systemic coaching and logotherapy. We start with a free initial conversation — just pick a time.' },
      btn:   { de: 'Termin buchen', en: 'Book appointment' },
    },
    studio: {
      label: { de: 'Studio', en: 'Studio' },
      title: { de: 'Du brauchst eine Website, ein Tech-Setup oder eine Knowledge Base.', en: 'You need a website, tech setup, or help with your knowledge system.' },
      text:  { de: 'Schreib mir kurz, was du vorhast. Kein Formular, kein Briefing-Template — ein paar Zeilen reichen.', en: 'Write me a brief message about what you have in mind. No form, no briefing template — a few lines are enough.' },
      btn:   { de: 'Anfrage schreiben', en: 'Write an inquiry' },
    },
    buehne: {
      label: { de: 'Bühne', en: 'Stage' },
      title: { de: 'Du machst Musik oder vertrittst Künstler.', en: 'You make music or represent artists.' },
      text:  { de: 'Erzähl mir von deinem Projekt — Produktion, Booking oder beides. Ich schaue, ob und wie ich helfen kann.', en: 'Tell me about your project — production, booking, or both. I\'ll see if and how I can help.' },
      btn:   { de: 'Nachricht senden', en: 'Send message' },
    },
  },

  // ── coaching.html ─────────────────────────────────────────────────────────
  coaching: {
    hero: {
      label:    { de: 'Systemisches Coaching', en: 'Systemic Coaching' },
      h1:       { de: 'Raum für<br><em>Veränderung</em>', en: 'Space for<br><em>change</em>.' },
      subtitle: { de: 'Du spürst, dass sich etwas verändern will — aber der Weg ist noch unklar. Ich höre zu und begleite dich dabei, Klarheit zu finden.', en: 'You sense something wants to change — but the path is still unclear. I listen and guide you toward clarity.' },
      cta:      { de: 'Gespräch vereinbaren', en: 'Book a conversation' },
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
        cta: { de: 'Lass uns sprechen',                                  en: 'Let\'s talk'                              },
      },
      result_high: {
        h3:  { de: 'Es klingt so, als wärst du bereit für Veränderung',  en: 'It sounds like you\'re ready for change'   },
        p:   { de: 'Du trägst gerade viel mit dir. Und allein damit zu bleiben macht es nicht leichter. Ein geschützter Raum, in dem du gehört wirst, kann der erste Schritt sein. Ich bin da, wenn du bereit bist.', en: 'You\'re carrying a lot right now. And staying with it alone doesn\'t make it easier. A protected space where you\'re heard can be the first step. I\'m here when you\'re ready.' },
        cta: { de: 'Jetzt Gespräch vereinbaren',                          en: 'Book a conversation now'                  },
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
      price_label:  { de: 'Einzelsession',      en: 'Single session'   },
      price_detail: { de: '60 Minuten — online oder vor Ort', en: '60 minutes — online or in person' },
      btn:          { de: 'Termin anfragen',    en: 'Request appointment' },
    },
    netzwerk: {
      label:      { de: 'Ich kenne jemanden', en: 'I know someone' },
      h2:         { de: 'Wenn ich nicht die Richtige bin,<br><em>kenne ich vielleicht sie</em>', en: 'If I\'m not the right fit,<br><em>maybe they are</em>' },
      intro:      { de: 'Coaching ist Vertrauenssache — und manchmal passt es einfach nicht. Über die Jahre habe ich einen Kreis von Menschen kennengelernt, denen ich vertraue: Coaches, Therapeut:innen, Berater:innen mit ganz unterschiedlichen Schwerpunkten. Wenn dein Anliegen nicht zu mir passt, vermittle ich dich gern weiter — persönlich, ohne Liste, ohne Provision.', en: 'Coaching is a matter of trust — and sometimes it just doesn\'t fit. Over the years I\'ve met a circle of people I trust: coaches, therapists, consultants with very different specialties. If your concern doesn\'t fit me, I\'m happy to connect you — personally, without a list, without commission.' },
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
      label: { de: 'Kontakt',         en: 'Contact'    },
      h2:    { de: 'Lass uns sprechen', en: 'Let\'s talk' },
      text:  { de: 'Du brauchst nichts vorzubereiten. Meld dich einfach — per Mail oder Telefon. Wir finden gemeinsam heraus, ob und wie ich dich begleiten kann.', en: 'You don\'t need to prepare anything. Just reach out — by email or phone. Together we\'ll find out if and how I can support you.' },
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
