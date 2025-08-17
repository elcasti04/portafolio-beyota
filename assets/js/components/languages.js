const languageToggle = document.getElementById('language-toggle');

if (languageToggle) {
  if (window.location.pathname.includes('index_en.html')) {
    languageToggle.checked = true;
  } else {
    languageToggle.checked = false;
  }

  languageToggle.addEventListener('change', () => {
    if (languageToggle.checked) {
      window.location.href = 'index_en.html';
    } else {
      window.location.href = 'index.html';
    }
  });
} 