const btnMenu = document.querySelectorAll('.header__menu-icon');
const menuMobile = document.querySelector('.header__menu-mobile');
const overlay = document.querySelector('.header__menu-overlay');

for (let i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener('click', function () {
    menuMobile.classList.toggle('show');
  });
}

overlay.addEventListener('click', function () {
  menuMobile.classList.remove('show');
});
