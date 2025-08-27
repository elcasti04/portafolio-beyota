import loader from './components/loader.js';
import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import sendEmail from './components/send_form.js';
import dateUpdater from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';

loader();
resetToHome();
dateUpdater();
parallax();
activeMenu();
sendEmail();

const menu = document.getElementById('nav');
const openBtn = document.querySelector('.btn__open');
const closeBtn = document.querySelector('.btn__close');

if (openBtn && menu) {
    openBtn.addEventListener('click', () => {
        menu.classList.add('active');
    });
}
if (closeBtn && menu) {
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove('active');
    });
}

// Cierra el menú al hacer click en un enlace (en móvil)
document.querySelectorAll('.navbar__menu .navbar__list a').forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
        }
    });
});
