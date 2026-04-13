'use strict';

// ── State ──────────────────────────────────────────────────────────────────
let currentLang = 'de';

// ── Utilities ──────────────────────────────────────────────────────────────
function getI18nValue(key) {
  const parts = key.split('.');
  let obj = I18N;
  for (const part of parts) {
    if (obj == null) return null;
    obj = obj[part];
  }
  return obj;
}

// ── Dark Mode ──────────────────────────────────────────────────────────────
function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.dataset.theme = 'dark';
  } else {
    delete document.documentElement.dataset.theme;
  }
  localStorage.setItem('pleasance-theme', theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const moon = btn.querySelector('.icon-moon');
  const sun  = btn.querySelector('.icon-sun');
  if (moon) moon.style.display = theme === 'dark' ? 'none'  : 'block';
  if (sun)  sun.style.display  = theme === 'dark' ? 'block' : 'none';
}

function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  applyTheme(isDark ? 'light' : 'dark');
}

// ── i18n ───────────────────────────────────────────────────────────────────
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('pleasance-lang', lang);

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getI18nValue(el.dataset.i18n);
    if (!val || !val[lang]) return;
    if (/<[a-z][\s\S]*>/i.test(val[lang])) {
      el.innerHTML = val[lang];
    } else {
      el.textContent = val[lang];
    }
  });

  // Translate placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = getI18nValue(el.dataset.i18nPlaceholder);
    if (val && val[lang]) el.placeholder = val[lang];
  });

  // Swap hrefs (e.g. mailto subjects)
  document.querySelectorAll('[data-i18n-href-en]').forEach(el => {
    if (!el.dataset.i18nHrefDe) el.dataset.i18nHrefDe = el.href;
    el.href = lang === 'en' ? el.dataset.i18nHrefEn : el.dataset.i18nHrefDe;
  });

  // Update page title + meta description
  const page = document.body && document.body.dataset.page;
  if (page && typeof I18N_META !== 'undefined' && I18N_META[page]) {
    document.title = I18N_META[page].title[lang];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', I18N_META[page].desc[lang]);
  }

  // Update lang toggle text
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = lang === 'de' ? 'EN' : 'DE';
}

function toggleLanguage() {
  applyLanguage(currentLang === 'de' ? 'en' : 'de');
}

// ── Nav ────────────────────────────────────────────────────────────────────
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  const nav    = document.getElementById('nav');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }
}

// ── Scroll Reveal ──────────────────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Dark mode icon sync (theme already applied via head snippet)
  const savedTheme = localStorage.getItem('pleasance-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  updateThemeIcon((savedTheme === 'dark' || (!savedTheme && prefersDark)) ? 'dark' : 'light');

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Language
  const savedLang = localStorage.getItem('pleasance-lang') || 'de';
  if (savedLang !== 'de') applyLanguage(savedLang);
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);

  initNav();
  initReveal();
});
