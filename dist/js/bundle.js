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
  const headerMobileWrapper = document.querySelector('.main-menu');
  btnMenuMobile.addEventListener('click', function () {
    headerMobileWrapper.classList.toggle('show');
    if (headerMobileWrapper.classList.contains('show')) {
      btnMenuMobile.classList.add('cross');
    } else {
      btnMenuMobile.classList.remove('cross');
    }
  });
});
google.charts.load("current", {
  packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([["Element", "Density", {
    role: "style"
  }], ["Copper", 11, "#698BD6"], ["Silver", 105, "#D6B469"], ["Gold", 34, "#698BD6"], ["Platinum", 98, "color: #D6B469"]]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1, {
    calc: "stringify",
    sourceColumn: 1,
    type: "string",
    role: "annotation"
  }, 2]);
  var options = {
    width: 600,
    height: 246,
    bar: {
      groupWidth: 70
    },
    legend: {
      position: "none"
    },
    hAxis: {
      textPosition: 'none',
      gridlines: {
        count: 0
      }
    },
    vAxis: {
      textPosition: 'none',
      gridlines: {
        count: 0
      }
    },
    annotations: {
      textStyle: {
        fontSize: 16
      }
    },
    chartArea: {
      borderWidth: 0
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NvdXJjZS9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIudGVzdGltb25pYWxzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIudGVzdGltb25pYWxzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgICB9LFxuICB9XG59KTtcblxudmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmNhc2VzLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNwYWNlQmV0d2VlbjogNDAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmNhc2VzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5jYXNlcy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLmNhc2VzLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+XCI7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG52YXIgc3dpcGVyMyA9IG5ldyBTd2lwZXIoXCIuc3RhZmYtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuc3RhZmYtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN0YWZmLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKTtcblxuICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcbiAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKTtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb2xsYXBzZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UtaW5mby1pdGVtJyk7XG5cbiAgaWYgKGNvbGxhcHNlSXRlbXMpIHtcbiAgICBjb2xsYXBzZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FzZS1pbmZvLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1jb250ZW50Jyk7XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZS1pbmZvLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpO1xuXG4gIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihvdGhlckZpbHRlcikge1xuICAgICAgICBpZiAob3RoZXJGaWx0ZXIgIT09IGZpbHRlcikge1xuICAgICAgICAgIG90aGVyRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuTWVudU1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudS1idG4nKTtcbiAgY29uc3QgaGVhZGVyTW9iaWxlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUnKTtcblxuICBidG5NZW51TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGhlYWRlck1vYmlsZVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXG4gICAgaWYgKGhlYWRlck1vYmlsZVdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgIGJ0bk1lbnVNb2JpbGUuY2xhc3NMaXN0LmFkZCgnY3Jvc3MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnRuTWVudU1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdjcm9zcycpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuXG5cbmdvb2dsZS5jaGFydHMubG9hZChcImN1cnJlbnRcIiwge3BhY2thZ2VzOlsnY29yZWNoYXJ0J119KTtcbmdvb2dsZS5jaGFydHMuc2V0T25Mb2FkQ2FsbGJhY2soZHJhd0NoYXJ0KTtcbmZ1bmN0aW9uIGRyYXdDaGFydCgpIHtcbiAgdmFyIGRhdGEgPSBnb29nbGUudmlzdWFsaXphdGlvbi5hcnJheVRvRGF0YVRhYmxlKFtcbiAgICBbXCJFbGVtZW50XCIsIFwiRGVuc2l0eVwiLCB7IHJvbGU6IFwic3R5bGVcIiB9IF0sXG4gICAgW1wiQ29wcGVyXCIsIDExLCBcIiM2OThCRDZcIl0sXG4gICAgW1wiU2lsdmVyXCIsIDEwNSwgXCIjRDZCNDY5XCJdLFxuICAgIFtcIkdvbGRcIiwgMzQsIFwiIzY5OEJENlwiXSxcbiAgICBbXCJQbGF0aW51bVwiLCA5OCwgXCJjb2xvcjogI0Q2QjQ2OVwiXVxuICBdKTtcblxuICB2YXIgdmlldyA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVmlldyhkYXRhKTtcbiAgdmlldy5zZXRDb2x1bW5zKFswLCAxLFxuICAgIHsgY2FsYzogXCJzdHJpbmdpZnlcIixcbiAgICAgIHNvdXJjZUNvbHVtbjogMSxcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICByb2xlOiBcImFubm90YXRpb25cIiB9LFxuICAgIDJdKTtcblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICB3aWR0aDogNjAwLFxuICAgIGhlaWdodDogMjQ2LFxuICAgIGJhcjoge2dyb3VwV2lkdGg6IDcwfSxcbiAgICBsZWdlbmQ6IHsgcG9zaXRpb246IFwibm9uZVwiIH0sXG4gICAgaEF4aXM6IHsgdGV4dFBvc2l0aW9uOiAnbm9uZScsIGdyaWRsaW5lczogeyBjb3VudDogMCB9IH0sXG4gICAgdkF4aXM6IHsgdGV4dFBvc2l0aW9uOiAnbm9uZScsIGdyaWRsaW5lczogeyBjb3VudDogMCB9IH0sXG4gICAgYW5ub3RhdGlvbnM6IHsgdGV4dFN0eWxlOiB7IGZvbnRTaXplOiAxNiB9IH0sXG4gICAgY2hhcnRBcmVhOiB7IGJvcmRlcldpZHRoOiAwIH1cbiAgfTtcblxuICB2YXIgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2x1bW5jaGFydF92YWx1ZXNcIikpO1xuICBjaGFydC5kcmF3KHZpZXcsIG9wdGlvbnMpO1xufVxuXG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBiYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhcicpO1xuICBsZXQgbWF4VmFsdWUgPSAwO1xuXG4gIGJhcnMuZm9yRWFjaChiYXIgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICBpZiAodmFsdWUgPiBtYXhWYWx1ZSkge1xuICAgICAgbWF4VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGJhcnMuZm9yRWFjaChiYXIgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICBjb25zdCBoZWlnaHQgPSAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XG4gICAgYmFyLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICclJztcbiAgICBiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsic3dpcGVyMSIsIlN3aXBlciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJvYnNlcnZlU2xpZGVDaGlsZHJlbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzd2lwZXIyIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJzd2lwZXIzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWNjb3JkaW9uSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJ0cmlnZ2VyIiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzdHlsZSIsImhlaWdodCIsImNoaWxkIiwiYWRkIiwic2Nyb2xsSGVpZ2h0IiwiY29sbGFwc2VJdGVtcyIsImZpbHRlcnMiLCJmaWx0ZXIiLCJvdGhlckZpbHRlciIsImJ0bk1lbnVNb2JpbGUiLCJoZWFkZXJNb2JpbGVXcmFwcGVyIiwidG9nZ2xlIiwiZ29vZ2xlIiwiY2hhcnRzIiwibG9hZCIsInBhY2thZ2VzIiwic2V0T25Mb2FkQ2FsbGJhY2siLCJkcmF3Q2hhcnQiLCJkYXRhIiwidmlzdWFsaXphdGlvbiIsImFycmF5VG9EYXRhVGFibGUiLCJyb2xlIiwidmlldyIsIkRhdGFWaWV3Iiwic2V0Q29sdW1ucyIsImNhbGMiLCJzb3VyY2VDb2x1bW4iLCJ0eXBlIiwib3B0aW9ucyIsIndpZHRoIiwiYmFyIiwiZ3JvdXBXaWR0aCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaEF4aXMiLCJ0ZXh0UG9zaXRpb24iLCJncmlkbGluZXMiLCJjb3VudCIsInZBeGlzIiwiYW5ub3RhdGlvbnMiLCJ0ZXh0U3R5bGUiLCJmb250U2l6ZSIsImNoYXJ0QXJlYSIsImJvcmRlcldpZHRoIiwiY2hhcnQiLCJDb2x1bW5DaGFydCIsImdldEVsZW1lbnRCeUlkIiwiZHJhdyIsIndpbmRvdyIsIm9ubG9hZCIsImJhcnMiLCJtYXhWYWx1ZSIsInZhbHVlIiwicGFyc2VGbG9hdCIsIm5leHRFbGVtZW50U2libGluZyIsImdldEF0dHJpYnV0ZSIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=