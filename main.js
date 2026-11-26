'use strict';

// ── i18n ───────────────────────────────────────────────────────────────────
function getI18nValue(key) {
  return key.split('.').reduce((obj, part) => (obj == null ? obj : obj[part]), I18N);
}

function translate(el, key) {
  el.dataset.i18n = key;
  const val = getI18nValue(key)?.[document.documentElement.lang];
  if (!val) return;
  if (/<[a-z][\s\S]*>/i.test(val)) {
    el.innerHTML = val;
  } else {
    el.textContent = val;
  }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('pleasance-lang', lang);

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => translate(el, el.dataset.i18n));

  // App screenshots with an English version
  document.querySelectorAll('img[data-en-src]').forEach(img => {
    img.dataset.deSrc ??= img.getAttribute('src');
    const src = lang === 'en' ? img.dataset.enSrc : img.dataset.deSrc;
    img.setAttribute('src', src);
    img.parentElement.setAttribute('href', src);
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

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('pleasance-lang') || 'de';
  if (savedLang !== 'de') applyLanguage(savedLang);
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'de' ? 'en' : 'de');
  });
  initTheme();
});
