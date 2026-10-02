'use strict';

// ── Page meta (title + description) ───────────────────────────────────────
const I18N_META = {
  home: {
    title: {
      de: 'Software-Entwicklung, Kurse und Coaching in Freiburg — Pleasance',
      en: 'Software development, courses and coaching in Freiburg — Pleasance',
    },
    desc: {
      de: 'Robin Wahl aus Freiburg: Websites, Web-Apps und Automatisierungen, die dir gehören. Kurse zu Scrum und KI. Systemisches Coaching, online im ganzen DACH-Raum.',
      en: 'Robin Wahl from Freiburg, Germany: websites, web apps and automations you own. Courses on Scrum and AI. Systemic coaching, online across Germany, Austria and Switzerland.',
    },
  },
  coaching: {
    title: {
      de: 'Systemisches Coaching online aus Freiburg — Pleasance',
      en: 'Systemic coaching online from Freiburg — Pleasance',
    },
    desc: {
      de: 'Systemisches Coaching mit Elementen der Logotherapie für Menschen an einem Wendepunkt. Online per Videocall, aus Freiburg im Breisgau. Erstgespräch kostenlos.',
      en: 'Systemic coaching with elements of logotherapy for people at a turning point. Online via video call, from Freiburg, Germany. First conversation free.',
    },
  },
  ueber: {
    title: {
      de: 'Über mich: Robin Wahl aus Freiburg — Pleasance',
      en: 'About Robin Wahl from Freiburg — Pleasance',
    },
    desc: {
      de: 'Robin Wahl aus Freiburg im Breisgau: freier Software-Entwickler, Dozent und systemischer Coach. Vorher Scrum Master und Berater bei SAP.',
      en: 'Robin Wahl from Freiburg, Germany: freelance software developer, lecturer and systemic coach. Previously Scrum Master and consultant at SAP.',
    },
  },
  kontakt: {
    title: {
      de: 'Kontakt — Pleasance, Freiburg im Breisgau',
      en: 'Contact — Pleasance, Freiburg im Breisgau',
    },
    desc: {
      de: 'Schreib mir, worum es geht: Software, Kurse oder Coaching. Robin Wahl aus Freiburg meldet sich innerhalb von zwei Werktagen.',
      en: 'Tell me what it\'s about: software, courses or coaching. Robin Wahl from Freiburg will get back to you within two business days.',
    },
  },
};

// ── Translations ───────────────────────────────────────────────────────────
const I18N = {

  skip: { de: 'Zum Inhalt springen', en: 'Skip to content' },

  // ── Shared: Nav + Footer ──────────────────────────────────────────────────
  nav: {
    menu:     { de: 'Menü',      en: 'Menu'     },
    software: { de: 'Software',  en: 'Software' },
    lehre:    { de: 'Lehre',     en: 'Teaching' },
    coaching: { de: 'Coaching',  en: 'Coaching' },
    ueber:    { de: 'Über mich', en: 'About'    },
    kontakt:  { de: 'Kontakt',   en: 'Contact'  },
    theme:    { de: 'Dunkles Farbschema', en: 'Dark colour scheme' },
  },
  footer: {
    impressum:   { de: 'Impressum',   en: 'Imprint' },
    datenschutz: { de: 'Datenschutz', en: 'Privacy' },
  },

  // ── index.html ────────────────────────────────────────────────────────────
  home: {
    statement: { de: '<a href="#werkzeuge">Werkzeuge</a>, <a href="#wissen">Wissen</a> und <a href="#wege">Wege</a>, die dir gehören.', en: '<a href="#werkzeuge">Tools</a>, <a href="#wissen">knowledge</a> and <a href="#wege">paths</a> that belong to you.' },
    intro:     { de: 'Pleasance ist Robin Wahl: freier Software-Entwickler, Dozent und Coach aus Freiburg im Breisgau. Ich baue Software, die du selbst betreiben kannst, erkläre, wie Dinge funktionieren, und begleite dich auf deinem eigenen Weg. Für Menschen und Firmen in Deutschland, Österreich und der Schweiz.', en: 'Pleasance is Robin Wahl: freelance software developer, lecturer and coach based in Freiburg im Breisgau, Germany. I build software you can run yourself, explain how things work, and support you on your own path. For people and companies in Germany, Austria and Switzerland.' },
    cta:       { de: 'Schreib mir', en: 'Write to me' },
    software: {
      word: { de: 'Werkzeuge', en: 'Tools' },
      h2:   { de: 'Software-Entwicklung', en: 'Software development' },
      p1:   { de: 'Web-Apps, Websites und Automatisierungen für Selbstständige, kleine Firmen und Teams. Open Source, selbst gehostet, sauber dokumentiert. Vom ersten Prototyp bis zum Betrieb auf deinem eigenen Server.', en: 'Web apps, websites and automations for freelancers, small businesses and teams. Open source, self-hosted, properly documented. From the first prototype to running on your own server.' },
      p2:   { de: 'Diese Website ist ein Beispiel: ohne CMS, ohne Cookies, auf meinem eigenen Server.', en: 'This website is an example: no CMS, no cookies, on my own server.' },
      tools:  { de: 'Womit ich arbeite', en: 'What I work with' },
      t_dev:  { de: 'Entwicklung', en: 'Development' },
      t_ops:  { de: 'Betrieb', en: 'Operations' },
      t_auto: { de: 'Automatisierung und KI', en: 'Automation and AI' },
      t_know: { de: 'Wissen', en: 'Knowledge' },
      cta:  { de: 'Projekt besprechen', en: 'Discuss a project' },
    },
    lehre: {
      word:       { de: 'Wissen', en: 'Knowledge' },
      h2:         { de: 'Lehre', en: 'Teaching' },
      p1:         { de: 'Kurse und Workshops für Teams, Hochschulen und Einzelne. Praxisnah, mit Übungen aus echten Projekten.', en: 'Courses and workshops for teams, universities and individuals. Hands-on, with exercises from real projects.' },
      scrum:      { de: 'Vorbereitung auf Scrum.org-Zertifizierungen', en: 'Preparation for Scrum.org certifications' },
      own:        { de: 'Eigene Kurse', en: 'My own courses' },
      proto:      { de: 'Prototyping', en: 'Prototyping' },
      ki:         { de: 'Lernen und Texte schreiben mit KI', en: 'Learning and writing with AI' },
      geld:       { de: 'Geldgeschichte, Bitcoin und Österreichische Schule', en: 'History of money, Bitcoin and the Austrian School' },
      cta:        { de: 'Kurs anfragen', en: 'Enquire about a course' },
    },
    coaching: {
      word: { de: 'Wege', en: 'Paths' },
      h2:   { de: '1:1-Coaching', en: '1:1 coaching' },
      p1:   { de: 'Für Menschen an einem Wendepunkt, beruflich oder persönlich. Systemisch, mit Elementen der Logotherapie, online. Das erste Gespräch dauert 20 Minuten und kostet nichts.', en: 'For people at a turning point, professionally or personally. Systemic, with elements of logotherapy, online. The first conversation takes 20 minutes and is free.' },
      more: { de: 'Mehr zum Coaching', en: 'More about coaching' },
      cta:  { de: 'Discovery Call vereinbaren', en: 'Book a discovery call' },
    },
    facts: {
      h2:        { de: 'Beipackzettel dieser Website', en: 'The fine print of this website' },
      lead:      { de: 'Was diese Seite mit deinem Browser macht, und was nicht.', en: 'What this site does with your browser, and what it doesn\'t.' },
      cookies_t: { de: 'Cookies', en: 'Cookies' },
      cookies_d: { de: 'Keine.', en: 'None.' },
      tracker_t: { de: 'Tracker von Dritten', en: 'Third-party trackers' },
      tracker_d: { de: 'Keine. Es gibt auch keine Besucherstatistik.', en: 'None. There are no visitor statistics either.' },
      fonts_t:   { de: 'Schriften', en: 'Fonts' },
      fonts_d:   { de: 'Vom eigenen Server, nicht von Google.', en: 'Served from my own server, not from Google.' },
      server_t:  { de: 'Server', en: 'Server' },
      server_d:  { de: 'Hetzner in Nürnberg.', en: 'Hetzner in Nuremberg.' },
      code_t:    { de: 'Quellcode', en: 'Source code' },
      code_d:    { de: 'Offen, <a href="https://github.com/robinchoice/pleasance">auf GitHub</a>.', en: 'Open, <a href="https://github.com/robinchoice/pleasance">on GitHub</a>.' },
    },
    mail: {
      text: { de: 'Schreib mir, worum es geht. Ich melde mich innerhalb von zwei Werktagen.', en: 'Tell me what it\'s about. I\'ll get back to you within two business days.' },
      form: { de: 'Oder nutze das <a href="kontakt.html">Kontaktformular</a>.', en: 'Or use the <a href="kontakt.html">contact form</a>.' },
    },
  },

  // ── coaching.html ─────────────────────────────────────────────────────────
  coaching: {
    hero: {
      h1:       { de: 'Raum für Veränderung.', en: 'Space for change.' },
      subtitle: { de: 'Du spürst, dass sich etwas verändern will — aber der Weg ist noch unklar. Ich höre zu und begleite dich dabei, Klarheit zu finden.', en: 'You sense something wants to change — but the path is still unclear. I listen and guide you toward clarity.' },
      cta:      { de: 'Discovery Call vereinbaren', en: 'Book a discovery call' },
    },
    about: {
      h2: { de: 'Zuhören ist der Anfang', en: 'Listening is the beginning' },
      p1: { de: 'Ich bin systemischer Coach mit einem Hintergrund in Logotherapie. Mein wichtigstes Werkzeug ist das aktive Zuhören — weil echte Veränderung dort beginnt, wo jemand wirklich gehört wird.', en: 'I\'m a systemic coach with a background in logotherapy. My most important tool is active listening — because real change begins where someone is truly heard.' },
      p2: { de: 'In meiner Arbeit geht es nicht darum, dir Ratschläge zu geben. Es geht darum, gemeinsam hinzuschauen: Was bewegt dich? Was hält dich? Und was will sich verändern?', en: 'My work isn\'t about giving you advice. It\'s about looking together: what moves you? What holds you? And what wants to change?' },
      p3: { de: 'Ich arbeite mit Menschen, die an einem Wendepunkt stehen — beruflich, persönlich oder beides. Wenn du das Gefühl hast, dass es Zeit ist für einen neuen Weg, bist du hier richtig.', en: 'I work with people who are at a turning point — professionally, personally, or both. If you feel it\'s time for a new path, you\'re in the right place.' },
    },
    quiz: {
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
      h2:               { de: 'Wie ich arbeite', en: 'How I work' },
      c1_title:         { de: 'Aktives Zuhören', en: 'Active listening' },
      c1_text:          { de: 'Ein geschützter Raum, in dem du dich gehört fühlst — ohne Bewertung, ohne Eile. Das ist die Basis meiner Arbeit.', en: 'A protected space where you feel heard — without judgment, without rush. That\'s the foundation of my work.' },
      c2_title:         { de: 'Systemischer Blick', en: 'Systemic view' },
      c2_text:          { de: 'Wir schauen nicht nur auf dich, sondern auf das ganze System: Beziehungen, Muster, Zusammenhänge — und was sich daraus entwickeln kann.', en: 'We don\'t just look at you, but at the whole system: relationships, patterns, connections — and what can develop from them.' },
      c3_title:         { de: 'Sinn und Richtung', en: 'Meaning and direction' },
      c3_text:          { de: 'Mit Elementen der Logotherapie erforschen wir, was dir wirklich wichtig ist und wie du einen Weg findest, der sich stimmig anfühlt.', en: 'Using elements of logotherapy, we explore what truly matters to you and how to find a path that feels right.' },
      discovery_label:  { de: 'Einstieg', en: 'Getting started' },
      discovery_detail: { de: 'Discovery Call', en: 'Discovery call' },
      discovery_note:   { de: '20 Minuten, kostenlos und unverbindlich', en: '20 minutes, free and without obligation' },
      discovery_btn:    { de: 'Discovery Call vereinbaren', en: 'Book a discovery call' },
      price_label:      { de: 'Einzelsession', en: 'Single session' },
      price_detail:     { de: '60 Minuten', en: '60 minutes' },
      price_note:       { de: 'online per Videocall', en: 'online via video call' },
      btn:              { de: 'Session anfragen', en: 'Request a session' },
    },
    netzwerk: {
      h2:          { de: 'Wenn ich nicht der Richtige bin, kenne ich vielleicht jemanden', en: 'If I\'m not the right fit, I might know someone who is' },
      intro:       { de: 'Coaching ist Vertrauenssache — und manchmal passt es einfach nicht. Über die Jahre habe ich einen Kreis von Menschen kennengelernt, denen ich vertraue: Coaches, Therapeuten, Berater mit ganz unterschiedlichen Schwerpunkten. Wenn dein Anliegen nicht zu mir passt, vermittle ich dich gern weiter — persönlich, ohne Liste, ohne Provision.', en: 'Coaching is a matter of trust — and sometimes it just doesn\'t fit. Over the years I\'ve met a circle of people I trust: coaches, therapists, consultants with very different specialties. If your concern doesn\'t fit me, I\'m happy to connect you — personally, without a list, without commission.' },
      step1_title: { de: 'Kurz erzählen', en: 'Tell me briefly' },
      step1_text:  { de: 'Schreib mir in ein paar Sätzen, wo du gerade stehst und was du suchst.', en: 'Write me a few sentences about where you are and what you\'re looking for.' },
      step2_title: { de: 'Ich denke nach', en: 'I\'ll think it over' },
      step2_text:  { de: 'Ich überlege, wer aus meinem Kreis zu deinem Anliegen passen könnte.', en: 'I\'ll consider who from my circle might match your concern.' },
      step3_title: { de: 'Ich verbinde euch', en: 'I\'ll connect you' },
      step3_text:  { de: 'Du bekommst eine persönliche Empfehlung — und entscheidest selbst, was daraus wird.', en: 'You\'ll receive a personal recommendation — and decide yourself what happens next.' },
      note:        { de: 'Kostenlos. Unverbindlich. Vertraulich.', en: 'Free. Non-binding. Confidential.' },
      btn:         { de: 'Erzähl mir, was du suchst', en: 'Tell me what you\'re looking for' },
    },
    contact: {
      h2:          { de: 'Lass uns sprechen', en: 'Let\'s talk' },
      text:        { de: 'Du brauchst nichts vorzubereiten. Schreib mir einfach — ich melde mich innerhalb von zwei Werktagen.', en: 'You don\'t need to prepare anything. Just write to me — I\'ll get back to you within two business days.' },
      placeholder: { de: 'Was bewegt dich gerade?', en: 'What\'s on your mind?' },
    },
    faq: {
      h2: { de: 'Das werde ich oft gefragt', en: 'Questions I\'m often asked' },
      q1: { de: 'Was ist systemisches Coaching?', en: 'What is systemic coaching?' },
      a1: { de: 'Systemisches Coaching betrachtet nicht nur dich als Einzelperson, sondern das gesamte System, in dem du dich bewegst — Beziehungen, Rollen, Muster. So entstehen oft überraschend neue Perspektiven und Lösungen.', en: 'Systemic coaching looks not just at you as an individual, but at the entire system you move in — relationships, roles, patterns. This often creates surprisingly new perspectives and solutions.' },
      q2: { de: 'Was ist Logotherapie?', en: 'What is logotherapy?' },
      a2: { de: 'Logotherapie wurde von Viktor Frankl begründet und arbeitet mit der Frage nach dem Sinn. Es geht darum, herauszufinden was dir wirklich wichtig ist und wie du danach leben kannst — besonders in Zeiten des Umbruchs.', en: 'Logotherapy was founded by Viktor Frankl and works with the question of meaning. It\'s about finding out what truly matters to you and how to live accordingly — especially in times of upheaval.' },
      q3: { de: 'Für wen ist das Coaching geeignet?', en: 'Who is coaching suitable for?' },
      a3: { de: 'Für Menschen, die an einem Wendepunkt stehen — beruflich, persönlich oder beides. Wenn du das Gefühl hast, dass sich etwas verändern will, aber der Weg noch unklar ist, bist du hier richtig. Vorkenntnisse brauchst du keine.', en: 'For people who are at a turning point — professionally, personally, or both. If you feel something wants to change but the path is still unclear, you\'re in the right place. No prior knowledge needed.' },
      q4: { de: 'Wie läuft eine Session ab?', en: 'How does a session work?' },
      a4: { de: 'Wir treffen uns für 60 Minuten online. Du bestimmst das Thema. Ich höre zu, stelle Fragen und begleite dich dabei, Klarheit zu finden. Es gibt keine Hausaufgaben und keinen Druck.', en: 'We meet online for 60 minutes. You choose the topic. I listen, ask questions, and guide you toward clarity. No homework, no pressure.' },
      q5: { de: 'Wie finden die Sessions statt?', en: 'How do sessions take place?' },
      a5: { de: 'Sessions finden online statt — über einen Videocall. Du brauchst nichts Besonderes, nur eine stabile Verbindung und einen ruhigen Moment.', en: 'Sessions take place online — via video call. You don\'t need anything special, just a stable connection and a quiet moment.' },
      q6: { de: 'Muss ich mich auf ein Erstgespräch vorbereiten?', en: 'Do I need to prepare for the initial consultation?' },
      a6: { de: 'Nein. Komm einfach so wie du bist. Wir finden gemeinsam heraus, ob und wie ich dich begleiten kann. Das Erstgespräch ist unverbindlich.', en: 'No. Come as you are. Together we\'ll find out if and how I can support you. The initial consultation is non-binding.' },
      q7: { de: 'Wo sitzt du, und von wo aus kann ich teilnehmen?', en: 'Where are you based, and where can I join from?' },
      a7: { de: 'Ich lebe und arbeite in Freiburg im Breisgau. Weil die Sessions online stattfinden, kannst du von überall teilnehmen, ob aus Deutschland, Österreich oder der Schweiz.', en: 'I live and work in Freiburg im Breisgau, Germany. Because sessions take place online, you can join from anywhere, whether from Germany, Austria or Switzerland.' },
    },
    newsletter: {
      h2:          { de: 'Impulse für deinen Weg', en: 'Impulses for your path' },
      subtitle:    { de: 'Gedanken zu Veränderung, Sinn und neuen Wegen — kostenlos in dein Postfach.', en: 'Thoughts on change, meaning, and new directions — free in your inbox.' },
      placeholder: { de: 'Deine E-Mail-Adresse', en: 'Your email address' },
      btn:         { de: 'Anmelden', en: 'Subscribe' },
    },
  },

  // ── ueber.html ────────────────────────────────────────────────────────────
  ueber: {
    h1:    { de: 'Ich glaube, dass die meisten Dinge zu schnell gemacht werden.', en: 'I believe most things are made too fast.' },
    who:   { de: 'Wer ich bin', en: 'Who I am' },
    p1:    { de: 'Ich heiße Robin Wahl und lebe in Freiburg im Breisgau. Ich baue Software, unterrichte und begleite Menschen im 1:1-Coaching, freiberuflich und unter dem Namen Pleasance.', en: 'My name is Robin Wahl and I live in Freiburg im Breisgau, Germany. I build software, teach, and coach people one-to-one, as a freelancer under the name Pleasance.' },
    p2:    { de: 'Vorher war ich Business Process Consultant und Scrum Master bei SAP, unter anderem im Catena-X-Netzwerk der Autoindustrie und in einem KI-Projekt mit dem Bundesfinanzministerium. Danach habe ich in einer Schweizer Holding Abläufe automatisiert.', en: 'Before that I was a business process consultant and Scrum Master at SAP, among other things in the automotive industry\'s Catena-X network and in an AI project with the German Federal Ministry of Finance. After that I automated processes at a Swiss holding company.' },
    p3:    { de: 'Ich bin selbst als Professional Scrum Master (PSM I) zertifiziert und arbeite als Coach systemisch, mit Elementen der Logotherapie. Studiert habe ich Betriebswirtschaft, Marketing Science und Wirtschaftsinformatik in Saarbrücken.', en: 'I\'m a certified Professional Scrum Master (PSM I) myself, and as a coach I work systemically, with elements of logotherapy. I studied business administration, marketing science and business informatics in Saarbrücken.' },
    p4:    { de: 'Pleasance ist der Name, unter dem ich das alles tue. Eine Person, eine Haltung: erst verstehen, dann handeln.', en: 'Pleasance is the name I do all of this under. One person, one stance: understand first, then act.' },
    values: { de: 'Wofür ich stehe', en: 'What I stand for' },
    v1: {
      title: { de: 'Sorgfalt vor Tempo.', en: 'Care over speed.' },
      text:  { de: 'Ich liefere lieber etwas Gutes spät als etwas Halbes pünktlich. Meistens auch pünktlich.', en: 'I\'d rather deliver something good late than something half-finished on time. Usually on time too.' },
    },
    v2: {
      title: { de: 'Open Source zuerst.', en: 'Open Source first.' },
      text:  { de: 'Wenn es eine freie Lösung gibt, nehme ich die. Du sollst nicht in zehn Jahren bei einem Anbieter feststecken, der seine Preise verdoppelt hat.', en: 'If there\'s a free solution, I take that one. You shouldn\'t be stuck with a vendor in ten years who doubled their prices.' },
    },
    v3: {
      title: { de: 'Eigentum vor Miete.', en: 'Ownership over rental.' },
      text:  { de: 'Deine Inhalte, dein Server, deine Domain, dein Wissen. Ich helfe dir, davon möglichst viel selbst zu besitzen.', en: 'Your content, your server, your domain, your knowledge. I help you own as much of that as possible.' },
    },
    cv: {
      h2:   { de: 'Lebenslauf', en: 'CV' },
      text: { de: 'Alle Stationen, Abschlüsse und Zertifikate auf einer Seite, zum Lesen oder als PDF.', en: 'All positions, degrees and certificates on one page, to read or save as PDF.' },
      link: { de: 'Lebenslauf ansehen', en: 'View CV' },
    },
    cta: {
      h2:   { de: 'Klingt das nach dem, was du gerade brauchst?', en: 'Does this sound like what you need right now?' },
      text: { de: 'Schreib mir, worum es geht. Ich melde mich innerhalb von zwei Werktagen.', en: 'Tell me what it\'s about. I\'ll get back to you within two business days.' },
      btn:  { de: 'Kontakt aufnehmen', en: 'Get in touch' },
    },
  },

  // ── kontakt.html ──────────────────────────────────────────────────────────
  kontakt: {
    h1:   { de: 'Sprechen wir.', en: 'Let\'s talk.' },
    lead: { de: 'Wähle, worum es geht. Ich melde mich innerhalb von zwei Werktagen.', en: 'Choose what it\'s about. I\'ll get back to you within two business days.' },
    form: {
      topic_label:    { de: 'Worum geht es?', en: 'What is it about?' },
      topic_software: { de: 'Software', en: 'Software' },
      topic_lehre:    { de: 'Lehre', en: 'Teaching' },
      topic_coaching: { de: 'Coaching', en: 'Coaching' },
      name_label:     { de: 'Dein Name', en: 'Your name' },
      email_label:    { de: 'Deine E-Mail', en: 'Your email' },
      message_label:  { de: 'Deine Nachricht', en: 'Your message' },
      submit:         { de: 'Absenden', en: 'Send' },
    },
    alt: {
      h2:   { de: 'Lieber per E-Mail?', en: 'Prefer email?' },
      text: { de: 'Schreib direkt an <a href="mailto:hello@pleasance.org">hello@pleasance.org</a>.', en: 'Write directly to <a href="mailto:hello@pleasance.org">hello@pleasance.org</a>.' },
    },
  },
};
