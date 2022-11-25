// Модуль прокрутки к блоку
import { gotoBlock } from './gotoblock.js';
//====================================================================================================================================================================================================================================================================================================
// Плавная навигация по странице
export function pageNavigation() {
   // Работаем при клике на пункт
   document.addEventListener('click', pageNavigationAction);
   // Основная функция
   function pageNavigationAction(e) {
      if (e.type === 'click') {
         const targetElement = e.target;
         if (targetElement.closest('[data-goto]')) {
            const gotoLink = targetElement.closest('[data-goto]');
            const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : '';
            const noHeader = gotoLink.hasAttribute('data-goto-header') ? true : false;
            const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
            const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
            gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
            e.preventDefault();
         }
      }
   }
}
