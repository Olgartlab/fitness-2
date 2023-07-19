import Swiper from '../vendor/swiper';

const initSwipers = () => {
  let coachesSwiper;
  let reviewsSwiper;

  if (document.querySelector('.coaches__swiper')) {

    coachesSwiper = new Swiper('.coaches__swiper', {
      navigation: {
        nextEl: '.coaches__button--next',
        prevEl: '.coaches__button--prev',
      },

      direction: 'horizontal',
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },

        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40,
        },
      },
    });

  }

  if (document.querySelector('.reviews__slider')) {

    reviewsSwiper = new Swiper('.reviews__slider', {
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },

      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    });

  }
  return {coachesSwiper, reviewsSwiper};
};

export {initSwipers};
