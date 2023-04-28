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

$(document).ready(function () {
  $('.home__blog-content').slick({
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: `<div class="home__blog-arrow-right">
                <img src="./src/public/svgs/arrow-right.svg" alt="" />
              </div>`,
    prevArrow: `<div class="home__blog-arrow-left">
    <img src="./src/public/svgs/arrow-left.svg" alt="" />
  </div>`,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
