'use strict';

// ── State ──────────────────────────────────────────────────────────────────
let currentLang = 'de';

// ── i18n ───────────────────────────────────────────────────────────────────
function getI18nValue(key) {
  return key.split('.').reduce((obj, part) => (obj == null ? obj : obj[part]), I18N);
}

function translate(el, key) {
  el.dataset.i18n = key;
  const val = getI18nValue(key);
  if (!val || !val[currentLang]) return;
  if (/<[a-z][\s\S]*>/i.test(val[currentLang])) {
    el.innerHTML = val[currentLang];
  } else {
    el.textContent = val[currentLang];
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('pleasance-lang', lang);

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => translate(el, el.dataset.i18n));

  // Translate placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = getI18nValue(el.dataset.i18nPlaceholder);
    if (val && val[lang]) el.placeholder = val[lang];
  });

  // Update page title + meta description
  const meta = I18N_META[document.body.dataset.page];
  if (meta) {
    document.title = meta.title[lang];
    document.querySelector('meta[name="description"]').setAttribute('content', meta.desc[lang]);
  }

  // Update lang toggle
  const langBtn = document.getElementById('langToggle');
  langBtn.textContent = lang === 'de' ? 'EN' : 'DE';
  langBtn.setAttribute('aria-label', lang === 'de' ? 'Switch to English' : 'Auf Deutsch umschalten');
}

// ── Dark Mode ──────────────────────────────────────────────────────────────
function initTheme() {
  const btn  = document.getElementById('themeToggle');
  const root = document.documentElement;

  btn.setAttribute('aria-pressed', root.dataset.theme === 'dark');
  btn.addEventListener('click', () => {
    const dark = root.dataset.theme !== 'dark';
    if (dark) {
      root.dataset.theme = 'dark';
    } else {
      delete root.dataset.theme;
    }
    localStorage.setItem('pleasance-theme', dark ? 'dark' : 'light');
    btn.setAttribute('aria-pressed', dark);
  });
}

// ── Nav ────────────────────────────────────────────────────────────────────
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', links.classList.toggle('is-open'));
  });
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('pleasance-lang') || 'de';
  if (savedLang !== 'de') applyLanguage(savedLang);
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'de' ? 'en' : 'de');
  });
  initTheme();
  initNav();
});
