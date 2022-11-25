import Swiper, { Autoplay, Navigation } from 'swiper';

// Базовые стили
import '../../scss/base/swiper.scss';

// Инициализация слайдеров
function initSliders() {
   if (document.querySelector('.swiper')) {
      new Swiper('.swiper', {
         modules: [Navigation, Autoplay],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 10,
         speed: 800,
         loop: true,
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         navigation: {
            nextEl: '.comment-block__next-arrow',
            prevEl: '.comment-block__prev-arrow',
         },
      });
   }
}

window.addEventListener('load', function (e) {
   // Запуск инициализации слайдеров
   initSliders();
});
