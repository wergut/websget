/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

var swiper1 = new Swiper(".testimonials-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".testimonials-slider .swiper-button-next",
    prevEl: ".testimonials-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 1.5,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});
var swiper2 = new Swiper(".cases-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 40,
  allowTouchMove: false,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".cases-slider .swiper-button-next",
    prevEl: ".cases-slider .swiper-button-prev"
  },
  pagination: {
    el: ".cases-slider .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  }
});
var swiper4 = new Swiper(".case-inner-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 0,
  watchSlidesProgress: true,
  effect: "fade",
  navigation: {
    nextEl: ".case-inner-slider .swiper-button-next-inner",
    prevEl: ".case-inner-slider .swiper-button-prev-inner"
  }
});
var swiper3 = new Swiper(".staff-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 4,
  spaceBetween: 40,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".staff-slider .swiper-button-next",
    prevEl: ".staff-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');
      trigger.addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const collapseItems = document.querySelectorAll('.case-info-item');
  if (collapseItems) {
    collapseItems.forEach(item => {
      const trigger = item.querySelector('.case-info-header');
      const content = item.querySelector('.case-info-content');
      trigger.addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.case-info-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.case-info-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var filters = document.querySelectorAll('.filter');
  filters.forEach(function (filter) {
    filter.addEventListener('click', function () {
      filters.forEach(function (otherFilter) {
        if (otherFilter !== filter) {
          otherFilter.classList.remove('active');
        }
      });
      filter.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const btnMenuMobile = document.querySelector('.mobile-menu-btn');
  const headerMobileWrapper = document.querySelector('.header-bottom');
  const btnCloseMobileMenu = document.querySelectorAll('.btn-close-mobile-menu');
  btnMenuMobile.addEventListener('click', function () {
    headerMobileWrapper.classList.add('show');
  });
  btnCloseMobileMenu.forEach(btn => {
    btn.addEventListener('click', function () {
      headerMobileWrapper.classList.remove('show');
    });
  });
});
window.onload = function () {
  const bars = document.querySelectorAll('.bar');
  let maxValue = 0;
  bars.forEach(bar => {
    const value = parseFloat(bar.nextElementSibling.getAttribute('data-value'));
    if (value > maxValue) {
      maxValue = value;
    }
  });
  bars.forEach(bar => {
    const value = parseFloat(bar.nextElementSibling.getAttribute('data-value'));
    const height = value / maxValue * 100;
    bar.style.height = height + '%';
    bar.nextElementSibling.innerText = value;
  });
};
document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');
  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';
      setTimeout(function () {
        modalElem.classList.add('modal-opening');
        resolve();
      }, 0);
    });
  }
  async function closeModal(closeBtn) {
    return new Promise(resolve => {
      var modal = closeBtn.closest('.modal-dialog');
      modal.classList.remove('modal-opening');
      modal.classList.add('modal-closing');
      setTimeout(function () {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500); // Длительность анимации fadeOut
    });
  }

  /* open modal */
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', async function (e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', async function (e) {
      await closeModal(closeBtn);
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', async function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        await closeModal(this);
      }
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) {
        return;
      } else {
        var iframe = this.querySelector('iframe');
        if (iframe) {
          // Остановка видео при закрытии модального окна
          var videoSrc = iframe.getAttribute('src');
          iframe.setAttribute('src', '');
          iframe.setAttribute('src', videoSrc);
        }
        this.classList.remove('modal-opening');
      }
    });
  });
});
let element = document.querySelectorAll('input[class="phone"]');
let maskOptions = {
  mask: '+{7}(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
  let mask = IMask(element[i], maskOptions);
}
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDdEQsU0FBUyxDQUFDTSxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUMsTUFBTTtNQUNMZ0QsTUFBTSxDQUFDdEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3JDO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSWMsTUFBTSxDQUFDd0MsV0FBVyxHQUFHLENBQUMsRUFBRTtJQUMxQkYsTUFBTSxDQUFDdEQsU0FBUyxDQUFDTSxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ2xDO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7VUNoVEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzd2lwZXIxID0gbmV3IFN3aXBlcihcIi50ZXN0aW1vbmlhbHMtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIudGVzdGltb25pYWxzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTIsXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDYwMToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuY2FzZXMtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5jYXNlcy1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIuY2FzZXMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5jYXNlcy1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArIFwiPC9zcGFuPlwiO1xuICAgIH0sXG4gIH0sXG59KTtcblxudmFyIHN3aXBlcjQgPSBuZXcgU3dpcGVyKFwiLmNhc2UtaW5uZXItc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBlZmZlY3Q6IFwiZmFkZVwiLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5jYXNlLWlubmVyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LWlubmVyXCIsXG4gICAgcHJldkVsOiBcIi5jYXNlLWlubmVyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2LWlubmVyXCIsXG4gIH0sXG59KTtcblxudmFyIHN3aXBlcjMgPSBuZXcgU3dpcGVyKFwiLnN0YWZmLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDQsXG4gIHNwYWNlQmV0d2VlbjogNDAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN0YWZmLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5zdGFmZi1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAxOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJyk7XG5cbiAgaWYgKGFjY29yZGlvbkl0ZW1zKSB7XG4gICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jyk7XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgY29sbGFwc2VJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWluZm8taXRlbScpO1xuXG4gIGlmIChjb2xsYXBzZUl0ZW1zKSB7XG4gICAgY29sbGFwc2VJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWluZm8tY29udGVudCcpO1xuXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UtaW5mby1pdGVtJykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWluZm8tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXInKTtcblxuICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24ob3RoZXJGaWx0ZXIpIHtcbiAgICAgICAgaWYgKG90aGVyRmlsdGVyICE9PSBmaWx0ZXIpIHtcbiAgICAgICAgICBvdGhlckZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bk1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUtYnRuJyk7XG4gIGNvbnN0IGhlYWRlck1vYmlsZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJvdHRvbScpO1xuICBjb25zdCBidG5DbG9zZU1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNsb3NlLW1vYmlsZS1tZW51Jyk7XG5cbiAgYnRuTWVudU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBoZWFkZXJNb2JpbGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgYnRuQ2xvc2VNb2JpbGVNZW51LmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoZWFkZXJNb2JpbGVXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBiYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhcicpO1xuICBsZXQgbWF4VmFsdWUgPSAwO1xuXG4gIGJhcnMuZm9yRWFjaChiYXIgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICBpZiAodmFsdWUgPiBtYXhWYWx1ZSkge1xuICAgICAgbWF4VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGJhcnMuZm9yRWFjaChiYXIgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICBjb25zdCBoZWlnaHQgPSAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XG4gICAgYmFyLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICclJztcbiAgICBiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xuICB9KTtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1tb2RhbC1kaWFsb2cnKSxcbiAgICBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgIGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWNsb3NlJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsQnRuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIG1vZGFsSWQgPSBtb2RhbEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyksXG4gICAgICAgIG1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cuJyArIG1vZGFsSWQpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWxFbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjbG9zZU1vZGFsKGNsb3NlQnRuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIG1vZGFsID0gY2xvc2VCdG4uY2xvc2VzdCgnLm1vZGFsLWRpYWxvZycpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2xvc2luZycpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1jbG9zaW5nJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDApOyAvLyDQlNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LDQvdC40LzQsNGG0LjQuCBmYWRlT3V0XG4gICAgfSk7XG4gIH1cblxuICAvKiBvcGVuIG1vZGFsICovXG4gIG1vZGFsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1vZGFsQnRuKSB7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhd2FpdCBvcGVuTW9kYWwobW9kYWxCdG4pO1xuICAgIH0pO1xuICB9KTtcblxuICAvKiBjbG9zZSBtb2RhbCAqL1xuICBjbG9zZUJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihjbG9zZUJ0bikge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgYXdhaXQgY2xvc2VNb2RhbChjbG9zZUJ0bik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cnKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgY2xvc2VNb2RhbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWRpYWxvZycpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jbG9zZScpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgICAgIGlmIChpZnJhbWUpIHtcbiAgICAgICAgICAvLyDQntGB0YLQsNC90L7QstC60LAg0LLQuNC00LXQviDQv9GA0Lgg0LfQsNC60YDRi9GC0LjQuCDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxuICAgICAgICAgIHZhciB2aWRlb1NyYyA9IGlmcmFtZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKTtcbiAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB2aWRlb1NyYyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cbn0pO1xuXG5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbY2xhc3M9XCJwaG9uZVwiXScpO1xubGV0IG1hc2tPcHRpb25zID0ge1xuICBtYXNrOiAnK3s3fSgwMDApMDAwLTAwLTAwJ1xufTtcbmZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKyl7XG4gIGxldCBtYXNrID0gSU1hc2soZWxlbWVudFtpXSwgbWFza09wdGlvbnMpO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbFRvcCA+IDApIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gIH1cbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzd2lwZXIyIiwiYWxsb3dUb3VjaE1vdmUiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJyZW5kZXJCdWxsZXQiLCJpbmRleCIsImNsYXNzTmFtZSIsInN3aXBlcjQiLCJlZmZlY3QiLCJzd2lwZXIzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWNjb3JkaW9uSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJ0cmlnZ2VyIiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzdHlsZSIsImhlaWdodCIsImNoaWxkIiwiYWRkIiwic2Nyb2xsSGVpZ2h0IiwiY29sbGFwc2VJdGVtcyIsImZpbHRlcnMiLCJmaWx0ZXIiLCJvdGhlckZpbHRlciIsImJ0bk1lbnVNb2JpbGUiLCJoZWFkZXJNb2JpbGVXcmFwcGVyIiwiYnRuQ2xvc2VNb2JpbGVNZW51IiwiYnRuIiwid2luZG93Iiwib25sb2FkIiwiYmFycyIsIm1heFZhbHVlIiwiYmFyIiwidmFsdWUiLCJwYXJzZUZsb2F0IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibW9kYWxCdXR0b25zIiwib3ZlcmxheSIsImNsb3NlQnV0dG9ucyIsIm9wZW5Nb2RhbCIsIm1vZGFsQnRuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJtb2RhbElkIiwibW9kYWxFbGVtIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJjbG9zZU1vZGFsIiwiY2xvc2VCdG4iLCJtb2RhbCIsImNsb3Nlc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWZyYW1lIiwidmlkZW9TcmMiLCJzZXRBdHRyaWJ1dGUiLCJlbGVtZW50IiwibWFza09wdGlvbnMiLCJtYXNrIiwiaSIsImxlbmd0aCIsIklNYXNrIiwiaGVhZGVyIiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9