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

  /* open modal*/
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var modalId = this.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = "flex";
      modalElem.classList.add('modal-opening');
    }); // end click
  }); // end foreach

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      var modal = this.closest('.modal-dialog');
      modal.style.display = "none";
      overlay.classList.remove('modal-open');
      modal.classList.remove('modal-opening');
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) {
        return;
      } else {
        this.style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2dDLFdBQVcsR0FBRyxDQUFDLEVBQUU7SUFDMUJGLE1BQU0sQ0FBQzlDLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNsQztBQUNGLENBQUMsQ0FBQzs7Ozs7O1VDdlFGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIudGVzdGltb25pYWxzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIudGVzdGltb25pYWxzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgICB9LFxuICB9XG59KTtcblxudmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmNhc2VzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogNDAsXG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuY2FzZXMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLmNhc2VzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuY2FzZXMtc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyBcIjwvc3Bhbj5cIjtcbiAgICB9LFxuICB9LFxufSk7XG5cbnZhciBzd2lwZXI0ID0gbmV3IFN3aXBlcihcIi5jYXNlLWlubmVyLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogMCxcbiAgZWZmZWN0OiBcImZhZGVcIixcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuY2FzZS1pbm5lci1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dC1pbm5lclwiLFxuICAgIHByZXZFbDogXCIuY2FzZS1pbm5lci1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldi1pbm5lclwiLFxuICB9LFxufSk7XG5cbnZhciBzd2lwZXIzID0gbmV3IFN3aXBlcihcIi5zdGFmZi1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiA0LFxuICBzcGFjZUJldHdlZW46IDQwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zdGFmZi1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIuc3RhZmYtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTIsXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDYwMToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgICB9LFxuICB9XG59KTtcblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBhY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpO1xuXG4gIGlmIChhY2NvcmRpb25JdGVtcykge1xuICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0taGVhZGVyJyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpO1xuXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbGxhcHNlSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZS1pbmZvLWl0ZW0nKTtcblxuICBpZiAoY29sbGFwc2VJdGVtcykge1xuICAgIGNvbGxhcHNlSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWluZm8taGVhZGVyJyk7XG4gICAgICBjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FzZS1pbmZvLWNvbnRlbnQnKTtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWluZm8taXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuY2FzZS1pbmZvLWNvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgdmFyIGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyJyk7XG5cbiAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcikge1xuICAgIGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKG90aGVyRmlsdGVyKSB7XG4gICAgICAgIGlmIChvdGhlckZpbHRlciAhPT0gZmlsdGVyKSB7XG4gICAgICAgICAgb3RoZXJGaWx0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5NZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51LWJ0bicpO1xuICBjb25zdCBoZWFkZXJNb2JpbGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1ib3R0b20nKTtcbiAgY29uc3QgYnRuQ2xvc2VNb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jbG9zZS1tb2JpbGUtbWVudScpO1xuXG4gIGJ0bk1lbnVNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaGVhZGVyTW9iaWxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0pO1xuXG4gIGJ0bkNsb3NlTW9iaWxlTWVudS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaGVhZGVyTW9iaWxlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXInKTtcbiAgbGV0IG1heFZhbHVlID0gMDtcblxuICBiYXJzLmZvckVhY2goYmFyID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoYmFyLm5leHRFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgaWYgKHZhbHVlID4gbWF4VmFsdWUpIHtcbiAgICAgIG1heFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9KTtcblxuICBiYXJzLmZvckVhY2goYmFyID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoYmFyLm5leHRFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHZhbHVlIC8gbWF4VmFsdWUpICogMTAwO1xuICAgIGJhci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAnJSc7XG4gICAgYmFyLm5leHRFbGVtZW50U2libGluZy5pbm5lclRleHQgPSB2YWx1ZTtcbiAgfSk7XG59XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXG4gIHZhciBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1tb2RhbC1kaWFsb2cnKSxcbiAgICBvdmVybGF5ICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG4gICAgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWRpYWxvZyAubW9kYWwtY2xvc2UnKTtcblxuICAvKiBvcGVuIG1vZGFsKi9cbiAgbW9kYWxCdXR0b25zLmZvckVhY2goZnVuY3Rpb24obW9kYWxCdG4pe1xuICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIG1vZGFsSWQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSxcbiAgICAgICAgbW9kYWxFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRpYWxvZy4nK21vZGFsSWQpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgbW9kYWxFbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICB9KTsgLy8gZW5kIGNsaWNrXG4gIH0pOyAvLyBlbmQgZm9yZWFjaFxuXG5cbiAgLyogY2xvc2UgbW9kYWwgKi9cbiAgY2xvc2VCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oY2xvc2VCdG4pIHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgbW9kYWwgPSB0aGlzLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKTtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xuICAgIH0pXG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cnKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY2xvc2UnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbn0pO1xuXG5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbY2xhc3M9XCJwaG9uZVwiXScpO1xubGV0IG1hc2tPcHRpb25zID0ge1xuICBtYXNrOiAnK3s3fSgwMDApMDAwLTAwLTAwJ1xufTtcbmZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKyl7XG4gIGxldCBtYXNrID0gSU1hc2soZWxlbWVudFtpXSwgbWFza09wdGlvbnMpO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbFRvcCA+IDApIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gIH1cbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsInN3aXBlcjIiLCJhbGxvd1RvdWNoTW92ZSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInJlbmRlckJ1bGxldCIsImluZGV4IiwiY2xhc3NOYW1lIiwic3dpcGVyNCIsImVmZmVjdCIsInN3aXBlcjMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiaGVpZ2h0IiwiY2hpbGQiLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJjb2xsYXBzZUl0ZW1zIiwiZmlsdGVycyIsImZpbHRlciIsIm90aGVyRmlsdGVyIiwiYnRuTWVudU1vYmlsZSIsImhlYWRlck1vYmlsZVdyYXBwZXIiLCJidG5DbG9zZU1vYmlsZU1lbnUiLCJidG4iLCJ3aW5kb3ciLCJvbmxvYWQiLCJiYXJzIiwibWF4VmFsdWUiLCJiYXIiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJtb2RhbEJ1dHRvbnMiLCJvdmVybGF5IiwiY2xvc2VCdXR0b25zIiwibW9kYWxCdG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJtb2RhbElkIiwibW9kYWxFbGVtIiwiZGlzcGxheSIsImNsb3NlQnRuIiwibW9kYWwiLCJjbG9zZXN0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImVsZW1lbnQiLCJtYXNrT3B0aW9ucyIsIm1hc2siLCJpIiwibGVuZ3RoIiwiSU1hc2siLCJoZWFkZXIiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=