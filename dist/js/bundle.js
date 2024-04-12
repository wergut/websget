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
  const diagramWrappers = document.querySelectorAll('.diagram-wrapper');
  diagramWrappers.forEach(wrapper => {
    const bars = wrapper.querySelectorAll('.bar');
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
document.addEventListener('DOMContentLoaded', function () {
  var uploadButton = document.getElementById('upload-button');
  var message = document.getElementById('file-upload-message');
  if (uploadButton) {
    uploadButton.addEventListener('click', function (event) {
      var fileInput = document.getElementById('file');
      var file = fileInput.files[0];
      var formData = new FormData();
      formData.append('file', file);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'ваш_адрес_сервера/обработчик_запросов.php', true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            message.textContent = xhr.responseText;
          } else {
            message.textContent = 'Произошла ошибка при загрузке файла.';
          }
        }
      };
      xhr.send(formData);
    });
  }
});
if (typeof IMask !== 'undefined') {
  const elements = document.querySelectorAll('input.phone');
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  if (elements.length > 0) {
    elements.forEach(function (element) {
      let mask = IMask(element, maskOptions);
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const formSteps = document.querySelectorAll('.form-step');
  const formPagination = document.getElementById('form-pagination');

  // Проверка на наличие всех элементов на странице
  if (formSteps.length > 0 && formPagination) {
    // Если все элементы присутствуют, добавляем обработчики событий и другую логику
    function checkRequiredFields(step) {
      const requiredInputs = step.querySelectorAll('input[required], textarea[required], select[required]');
      let checkBoxChecked = false; // Флаг для проверки чекбоксов
      for (let i = 0; i < requiredInputs.length; i++) {
        const input = requiredInputs[i];
        if (input.type === 'checkbox') {
          if (input.checked) {
            checkBoxChecked = true; // Установить флаг в true, если хотя бы один чекбокс выбран
          }
        } else {
          if (input.value.trim()) {
            return true; // Заполнено другое обязательное поле
          }
        }
      }

      return checkBoxChecked; // Вернуть состояние флага
    }

    function updateNextButtonState(step) {
      const nextButton = step.querySelector('.wpcf7-submit');
      if (nextButton) {
        nextButton.disabled = !checkRequiredFields(step);
      }
    }
    function setActivePaginationLink(index) {
      formPagination.querySelectorAll('li').forEach((li, i) => {
        if (i === index) {
          li.classList.add('active');
        } else {
          li.classList.remove('active');
        }
      });
    }
    formSteps.forEach(step => {
      const nextButton = step.querySelector('.wpcf7-submit');
      if (nextButton) {
        nextButton.addEventListener('click', function (e) {
          const currentStep = this.closest('.form-step');
          const nextStep = currentStep.nextElementSibling;
          if (nextStep) {
            e.preventDefault();
            currentStep.style.display = 'none';
            nextStep.style.display = 'block';
            updateNextButtonState(nextStep);
            const nextStepIndex = Array.from(formSteps).indexOf(nextStep);
            setActivePaginationLink(nextStepIndex);
            if (nextStepIndex === formSteps.length - 1) {
              formPagination.style.display = 'none';
            }
          }
        });
      }
    });
    formPagination.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target.tagName === 'A') {
        const targetStepIndex = parseInt(e.target.textContent) - 1;
        const targetStep = formSteps[targetStepIndex];
        if (targetStep) {
          formSteps.forEach(step => step.style.display = 'none');
          targetStep.style.display = 'block';
          updateNextButtonState(targetStep);
          setActivePaginationLink(targetStepIndex);
          if (targetStepIndex === formSteps.length - 1) {
            formPagination.style.display = 'none';
          }
        }
      }
    });
    formSteps.forEach(step => {
      const inputs = step.querySelectorAll('input[required], textarea[required], select[required]');
      inputs.forEach(input => {
        input.addEventListener('input', function () {
          updateNextButtonState(step);
        });
      });
    });

    // Инициализация: показываем первый шаг
    formSteps[0].style.display = 'block';
    setActivePaginationLink(0);
    updateNextButtonState(formSteps[0]);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const tabWrappers = document.querySelectorAll('.tab-wrapper');
  function hideAllTabItems(wrappers) {
    wrappers.forEach(wrapper => {
      const tabItems = wrapper.querySelectorAll('.tab-item');
      tabItems.forEach(item => {
        item.style.display = 'none';
      });
    });
  }
  function showTabItem(wrapper, index) {
    const tabItems = wrapper.querySelectorAll('.tab-item');
    hideAllTabItems([wrapper]);
    tabItems[index].style.display = 'block';
  }
  function setActiveTabButton(activeButton, buttons) {
    buttons.forEach(button => {
      if (button === activeButton) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  function initializeTabs(tabWrappers) {
    tabWrappers.forEach(wrapper => {
      const tabButtons = wrapper.querySelectorAll('.results-tab-btn');
      const tabItems = wrapper.querySelectorAll('.tab-item');
      tabButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
          showTabItem(wrapper, index);
          setActiveTabButton(button, tabButtons);
        });
      });
      // Показываем первый таб при загрузке страницы
      showTabItem(wrapper, 0);
      setActiveTabButton(tabButtons[0], tabButtons);
    });
  }
  initializeTabs(tabWrappers);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxDQUFDdkYsT0FBTyxFQUFFdkMsS0FBSyxDQUFDO1VBQzNCK0gsa0JBQWtCLENBQUNHLE1BQU0sRUFBRUUsVUFBVSxDQUFDO1FBQ3hDLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztNQUNGO01BQ0FOLFdBQVcsQ0FBQ3ZGLE9BQU8sRUFBRSxDQUFDLENBQUM7TUFDdkJ3RixrQkFBa0IsQ0FBQ0ssVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxVQUFVLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0VBQ0o7RUFFQUQsY0FBYyxDQUFDVCxXQUFXLENBQUM7QUFDN0IsQ0FBQyxDQUFDOzs7Ozs7VUN2ZUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBzd2lwZXIxID0gbmV3IFN3aXBlcihcIi50ZXN0aW1vbmlhbHMtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIudGVzdGltb25pYWxzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDMyMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTIsXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDYwMToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMS41LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIuY2FzZXMtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5jYXNlcy1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgIHByZXZFbDogXCIuY2FzZXMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5jYXNlcy1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArIFwiPC9zcGFuPlwiO1xuICAgIH0sXG4gIH0sXG59KTtcblxudmFyIHN3aXBlcjQgPSBuZXcgU3dpcGVyKFwiLmNhc2UtaW5uZXItc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBlZmZlY3Q6IFwiZmFkZVwiLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5jYXNlLWlubmVyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0LWlubmVyXCIsXG4gICAgcHJldkVsOiBcIi5jYXNlLWlubmVyLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2LWlubmVyXCIsXG4gIH0sXG59KTtcblxudmFyIHN3aXBlcjMgPSBuZXcgU3dpcGVyKFwiLnN0YWZmLXNsaWRlclwiLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDQsXG4gIHNwYWNlQmV0d2VlbjogNDAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLnN0YWZmLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5zdGFmZi1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAxOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDQwLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbi1pdGVtJyk7XG5cbiAgaWYgKGFjY29yZGlvbkl0ZW1zKSB7XG4gICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1jb250ZW50Jyk7XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgY29sbGFwc2VJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXNlLWluZm8taXRlbScpO1xuXG4gIGlmIChjb2xsYXBzZUl0ZW1zKSB7XG4gICAgY29sbGFwc2VJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1oZWFkZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWluZm8tY29udGVudCcpO1xuXG4gICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UtaW5mby1pdGVtJykuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNoaWxkLnF1ZXJ5U2VsZWN0b3IoJy5jYXNlLWluZm8tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXInKTtcblxuICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgZmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24ob3RoZXJGaWx0ZXIpIHtcbiAgICAgICAgaWYgKG90aGVyRmlsdGVyICE9PSBmaWx0ZXIpIHtcbiAgICAgICAgICBvdGhlckZpbHRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmaWx0ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbFRvcCA+IDApIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsZWQnKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAwKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5NZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1tZW51LWJ0bicpO1xuICBjb25zdCBoZWFkZXJNb2JpbGVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1ib3R0b20nKTtcbiAgY29uc3QgYnRuQ2xvc2VNb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1jbG9zZS1tb2JpbGUtbWVudScpO1xuXG4gIGJ0bk1lbnVNb2JpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaGVhZGVyTW9iaWxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH0pO1xuXG4gIGJ0bkNsb3NlTW9iaWxlTWVudS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaGVhZGVyTW9iaWxlV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZGlhZ3JhbVdyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpYWdyYW0td3JhcHBlcicpO1xuXG4gIGRpYWdyYW1XcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xuICAgIGNvbnN0IGJhcnMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXInKTtcbiAgICBsZXQgbWF4VmFsdWUgPSAwO1xuXG4gICAgYmFycy5mb3JFYWNoKGJhciA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoYmFyLm5leHRFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgICBpZiAodmFsdWUgPiBtYXhWYWx1ZSkge1xuICAgICAgICBtYXhWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYmFycy5mb3JFYWNoKGJhciA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoYmFyLm5leHRFbGVtZW50U2libGluZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSAodmFsdWUgLyBtYXhWYWx1ZSkgKiAxMDA7XG4gICAgICBiYXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJyUnO1xuICAgICAgYmFyLm5leHRFbGVtZW50U2libGluZy5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wZW4tbW9kYWwtZGlhbG9nJyksXG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICBjbG9zZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nIC5tb2RhbC1jbG9zZScpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbEJ0bikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciBtb2RhbElkID0gbW9kYWxCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpLFxuICAgICAgICBtb2RhbEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGlhbG9nLicgKyBtb2RhbElkKTtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgbW9kYWxFbGVtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIG1vZGFsRWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuaW5nJyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2xvc2VNb2RhbChjbG9zZUJ0bikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHZhciBtb2RhbCA9IGNsb3NlQnRuLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNsb3NpbmcnKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtY2xvc2luZycpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgNTAwKTsgLy8g0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMINCw0L3QuNC80LDRhtC40LggZmFkZU91dFxuICAgIH0pO1xuICB9XG5cbiAgLyogb3BlbiBtb2RhbCAqL1xuICBtb2RhbEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihtb2RhbEJ0bikge1xuICAgIG1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYXdhaXQgb3Blbk1vZGFsKG1vZGFsQnRuKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyogY2xvc2UgbW9kYWwgKi9cbiAgY2xvc2VCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oY2xvc2VCdG4pIHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGF3YWl0IGNsb3NlTW9kYWwoY2xvc2VCdG4pO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nJykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGNsb3NlTW9kYWwodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cnKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY2xvc2UnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpZnJhbWUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgICAgICBpZiAoaWZyYW1lKSB7XG4gICAgICAgICAgLy8g0J7RgdGC0LDQvdC+0LLQutCwINCy0LjQtNC10L4g0L/RgNC4INC30LDQutGA0YvRgtC40Lgg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LBcbiAgICAgICAgICB2YXIgdmlkZW9TcmMgPSBpZnJhbWUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCAnJyk7XG4gICAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciB1cGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkLWJ1dHRvbicpO1xuICB2YXIgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlLXVwbG9hZC1tZXNzYWdlJyk7XG5cbiAgaWYgKHVwbG9hZEJ1dHRvbikge1xuICAgIHVwbG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcbiAgICAgIHZhciBmaWxlID0gZmlsZUlucHV0LmZpbGVzWzBdO1xuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcblxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAn0LLQsNGIX9Cw0LTRgNC10YFf0YHQtdGA0LLQtdGA0LAv0L7QsdGA0LDQsdC+0YLRh9C40Lpf0LfQsNC/0YDQvtGB0L7Qsi5waHAnLCB0cnVlKTtcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGE0LDQudC70LAuJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmlmICh0eXBlb2YgSU1hc2sgIT09ICd1bmRlZmluZWQnKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQucGhvbmUnKTtcbiAgY29uc3QgbWFza09wdGlvbnMgPSB7XG4gICAgbWFzazogJyt7N30oMDAwKTAwMC0wMC0wMCdcbiAgfTtcbiAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgIGxldCBtYXNrID0gSU1hc2soZWxlbWVudCwgbWFza09wdGlvbnMpO1xuICAgIH0pO1xuICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblxuICBjb25zdCBmb3JtU3RlcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1zdGVwJyk7XG4gIGNvbnN0IGZvcm1QYWdpbmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcGFnaW5hdGlvbicpO1xuXG4gIC8vINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDQstGB0LXRhSDRjdC70LXQvNC10L3RgtC+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gIGlmIChmb3JtU3RlcHMubGVuZ3RoID4gMCAmJiBmb3JtUGFnaW5hdGlvbikge1xuICAgIC8vINCV0YHQu9C4INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC/0YDQuNGB0YPRgtGB0YLQstGD0Y7Rgiwg0LTQvtCx0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YHQvtCx0YvRgtC40Lkg0Lgg0LTRgNGD0LPRg9GOINC70L7Qs9C40LrRg1xuICAgIGZ1bmN0aW9uIGNoZWNrUmVxdWlyZWRGaWVsZHMoc3RlcCkge1xuICAgICAgY29uc3QgcmVxdWlyZWRJbnB1dHMgPSBzdGVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3JlcXVpcmVkXSwgdGV4dGFyZWFbcmVxdWlyZWRdLCBzZWxlY3RbcmVxdWlyZWRdJyk7XG4gICAgICBsZXQgY2hlY2tCb3hDaGVja2VkID0gZmFsc2U7IC8vINCk0LvQsNCzINC00LvRjyDQv9GA0L7QstC10YDQutC4INGH0LXQutCx0L7QutGB0L7QslxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXF1aXJlZElucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHJlcXVpcmVkSW5wdXRzW2ldO1xuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja0JveENoZWNrZWQgPSB0cnVlOyAvLyDQo9GB0YLQsNC90L7QstC40YLRjCDRhNC70LDQsyDQsiB0cnVlLCDQtdGB0LvQuCDRhdC+0YLRjyDQsdGLINC+0LTQuNC9INGH0LXQutCx0L7QutGBINCy0YvQsdGA0LDQvVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8g0JfQsNC/0L7Qu9C90LXQvdC+INC00YDRg9Cz0L7QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGVja0JveENoZWNrZWQ7IC8vINCS0LXRgNC90YPRgtGMINGB0L7RgdGC0L7Rj9C90LjQtSDRhNC70LDQs9CwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTmV4dEJ1dHRvblN0YXRlKHN0ZXApIHtcbiAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBzdGVwLnF1ZXJ5U2VsZWN0b3IoJy53cGNmNy1zdWJtaXQnKTtcbiAgICAgIGlmIChuZXh0QnV0dG9uKSB7XG4gICAgICAgIG5leHRCdXR0b24uZGlzYWJsZWQgPSAhY2hlY2tSZXF1aXJlZEZpZWxkcyhzdGVwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVQYWdpbmF0aW9uTGluayhpbmRleCkge1xuICAgICAgZm9ybVBhZ2luYXRpb24ucXVlcnlTZWxlY3RvckFsbCgnbGknKS5mb3JFYWNoKChsaSwgaSkgPT4ge1xuICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9ybVN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBjb25zdCBuZXh0QnV0dG9uID0gc3RlcC5xdWVyeVNlbGVjdG9yKCcud3BjZjctc3VibWl0Jyk7XG4gICAgICBpZiAobmV4dEJ1dHRvbikge1xuICAgICAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMuY2xvc2VzdCgnLmZvcm0tc3RlcCcpO1xuICAgICAgICAgIGNvbnN0IG5leHRTdGVwID0gY3VycmVudFN0ZXAubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgIGlmIChuZXh0U3RlcCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY3VycmVudFN0ZXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIG5leHRTdGVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdXBkYXRlTmV4dEJ1dHRvblN0YXRlKG5leHRTdGVwKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFN0ZXBJbmRleCA9IEFycmF5LmZyb20oZm9ybVN0ZXBzKS5pbmRleE9mKG5leHRTdGVwKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZVBhZ2luYXRpb25MaW5rKG5leHRTdGVwSW5kZXgpO1xuICAgICAgICAgICAgaWYgKG5leHRTdGVwSW5kZXggPT09IGZvcm1TdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIGZvcm1QYWdpbmF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZvcm1QYWdpbmF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RlcEluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQudGV4dENvbnRlbnQpIC0gMTtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RlcCA9IGZvcm1TdGVwc1t0YXJnZXRTdGVwSW5kZXhdO1xuICAgICAgICBpZiAodGFyZ2V0U3RlcCkge1xuICAgICAgICAgIGZvcm1TdGVwcy5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgICAgICAgICB0YXJnZXRTdGVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIHVwZGF0ZU5leHRCdXR0b25TdGF0ZSh0YXJnZXRTdGVwKTtcblxuICAgICAgICAgIHNldEFjdGl2ZVBhZ2luYXRpb25MaW5rKHRhcmdldFN0ZXBJbmRleCk7XG4gICAgICAgICAgaWYgKHRhcmdldFN0ZXBJbmRleCA9PT0gZm9ybVN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGZvcm1QYWdpbmF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3JtU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIGNvbnN0IGlucHV0cyA9IHN0ZXAucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbcmVxdWlyZWRdLCB0ZXh0YXJlYVtyZXF1aXJlZF0sIHNlbGVjdFtyZXF1aXJlZF0nKTtcbiAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdXBkYXRlTmV4dEJ1dHRvblN0YXRlKHN0ZXApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y86INC/0L7QutCw0LfRi9Cy0LDQtdC8INC/0LXRgNCy0YvQuSDRiNCw0LNcbiAgICBmb3JtU3RlcHNbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc2V0QWN0aXZlUGFnaW5hdGlvbkxpbmsoMCk7XG4gICAgdXBkYXRlTmV4dEJ1dHRvblN0YXRlKGZvcm1TdGVwc1swXSk7XG4gIH1cbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhYldyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi13cmFwcGVyJyk7XG5cbiAgZnVuY3Rpb24gaGlkZUFsbFRhYkl0ZW1zKHdyYXBwZXJzKSB7XG4gICAgd3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+IHtcbiAgICAgIGNvbnN0IHRhYkl0ZW1zID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWl0ZW0nKTtcbiAgICAgIHRhYkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RhYkl0ZW0od3JhcHBlciwgaW5kZXgpIHtcbiAgICBjb25zdCB0YWJJdGVtcyA9IHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1pdGVtJyk7XG4gICAgaGlkZUFsbFRhYkl0ZW1zKFt3cmFwcGVyXSk7XG4gICAgdGFiSXRlbXNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlVGFiQnV0dG9uKGFjdGl2ZUJ1dHRvbiwgYnV0dG9ucykge1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgaWYgKGJ1dHRvbiA9PT0gYWN0aXZlQnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVUYWJzKHRhYldyYXBwZXJzKSB7XG4gICAgdGFiV3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+IHtcbiAgICAgIGNvbnN0IHRhYkJ1dHRvbnMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHRzLXRhYi1idG4nKTtcbiAgICAgIGNvbnN0IHRhYkl0ZW1zID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWl0ZW0nKTtcbiAgICAgIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2hvd1RhYkl0ZW0od3JhcHBlciwgaW5kZXgpO1xuICAgICAgICAgIHNldEFjdGl2ZVRhYkJ1dHRvbihidXR0b24sIHRhYkJ1dHRvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8g0J/QvtC60LDQt9GL0LLQsNC10Lwg0L/QtdGA0LLRi9C5INGC0LDQsSDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXG4gICAgICBzaG93VGFiSXRlbSh3cmFwcGVyLCAwKTtcbiAgICAgIHNldEFjdGl2ZVRhYkJ1dHRvbih0YWJCdXR0b25zWzBdLCB0YWJCdXR0b25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVUYWJzKHRhYldyYXBwZXJzKTtcbn0pO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsic3dpcGVyMSIsIlN3aXBlciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJvYnNlcnZlU2xpZGVDaGlsZHJlbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwic3dpcGVyMiIsImFsbG93VG91Y2hNb3ZlIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJzd2lwZXI0IiwiZWZmZWN0Iiwic3dpcGVyMyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJjaGlsZCIsImFkZCIsInNjcm9sbEhlaWdodCIsImNvbGxhcHNlSXRlbXMiLCJmaWx0ZXJzIiwiZmlsdGVyIiwib3RoZXJGaWx0ZXIiLCJoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsImJ0bk1lbnVNb2JpbGUiLCJoZWFkZXJNb2JpbGVXcmFwcGVyIiwiYnRuQ2xvc2VNb2JpbGVNZW51IiwiYnRuIiwib25sb2FkIiwiZGlhZ3JhbVdyYXBwZXJzIiwid3JhcHBlciIsImJhcnMiLCJtYXhWYWx1ZSIsImJhciIsInZhbHVlIiwicGFyc2VGbG9hdCIsIm5leHRFbGVtZW50U2libGluZyIsImdldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsIm1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbnMiLCJvcGVuTW9kYWwiLCJtb2RhbEJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwibW9kYWxJZCIsIm1vZGFsRWxlbSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbCIsImNsb3NlQnRuIiwibW9kYWwiLCJjbG9zZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlmcmFtZSIsInZpZGVvU3JjIiwic2V0QXR0cmlidXRlIiwidXBsb2FkQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlIiwiZXZlbnQiLCJmaWxlSW5wdXQiLCJmaWxlIiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInRleHRDb250ZW50IiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIklNYXNrIiwiZWxlbWVudHMiLCJtYXNrT3B0aW9ucyIsIm1hc2siLCJsZW5ndGgiLCJlbGVtZW50IiwiZm9ybVN0ZXBzIiwiZm9ybVBhZ2luYXRpb24iLCJjaGVja1JlcXVpcmVkRmllbGRzIiwic3RlcCIsInJlcXVpcmVkSW5wdXRzIiwiY2hlY2tCb3hDaGVja2VkIiwiaSIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJ0cmltIiwidXBkYXRlTmV4dEJ1dHRvblN0YXRlIiwibmV4dEJ1dHRvbiIsImRpc2FibGVkIiwic2V0QWN0aXZlUGFnaW5hdGlvbkxpbmsiLCJsaSIsImN1cnJlbnRTdGVwIiwibmV4dFN0ZXAiLCJuZXh0U3RlcEluZGV4IiwiQXJyYXkiLCJmcm9tIiwiaW5kZXhPZiIsInRhZ05hbWUiLCJ0YXJnZXRTdGVwSW5kZXgiLCJwYXJzZUludCIsInRhcmdldFN0ZXAiLCJpbnB1dHMiLCJ0YWJXcmFwcGVycyIsImhpZGVBbGxUYWJJdGVtcyIsIndyYXBwZXJzIiwidGFiSXRlbXMiLCJzaG93VGFiSXRlbSIsInNldEFjdGl2ZVRhYkJ1dHRvbiIsImFjdGl2ZUJ1dHRvbiIsImJ1dHRvbnMiLCJidXR0b24iLCJpbml0aWFsaXplVGFicyIsInRhYkJ1dHRvbnMiXSwic291cmNlUm9vdCI6IiJ9