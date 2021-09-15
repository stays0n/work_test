$(function () {
  const headerNav = $('.header__nav');
  const reviewsSlider = $('.reviews__slider');

  const toggleBurgerMenu = () => {
    headerNav.toggleClass('is_active');
  };

  const toggleWindowScroll = () => {
    $('body').toggleClass('scroll_blocked');
  };

  $('.form').on('submit', (event) => {
    event.preventDefault();
  });

  $('.header__burger').on('click', () => {
    if (innerWidth <= 600) {
      toggleBurgerMenu();
      toggleWindowScroll();
    }
  });

  headerNav.on('click', (event) => {
    if (innerWidth <= 600 && event.target.closest('.header__menu')) {
      toggleBurgerMenu();
      toggleWindowScroll();
    }
  });

  if (reviewsSlider) {
    reviewsSlider.slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 830,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 456,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });
  }
});
