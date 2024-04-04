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
      this.closest('.modal-dialog').style.display = "none";
      overlay.classList.remove('modal-open');
      this.closest('.modal-dialog').classList.remove('modal-opening');
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        this.style.display = "none";
        this.classList.remove('modal-opening');
      }
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07UUFDTCxJQUFJLENBQUNuQyxLQUFLLENBQUMrQixPQUFPLEdBQUcsTUFBTTtRQUMzQixJQUFJLENBQUNsQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUM7TUFDeEM7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7Ozs7OztVQzNPRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHN3aXBlcjEgPSBuZXcgU3dpcGVyKFwiLnRlc3RpbW9uaWFscy1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAzLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAxOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG5cbnZhciBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5jYXNlcy1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzcGFjZUJldHdlZW46IDQwLFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmNhc2VzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5jYXNlcy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLmNhc2VzLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+XCI7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG52YXIgc3dpcGVyNCA9IG5ldyBTd2lwZXIoXCIuY2FzZS1pbm5lci1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzcGFjZUJldHdlZW46IDAsXG4gIGVmZmVjdDogXCJmYWRlXCIsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmNhc2UtaW5uZXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQtaW5uZXJcIixcbiAgICBwcmV2RWw6IFwiLmNhc2UtaW5uZXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYtaW5uZXJcIixcbiAgfSxcbn0pO1xuXG52YXIgc3dpcGVyMyA9IG5ldyBTd2lwZXIoXCIuc3RhZmYtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuc3RhZmYtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN0YWZmLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKTtcblxuICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcbiAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKTtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb2xsYXBzZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UtaW5mby1pdGVtJyk7XG5cbiAgaWYgKGNvbGxhcHNlSXRlbXMpIHtcbiAgICBjb2xsYXBzZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FzZS1pbmZvLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1jb250ZW50Jyk7XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZS1pbmZvLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpO1xuXG4gIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihvdGhlckZpbHRlcikge1xuICAgICAgICBpZiAob3RoZXJGaWx0ZXIgIT09IGZpbHRlcikge1xuICAgICAgICAgIG90aGVyRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuTWVudU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1idG4nKTtcbiAgY29uc3QgaGVhZGVyTW9iaWxlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYm90dG9tJyk7XG4gIGNvbnN0IGJ0bkNsb3NlTW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY2xvc2UtbW9iaWxlLW1lbnUnKTtcblxuICBidG5NZW51TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGhlYWRlck1vYmlsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICB9KTtcblxuICBidG5DbG9zZU1vYmlsZU1lbnUuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhlYWRlck1vYmlsZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFyJyk7XG4gIGxldCBtYXhWYWx1ZSA9IDA7XG5cbiAgYmFycy5mb3JFYWNoKGJhciA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGJhci5uZXh0RWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xuICAgIGlmICh2YWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgICBtYXhWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgYmFycy5mb3JFYWNoKGJhciA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGJhci5uZXh0RWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpO1xuICAgIGNvbnN0IGhlaWdodCA9ICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcbiAgICBiYXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJyUnO1xuICAgIGJhci5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0ID0gdmFsdWU7XG4gIH0pO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblxuICB2YXIgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tbW9kYWwtZGlhbG9nJyksXG4gICAgb3ZlcmxheSAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgIGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWNsb3NlJyk7XG5cbiAgLyogb3BlbiBtb2RhbCovXG4gIG1vZGFsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1vZGFsQnRuKXtcbiAgICBtb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBtb2RhbElkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyksXG4gICAgICAgIG1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cuJyttb2RhbElkKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgbW9kYWxFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIG1vZGFsRWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuaW5nJyk7XG4gICAgfSk7IC8vIGVuZCBjbGlja1xuICB9KTsgLy8gZW5kIGZvcmVhY2hcblxuXG4gIC8qIGNsb3NlIG1vZGFsICovXG4gIGNsb3NlQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKGNsb3NlQnRuKSB7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGhpcy5jbG9zZXN0KCcubW9kYWwtZGlhbG9nJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICB0aGlzLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuaW5nJyk7XG4gICAgfSlcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWRpYWxvZycpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbn0pO1xuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsInN3aXBlcjIiLCJhbGxvd1RvdWNoTW92ZSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsInJlbmRlckJ1bGxldCIsImluZGV4IiwiY2xhc3NOYW1lIiwic3dpcGVyNCIsImVmZmVjdCIsInN3aXBlcjMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY2NvcmRpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInN0eWxlIiwiaGVpZ2h0IiwiY2hpbGQiLCJhZGQiLCJzY3JvbGxIZWlnaHQiLCJjb2xsYXBzZUl0ZW1zIiwiZmlsdGVycyIsImZpbHRlciIsIm90aGVyRmlsdGVyIiwiYnRuTWVudU1vYmlsZSIsImhlYWRlck1vYmlsZVdyYXBwZXIiLCJidG5DbG9zZU1vYmlsZU1lbnUiLCJidG4iLCJ3aW5kb3ciLCJvbmxvYWQiLCJiYXJzIiwibWF4VmFsdWUiLCJiYXIiLCJ2YWx1ZSIsInBhcnNlRmxvYXQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJtb2RhbEJ1dHRvbnMiLCJvdmVybGF5IiwiY2xvc2VCdXR0b25zIiwibW9kYWxCdG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJtb2RhbElkIiwibW9kYWxFbGVtIiwiZGlzcGxheSIsImNsb3NlQnRuIiwiY2xvc2VzdCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiXSwic291cmNlUm9vdCI6IiJ9