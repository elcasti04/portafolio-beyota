document.addEventListener('DOMContentLoaded', function () {
  const languageToggle = document.getElementById('language-toggle');
  if (!languageToggle) return;

  // Detecta si estamos en inglés o español según el nombre del archivo
  const isEnglish = window.location.pathname.includes('index_en.html');
  languageToggle.checked = isEnglish;

  languageToggle.addEventListener('change', function () {
    if (this.checked) {
      window.location.href = 'index_en.html';
    } else {
      window.location.href = 'index.html';
    }
  });
});