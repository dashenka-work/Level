// Подключение основного файла стилей
import '../scss/style.scss';
//Swiper
import './files/sliders.js';

// Функции работы скроллом
import * as flsScroll from './files/scroll/scroll.js';

// Плавная навигация по странице
flsScroll.pageNavigation();

/* Подключаем файлы со своим кодом */
import './files/script.js';
