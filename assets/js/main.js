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

document.querySelectorAll('.navbar__menu .navbar__list a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 768){
      window.location.hash = '';
    }
  });
});

const menu = document.getElementById('nav');
const openBtn = document.querySelector('.btn__open');
const closeBtn = document.querySelector('.btn__close');

if(openBtn && menu){
  openBtn.addEventListener('click', () => {
    document.body.classList.add('menu-open');
  });
}
if(closeBtn && menu){
  closeBtn.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
}
