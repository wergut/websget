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
document.addEventListener('DOMContentLoaded', function () {
  if (typeof IMask !== 'undefined') {
    let elements = document.querySelectorAll('input.phone');
    let maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    if (elements.length > 0) {
      elements.forEach(function (element) {
        let mask = IMask(element, maskOptions);
      });
    }
  }
});
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
        if (targetStep && checkRequiredFields(targetStep)) {
          // Добавил проверку на заполненность текущего шага
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBRyxJQUFJQyxNQUFNLENBQUMsc0JBQXNCLEVBQUU7RUFDL0NDLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxvQkFBb0IsRUFBRSxJQUFJO0VBQzFCQyxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLG1CQUFtQixFQUFFLElBQUk7RUFDekJDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsMENBQTBDO0lBQ2xEQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYO0lBQ0EsR0FBRyxFQUFFO01BQ0hOLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNEO0lBQ0EsR0FBRyxFQUFFO01BQ0hELGFBQWEsRUFBRSxHQUFHO01BQ2xCQyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKRCxhQUFhLEVBQUUsQ0FBQztNQUNoQkMsWUFBWSxFQUFFO0lBQ2hCO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixJQUFJTSxPQUFPLEdBQUcsSUFBSVgsTUFBTSxDQUFDLGVBQWUsRUFBRTtFQUN4Q0MsUUFBUSxFQUFFLElBQUk7RUFDZEMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLG9CQUFvQixFQUFFLElBQUk7RUFDMUJDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxZQUFZLEVBQUUsRUFBRTtFQUNoQk8sY0FBYyxFQUFFLEtBQUs7RUFDckJOLG1CQUFtQixFQUFFLElBQUk7RUFDekJDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsbUNBQW1DO0lBQzNDQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RJLFVBQVUsRUFBRTtJQUNWQyxFQUFFLEVBQUUsa0NBQWtDO0lBQ3RDQyxTQUFTLEVBQUUsSUFBSTtJQUNmQyxZQUFZLEVBQUUsU0FBQUEsQ0FBVUMsS0FBSyxFQUFFQyxTQUFTLEVBQUU7TUFDeEMsT0FBTyxlQUFlLEdBQUdBLFNBQVMsR0FBRyxJQUFJLElBQUlELEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTO0lBQ3JFO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixJQUFJRSxPQUFPLEdBQUcsSUFBSW5CLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtFQUM3Q0MsUUFBUSxFQUFFLElBQUk7RUFDZEMsY0FBYyxFQUFFLElBQUk7RUFDcEJDLG9CQUFvQixFQUFFLElBQUk7RUFDMUJDLGFBQWEsRUFBRSxDQUFDO0VBQ2hCQyxZQUFZLEVBQUUsQ0FBQztFQUNmQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCYyxNQUFNLEVBQUUsTUFBTTtFQUNkYixVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLDhDQUE4QztJQUN0REMsTUFBTSxFQUFFO0VBQ1Y7QUFDRixDQUFDLENBQUM7QUFFRixJQUFJWSxPQUFPLEdBQUcsSUFBSXJCLE1BQU0sQ0FBQyxlQUFlLEVBQUU7RUFDeENDLFFBQVEsRUFBRSxJQUFJO0VBQ2RDLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxvQkFBb0IsRUFBRSxJQUFJO0VBQzFCQyxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsWUFBWSxFQUFFLEVBQUU7RUFDaEJDLG1CQUFtQixFQUFFLElBQUk7RUFDekJDLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUsbUNBQW1DO0lBQzNDQyxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYO0lBQ0EsR0FBRyxFQUFFO01BQ0hOLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNEO0lBQ0EsR0FBRyxFQUFFO01BQ0hELGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxZQUFZLEVBQUU7SUFDaEIsQ0FBQztJQUNELElBQUksRUFBRTtNQUNKRCxhQUFhLEVBQUUsQ0FBQztNQUNoQkMsWUFBWSxFQUFFO0lBQ2hCO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFLRmlCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RCxNQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7RUFFbkUsSUFBSUQsY0FBYyxFQUFFO0lBQ2xCQSxjQUFjLENBQUNFLE9BQU8sQ0FBQ0MsSUFBSSxJQUFJO01BQzdCLE1BQU1DLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxhQUFhLENBQUMsd0JBQXdCLENBQUM7TUFDNUQsTUFBTUMsT0FBTyxHQUFHSCxJQUFJLENBQUNFLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztNQUU3REQsT0FBTyxDQUFDTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztRQUMzQyxNQUFNUSxNQUFNLEdBQUcsSUFBSSxDQUFDQyxVQUFVO1FBRTlCLElBQUlELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDdkNILE1BQU0sQ0FBQ0UsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO1VBQ2pDTCxPQUFPLENBQUNNLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7UUFDNUIsQ0FBQyxNQUFNO1VBQ0xmLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDWSxLQUFLLElBQUk7WUFDNURBLEtBQUssQ0FBQ0wsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hDRyxLQUFLLENBQUNULGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDTyxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHO1VBQ25FLENBQUMsQ0FBQztVQUNGTixNQUFNLENBQUNFLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUM5QlQsT0FBTyxDQUFDTSxLQUFLLENBQUNDLE1BQU0sR0FBR1AsT0FBTyxDQUFDVSxZQUFZLEdBQUcsSUFBSTtRQUNwRDtNQUNGLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQyxDQUFDO0FBRUZsQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDdkQsTUFBTWtCLGFBQWEsR0FBR25CLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7RUFFbEUsSUFBSWdCLGFBQWEsRUFBRTtJQUNqQkEsYUFBYSxDQUFDZixPQUFPLENBQUNDLElBQUksSUFBSTtNQUM1QixNQUFNQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsYUFBYSxDQUFDLG1CQUFtQixDQUFDO01BQ3ZELE1BQU1DLE9BQU8sR0FBR0gsSUFBSSxDQUFDRSxhQUFhLENBQUMsb0JBQW9CLENBQUM7TUFFeERELE9BQU8sQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7UUFDM0MsTUFBTVEsTUFBTSxHQUFHLElBQUksQ0FBQ0MsVUFBVTtRQUU5QixJQUFJRCxNQUFNLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1VBQ3ZDSCxNQUFNLENBQUNFLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztVQUNqQ0wsT0FBTyxDQUFDTSxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHO1FBQzVCLENBQUMsTUFBTTtVQUNMZixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUNDLE9BQU8sQ0FBQ1ksS0FBSyxJQUFJO1lBQzVEQSxLQUFLLENBQUNMLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQ0csS0FBSyxDQUFDVCxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQ08sS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRztVQUM5RCxDQUFDLENBQUM7VUFDRk4sTUFBTSxDQUFDRSxTQUFTLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQUM7VUFDOUJULE9BQU8sQ0FBQ00sS0FBSyxDQUFDQyxNQUFNLEdBQUdQLE9BQU8sQ0FBQ1UsWUFBWSxHQUFHLElBQUk7UUFDcEQ7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQztBQUVGbEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3ZELElBQUltQixPQUFPLEdBQUdwQixRQUFRLENBQUNHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztFQUVsRGlCLE9BQU8sQ0FBQ2hCLE9BQU8sQ0FBQyxVQUFTaUIsTUFBTSxFQUFFO0lBQy9CQSxNQUFNLENBQUNwQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUMxQ21CLE9BQU8sQ0FBQ2hCLE9BQU8sQ0FBQyxVQUFTa0IsV0FBVyxFQUFFO1FBQ3BDLElBQUlBLFdBQVcsS0FBS0QsTUFBTSxFQUFFO1VBQzFCQyxXQUFXLENBQUNYLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN4QztNQUNGLENBQUMsQ0FBQztNQUNGUSxNQUFNLENBQUNWLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRmpCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUN2RCxNQUFNc0IsTUFBTSxHQUFHdkIsUUFBUSxDQUFDTyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBRWhEaUIsTUFBTSxDQUFDdkIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVc7SUFDM0MsSUFBSXdCLFNBQVMsR0FBR0QsTUFBTSxDQUFDRSxXQUFXLElBQUkxQixRQUFRLENBQUMyQixlQUFlLENBQUNGLFNBQVM7SUFDeEUsSUFBSUEsU0FBUyxHQUFHLENBQUMsRUFBRTtNQUNqQkYsTUFBTSxDQUFDWixTQUFTLENBQUNNLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDbEMsQ0FBQyxNQUFNO01BQ0xNLE1BQU0sQ0FBQ1osU0FBUyxDQUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3JDO0VBQ0YsQ0FBQyxDQUFDO0VBRUYsSUFBSVcsTUFBTSxDQUFDRSxXQUFXLEdBQUcsQ0FBQyxFQUFFO0lBQzFCSCxNQUFNLENBQUNaLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNsQztBQUNGLENBQUMsQ0FBQztBQUVGakIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3hELE1BQU0yQixhQUFhLEdBQUc1QixRQUFRLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUNoRSxNQUFNc0IsbUJBQW1CLEdBQUc3QixRQUFRLENBQUNPLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNwRSxNQUFNdUIsa0JBQWtCLEdBQUc5QixRQUFRLENBQUNHLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO0VBRTlFeUIsYUFBYSxDQUFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDbEQ0QixtQkFBbUIsQ0FBQ2xCLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUMzQyxDQUFDLENBQUM7RUFFRmEsa0JBQWtCLENBQUMxQixPQUFPLENBQUMyQixHQUFHLElBQUk7SUFDaENBLEdBQUcsQ0FBQzlCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ3hDNEIsbUJBQW1CLENBQUNsQixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUZXLE1BQU0sQ0FBQ1EsTUFBTSxHQUFHLFlBQVc7RUFDekIsTUFBTUMsZUFBZSxHQUFHakMsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztFQUVyRThCLGVBQWUsQ0FBQzdCLE9BQU8sQ0FBQzhCLE9BQU8sSUFBSTtJQUNqQyxNQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQy9CLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztJQUM3QyxJQUFJaUMsUUFBUSxHQUFHLENBQUM7SUFFaEJELElBQUksQ0FBQy9CLE9BQU8sQ0FBQ2lDLEdBQUcsSUFBSTtNQUNsQixNQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQ0YsR0FBRyxDQUFDRyxrQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO01BQzNFLElBQUlILEtBQUssR0FBR0YsUUFBUSxFQUFFO1FBQ3BCQSxRQUFRLEdBQUdFLEtBQUs7TUFDbEI7SUFDRixDQUFDLENBQUM7SUFFRkgsSUFBSSxDQUFDL0IsT0FBTyxDQUFDaUMsR0FBRyxJQUFJO01BQ2xCLE1BQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDRixHQUFHLENBQUNHLGtCQUFrQixDQUFDQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7TUFDM0UsTUFBTTFCLE1BQU0sR0FBSXVCLEtBQUssR0FBR0YsUUFBUSxHQUFJLEdBQUc7TUFDdkNDLEdBQUcsQ0FBQ3ZCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLEdBQUcsR0FBRztNQUMvQnNCLEdBQUcsQ0FBQ0csa0JBQWtCLENBQUNFLFNBQVMsR0FBR0osS0FBSztJQUMxQyxDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBR0R0QyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDdkQsSUFBSTBDLFlBQVksR0FBRzNDLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsb0JBQW9CLENBQUM7SUFDaEV5QyxPQUFPLEdBQUc1QyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDeENzQyxZQUFZLEdBQUc3QyxRQUFRLENBQUNHLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDO0VBRXhFLGVBQWUyQyxTQUFTQSxDQUFDQyxRQUFRLEVBQUU7SUFDakMsT0FBTyxJQUFJQyxPQUFPLENBQUNDLE9BQU8sSUFBSTtNQUM1QixJQUFJQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ04sWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUM3Q1UsU0FBUyxHQUFHbkQsUUFBUSxDQUFDTyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcyQyxPQUFPLENBQUM7TUFDaEVOLE9BQU8sQ0FBQ2pDLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFlBQVksQ0FBQztNQUNuQ2tDLFNBQVMsQ0FBQ3JDLEtBQUssQ0FBQ3NDLE9BQU8sR0FBRyxNQUFNO01BRWhDQyxVQUFVLENBQUMsWUFBVztRQUNwQkYsU0FBUyxDQUFDeEMsU0FBUyxDQUFDTSxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ3hDZ0MsT0FBTyxDQUFDLENBQUM7TUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxlQUFlSyxVQUFVQSxDQUFDQyxRQUFRLEVBQUU7SUFDbEMsT0FBTyxJQUFJUCxPQUFPLENBQUNDLE9BQU8sSUFBSTtNQUM1QixJQUFJTyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUM3Q0QsS0FBSyxDQUFDN0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsZUFBZSxDQUFDO01BQ3ZDMkMsS0FBSyxDQUFDN0MsU0FBUyxDQUFDTSxHQUFHLENBQUMsZUFBZSxDQUFDO01BRXBDb0MsVUFBVSxDQUFDLFlBQVc7UUFDcEJHLEtBQUssQ0FBQzdDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUN2QzJDLEtBQUssQ0FBQzFDLEtBQUssQ0FBQ3NDLE9BQU8sR0FBRyxNQUFNO1FBQzVCUixPQUFPLENBQUNqQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDdENvQyxPQUFPLENBQUMsQ0FBQztNQUNYLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ0o7O0VBRUE7RUFDQU4sWUFBWSxDQUFDdkMsT0FBTyxDQUFDLFVBQVMyQyxRQUFRLEVBQUU7SUFDdENBLFFBQVEsQ0FBQzlDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxnQkFBZXlELENBQUMsRUFBRTtNQUNuREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUNsQixNQUFNYixTQUFTLENBQUNDLFFBQVEsQ0FBQztJQUMzQixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQUYsWUFBWSxDQUFDekMsT0FBTyxDQUFDLFVBQVNtRCxRQUFRLEVBQUU7SUFDdENBLFFBQVEsQ0FBQ3RELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxnQkFBZXlELENBQUMsRUFBRTtNQUNuRCxNQUFNSixVQUFVLENBQUNDLFFBQVEsQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFFRnZELFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFTQyxJQUFJLEVBQUU7SUFDaEVBLElBQUksQ0FBQ0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFleUQsQ0FBQyxFQUFFO01BQy9DLElBQUlBLENBQUMsQ0FBQ0UsTUFBTSxLQUFLRixDQUFDLENBQUNHLGFBQWEsRUFBRTtRQUNoQztNQUNGLENBQUMsTUFBTTtRQUNMLE1BQU1QLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDeEI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7RUFFRnRELFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFTQyxJQUFJLEVBQUU7SUFDaEVBLElBQUksQ0FBQ0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVV5RCxDQUFDLEVBQUU7TUFDMUMsSUFBR0EsQ0FBQyxDQUFDRSxNQUFNLEtBQUtGLENBQUMsQ0FBQ0csYUFBYSxJQUFJLENBQUNILENBQUMsQ0FBQ0UsTUFBTSxDQUFDakQsU0FBUyxDQUFDQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDOUU7TUFDRixDQUFDLE1BQU07UUFDTCxJQUFJa0QsTUFBTSxHQUFHLElBQUksQ0FBQ3ZELGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSXVELE1BQU0sRUFBRTtVQUNWO1VBQ0EsSUFBSUMsUUFBUSxHQUFHRCxNQUFNLENBQUNyQixZQUFZLENBQUMsS0FBSyxDQUFDO1VBQ3pDcUIsTUFBTSxDQUFDRSxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztVQUM5QkYsTUFBTSxDQUFDRSxZQUFZLENBQUMsS0FBSyxFQUFFRCxRQUFRLENBQUM7UUFDdEM7UUFDQSxJQUFJLENBQUNwRCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUM7TUFDeEM7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFFSixDQUFDLENBQUM7QUFHRmIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3ZELElBQUlnRSxZQUFZLEdBQUdqRSxRQUFRLENBQUNrRSxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzNELElBQUlDLE9BQU8sR0FBR25FLFFBQVEsQ0FBQ2tFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQztFQUU1RCxJQUFJRCxZQUFZLEVBQUU7SUFDaEJBLFlBQVksQ0FBQ2hFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTbUUsS0FBSyxFQUFFO01BQ3JELElBQUlDLFNBQVMsR0FBR3JFLFFBQVEsQ0FBQ2tFLGNBQWMsQ0FBQyxNQUFNLENBQUM7TUFDL0MsSUFBSUksSUFBSSxHQUFHRCxTQUFTLENBQUNFLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDN0IsSUFBSUMsUUFBUSxHQUFHLElBQUlDLFFBQVEsQ0FBQyxDQUFDO01BQzdCRCxRQUFRLENBQUNFLE1BQU0sQ0FBQyxNQUFNLEVBQUVKLElBQUksQ0FBQztNQUU3QixJQUFJSyxHQUFHLEdBQUcsSUFBSUMsY0FBYyxDQUFDLENBQUM7TUFDOUJELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSwyQ0FBMkMsRUFBRSxJQUFJLENBQUM7TUFFbkVGLEdBQUcsQ0FBQ0csa0JBQWtCLEdBQUcsWUFBVztRQUNsQyxJQUFJSCxHQUFHLENBQUNJLFVBQVUsS0FBSyxDQUFDLEVBQUU7VUFDeEIsSUFBSUosR0FBRyxDQUFDSyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ3RCYixPQUFPLENBQUNjLFdBQVcsR0FBR04sR0FBRyxDQUFDTyxZQUFZO1VBQ3hDLENBQUMsTUFBTTtZQUNMZixPQUFPLENBQUNjLFdBQVcsR0FBRyxzQ0FBc0M7VUFDOUQ7UUFDRjtNQUNGLENBQUM7TUFFRE4sR0FBRyxDQUFDUSxJQUFJLENBQUNYLFFBQVEsQ0FBQztJQUNwQixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsQ0FBQztBQUVGeEUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3ZELElBQUksT0FBT21GLEtBQUssS0FBSyxXQUFXLEVBQUU7SUFDaEMsSUFBSUMsUUFBUSxHQUFHckYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDdkQsSUFBSW1GLFdBQVcsR0FBRztNQUNoQkMsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUNELElBQUlGLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN2QkgsUUFBUSxDQUFDakYsT0FBTyxDQUFDLFVBQVNxRixPQUFPLEVBQUU7UUFDakMsSUFBSUYsSUFBSSxHQUFHSCxLQUFLLENBQUNLLE9BQU8sRUFBRUgsV0FBVyxDQUFDO01BQ3hDLENBQUMsQ0FBQztJQUNKO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRnRGLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUV2RCxNQUFNeUYsU0FBUyxHQUFHMUYsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7RUFDekQsTUFBTXdGLGNBQWMsR0FBRzNGLFFBQVEsQ0FBQ2tFLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQzs7RUFFakU7RUFDQSxJQUFJd0IsU0FBUyxDQUFDRixNQUFNLEdBQUcsQ0FBQyxJQUFJRyxjQUFjLEVBQUU7SUFDMUM7SUFDQSxTQUFTQyxtQkFBbUJBLENBQUNDLElBQUksRUFBRTtNQUNqQyxNQUFNQyxjQUFjLEdBQUdELElBQUksQ0FBQzFGLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDO01BQ3JHLElBQUk0RixlQUFlLEdBQUcsS0FBSyxDQUFDLENBQUM7TUFDN0IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLGNBQWMsQ0FBQ04sTUFBTSxFQUFFUSxDQUFDLEVBQUUsRUFBRTtRQUM5QyxNQUFNQyxLQUFLLEdBQUdILGNBQWMsQ0FBQ0UsQ0FBQyxDQUFDO1FBQy9CLElBQUlDLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLFVBQVUsRUFBRTtVQUM3QixJQUFJRCxLQUFLLENBQUNFLE9BQU8sRUFBRTtZQUNqQkosZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDO1VBQzFCO1FBQ0YsQ0FBQyxNQUFNO1VBQ0wsSUFBSUUsS0FBSyxDQUFDM0QsS0FBSyxDQUFDOEQsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxDQUFDO1VBQ2Y7UUFDRjtNQUNGOztNQUNBLE9BQU9MLGVBQWUsQ0FBQyxDQUFDO0lBQzFCOztJQUVBLFNBQVNNLHFCQUFxQkEsQ0FBQ1IsSUFBSSxFQUFFO01BQ25DLE1BQU1TLFVBQVUsR0FBR1QsSUFBSSxDQUFDdEYsYUFBYSxDQUFDLGVBQWUsQ0FBQztNQUN0RCxJQUFJK0YsVUFBVSxFQUFFO1FBQ2RBLFVBQVUsQ0FBQ0MsUUFBUSxHQUFHLENBQUNYLG1CQUFtQixDQUFDQyxJQUFJLENBQUM7TUFDbEQ7SUFDRjtJQUVBLFNBQVNXLHVCQUF1QkEsQ0FBQzdHLEtBQUssRUFBRTtNQUN0Q2dHLGNBQWMsQ0FBQ3hGLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQ3FHLEVBQUUsRUFBRVQsQ0FBQyxLQUFLO1FBQ3ZELElBQUlBLENBQUMsS0FBS3JHLEtBQUssRUFBRTtVQUNmOEcsRUFBRSxDQUFDOUYsU0FBUyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzVCLENBQUMsTUFBTTtVQUNMd0YsRUFBRSxDQUFDOUYsU0FBUyxDQUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQy9CO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7SUFFQTZFLFNBQVMsQ0FBQ3RGLE9BQU8sQ0FBQ3lGLElBQUksSUFBSTtNQUN4QixNQUFNUyxVQUFVLEdBQUdULElBQUksQ0FBQ3RGLGFBQWEsQ0FBQyxlQUFlLENBQUM7TUFDdEQsSUFBSStGLFVBQVUsRUFBRTtRQUNkQSxVQUFVLENBQUNyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVXlELENBQUMsRUFBRTtVQUNoRCxNQUFNZ0QsV0FBVyxHQUFHLElBQUksQ0FBQ2pELE9BQU8sQ0FBQyxZQUFZLENBQUM7VUFDOUMsTUFBTWtELFFBQVEsR0FBR0QsV0FBVyxDQUFDbEUsa0JBQWtCO1VBQy9DLElBQUltRSxRQUFRLEVBQUU7WUFDWmpELENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7WUFDbEIrQyxXQUFXLENBQUM1RixLQUFLLENBQUNzQyxPQUFPLEdBQUcsTUFBTTtZQUNsQ3VELFFBQVEsQ0FBQzdGLEtBQUssQ0FBQ3NDLE9BQU8sR0FBRyxPQUFPO1lBQ2hDaUQscUJBQXFCLENBQUNNLFFBQVEsQ0FBQztZQUUvQixNQUFNQyxhQUFhLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDcEIsU0FBUyxDQUFDLENBQUNxQixPQUFPLENBQUNKLFFBQVEsQ0FBQztZQUM3REgsdUJBQXVCLENBQUNJLGFBQWEsQ0FBQztZQUN0QyxJQUFJQSxhQUFhLEtBQUtsQixTQUFTLENBQUNGLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDMUNHLGNBQWMsQ0FBQzdFLEtBQUssQ0FBQ3NDLE9BQU8sR0FBRyxNQUFNO1lBQ3ZDO1VBQ0Y7UUFDRixDQUFDLENBQUM7TUFDSjtJQUNGLENBQUMsQ0FBQztJQUVGdUMsY0FBYyxDQUFDMUYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVV5RCxDQUFDLEVBQUU7TUFDcERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBSUQsQ0FBQyxDQUFDRSxNQUFNLENBQUNvRCxPQUFPLEtBQUssR0FBRyxFQUFFO1FBQzVCLE1BQU1DLGVBQWUsR0FBR0MsUUFBUSxDQUFDeEQsQ0FBQyxDQUFDRSxNQUFNLENBQUNxQixXQUFXLENBQUMsR0FBRyxDQUFDO1FBQzFELE1BQU1rQyxVQUFVLEdBQUd6QixTQUFTLENBQUN1QixlQUFlLENBQUM7UUFDN0MsSUFBSUUsVUFBVSxJQUFJdkIsbUJBQW1CLENBQUN1QixVQUFVLENBQUMsRUFBRTtVQUFFO1VBQ25EekIsU0FBUyxDQUFDdEYsT0FBTyxDQUFDeUYsSUFBSSxJQUFJQSxJQUFJLENBQUMvRSxLQUFLLENBQUNzQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1VBQ3REK0QsVUFBVSxDQUFDckcsS0FBSyxDQUFDc0MsT0FBTyxHQUFHLE9BQU87VUFDbENpRCxxQkFBcUIsQ0FBQ2MsVUFBVSxDQUFDO1VBRWpDWCx1QkFBdUIsQ0FBQ1MsZUFBZSxDQUFDO1VBQ3hDLElBQUlBLGVBQWUsS0FBS3ZCLFNBQVMsQ0FBQ0YsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1Q0csY0FBYyxDQUFDN0UsS0FBSyxDQUFDc0MsT0FBTyxHQUFHLE1BQU07VUFDdkM7UUFDRjtNQUNGO0lBQ0YsQ0FBQyxDQUFDO0lBRUZzQyxTQUFTLENBQUN0RixPQUFPLENBQUN5RixJQUFJLElBQUk7TUFDeEIsTUFBTXVCLE1BQU0sR0FBR3ZCLElBQUksQ0FBQzFGLGdCQUFnQixDQUFDLHVEQUF1RCxDQUFDO01BQzdGaUgsTUFBTSxDQUFDaEgsT0FBTyxDQUFDNkYsS0FBSyxJQUFJO1FBQ3RCQSxLQUFLLENBQUNoRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtVQUMxQ29HLHFCQUFxQixDQUFDUixJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0FILFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzVFLEtBQUssQ0FBQ3NDLE9BQU8sR0FBRyxPQUFPO0lBQ3BDb0QsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQzFCSCxxQkFBcUIsQ0FBQ1gsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JDO0FBQ0YsQ0FBQyxDQUFDO0FBR0YxRixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDeEQsTUFBTW9ILFdBQVcsR0FBR3JILFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0VBRTdELFNBQVNtSCxlQUFlQSxDQUFDQyxRQUFRLEVBQUU7SUFDakNBLFFBQVEsQ0FBQ25ILE9BQU8sQ0FBQzhCLE9BQU8sSUFBSTtNQUMxQixNQUFNc0YsUUFBUSxHQUFHdEYsT0FBTyxDQUFDL0IsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO01BQ3REcUgsUUFBUSxDQUFDcEgsT0FBTyxDQUFDQyxJQUFJLElBQUk7UUFDdkJBLElBQUksQ0FBQ1MsS0FBSyxDQUFDc0MsT0FBTyxHQUFHLE1BQU07TUFDN0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTcUUsV0FBV0EsQ0FBQ3ZGLE9BQU8sRUFBRXZDLEtBQUssRUFBRTtJQUNuQyxNQUFNNkgsUUFBUSxHQUFHdEYsT0FBTyxDQUFDL0IsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0lBQ3REbUgsZUFBZSxDQUFDLENBQUNwRixPQUFPLENBQUMsQ0FBQztJQUMxQnNGLFFBQVEsQ0FBQzdILEtBQUssQ0FBQyxDQUFDbUIsS0FBSyxDQUFDc0MsT0FBTyxHQUFHLE9BQU87RUFDekM7RUFFQSxTQUFTc0Usa0JBQWtCQSxDQUFDQyxZQUFZLEVBQUVDLE9BQU8sRUFBRTtJQUNqREEsT0FBTyxDQUFDeEgsT0FBTyxDQUFDeUgsTUFBTSxJQUFJO01BQ3hCLElBQUlBLE1BQU0sS0FBS0YsWUFBWSxFQUFFO1FBQzNCRSxNQUFNLENBQUNsSCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDaEMsQ0FBQyxNQUFNO1FBQ0w0RyxNQUFNLENBQUNsSCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbkM7SUFDRixDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVNpSCxjQUFjQSxDQUFDVCxXQUFXLEVBQUU7SUFDbkNBLFdBQVcsQ0FBQ2pILE9BQU8sQ0FBQzhCLE9BQU8sSUFBSTtNQUM3QixNQUFNNkYsVUFBVSxHQUFHN0YsT0FBTyxDQUFDL0IsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7TUFDL0QsTUFBTXFILFFBQVEsR0FBR3RGLE9BQU8sQ0FBQy9CLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztNQUN0RDRILFVBQVUsQ0FBQzNILE9BQU8sQ0FBQyxDQUFDeUgsTUFBTSxFQUFFbEksS0FBSyxLQUFLO1FBQ3BDa0ksTUFBTSxDQUFDNUgsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7VUFDM0N3SCxXQUFXLENBQUN2RixPQUFPLEVBQUV2QyxLQUFLLENBQUM7VUFDM0IrSCxrQkFBa0IsQ0FBQ0csTUFBTSxFQUFFRSxVQUFVLENBQUM7UUFDeEMsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO01BQ0Y7TUFDQU4sV0FBVyxDQUFDdkYsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUN2QndGLGtCQUFrQixDQUFDSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUVBLFVBQVUsQ0FBQztJQUMvQyxDQUFDLENBQUM7RUFDSjtFQUVBRCxjQUFjLENBQUNULFdBQVcsQ0FBQztBQUM3QixDQUFDLENBQUM7Ozs7OztVQ3plRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zb3VyY2UvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHN3aXBlcjEgPSBuZXcgU3dpcGVyKFwiLnRlc3RpbW9uaWFscy1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAzLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi50ZXN0aW1vbmlhbHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAxOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG5cbnZhciBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5jYXNlcy1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzcGFjZUJldHdlZW46IDQwLFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmNhc2VzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5jYXNlcy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLmNhc2VzLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+XCI7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG52YXIgc3dpcGVyNCA9IG5ldyBTd2lwZXIoXCIuY2FzZS1pbm5lci1zbGlkZXJcIiwge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIGVmZmVjdDogXCJmYWRlXCIsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmNhc2UtaW5uZXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQtaW5uZXJcIixcbiAgICBwcmV2RWw6IFwiLmNhc2UtaW5uZXItc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYtaW5uZXJcIixcbiAgfSxcbn0pO1xuXG52YXIgc3dpcGVyMyA9IG5ldyBTd2lwZXIoXCIuc3RhZmYtc2xpZGVyXCIsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgc3BhY2VCZXR3ZWVuOiA0MCxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuc3RhZmYtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN0YWZmLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAzMjA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDE6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXG4gICAgfSxcbiAgfVxufSk7XG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWl0ZW0nKTtcblxuICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcbiAgICBhY2NvcmRpb25JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKTtcblxuICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjaGlsZC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWl0ZW0tY29udGVudCcpLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBjb2xsYXBzZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhc2UtaW5mby1pdGVtJyk7XG5cbiAgaWYgKGNvbGxhcHNlSXRlbXMpIHtcbiAgICBjb2xsYXBzZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCB0cmlnZ2VyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FzZS1pbmZvLWhlYWRlcicpO1xuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1jb250ZW50Jyk7XG5cbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FzZS1pbmZvLWl0ZW0nKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmNhc2UtaW5mby1jb250ZW50Jykuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcicpO1xuXG4gIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICBmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihvdGhlckZpbHRlcikge1xuICAgICAgICBpZiAob3RoZXJGaWx0ZXIgIT09IGZpbHRlcikge1xuICAgICAgICAgIG90aGVyRmlsdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZpbHRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBpZiAoc2Nyb2xsVG9wID4gMCkge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDApIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsZWQnKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bk1lbnVNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUtYnRuJyk7XG4gIGNvbnN0IGhlYWRlck1vYmlsZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJvdHRvbScpO1xuICBjb25zdCBidG5DbG9zZU1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWNsb3NlLW1vYmlsZS1tZW51Jyk7XG5cbiAgYnRuTWVudU1vYmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBoZWFkZXJNb2JpbGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgYnRuQ2xvc2VNb2JpbGVNZW51LmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoZWFkZXJNb2JpbGVXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBkaWFncmFtV3JhcHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlhZ3JhbS13cmFwcGVyJyk7XG5cbiAgZGlhZ3JhbVdyYXBwZXJzLmZvckVhY2god3JhcHBlciA9PiB7XG4gICAgY29uc3QgYmFycyA9IHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLmJhcicpO1xuICAgIGxldCBtYXhWYWx1ZSA9IDA7XG5cbiAgICBiYXJzLmZvckVhY2goYmFyID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICAgIGlmICh2YWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgICAgIG1heFZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBiYXJzLmZvckVhY2goYmFyID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9ICh2YWx1ZSAvIG1heFZhbHVlKSAqIDEwMDtcbiAgICAgIGJhci5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAnJSc7XG4gICAgICBiYXIubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIHZhciBtb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi1tb2RhbC1kaWFsb2cnKSxcbiAgICBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgIGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWNsb3NlJyk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsQnRuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIG1vZGFsSWQgPSBtb2RhbEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyksXG4gICAgICAgIG1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cuJyArIG1vZGFsSWQpO1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICBtb2RhbEVsZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbW9kYWxFbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW5pbmcnKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjbG9zZU1vZGFsKGNsb3NlQnRuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdmFyIG1vZGFsID0gY2xvc2VCdG4uY2xvc2VzdCgnLm1vZGFsLWRpYWxvZycpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2xvc2luZycpO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1jbG9zaW5nJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCA1MDApOyAvLyDQlNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LDQvdC40LzQsNGG0LjQuCBmYWRlT3V0XG4gICAgfSk7XG4gIH1cblxuICAvKiBvcGVuIG1vZGFsICovXG4gIG1vZGFsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1vZGFsQnRuKSB7XG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhd2FpdCBvcGVuTW9kYWwobW9kYWxCdG4pO1xuICAgIH0pO1xuICB9KTtcblxuICAvKiBjbG9zZSBtb2RhbCAqL1xuICBjbG9zZUJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbihjbG9zZUJ0bikge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgYXdhaXQgY2xvc2VNb2RhbChjbG9zZUJ0bik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cnKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgY2xvc2VNb2RhbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWRpYWxvZycpLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jbG9zZScpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlmcmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgICAgIGlmIChpZnJhbWUpIHtcbiAgICAgICAgICAvLyDQntGB0YLQsNC90L7QstC60LAg0LLQuNC00LXQviDQv9GA0Lgg0LfQsNC60YDRi9GC0LjQuCDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxuICAgICAgICAgIHZhciB2aWRlb1NyYyA9IGlmcmFtZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcnKTtcbiAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB2aWRlb1NyYyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuaW5nJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSk7XG5cbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgdmFyIHVwbG9hZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWQtYnV0dG9uJyk7XG4gIHZhciBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtdXBsb2FkLW1lc3NhZ2UnKTtcblxuICBpZiAodXBsb2FkQnV0dG9uKSB7XG4gICAgdXBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xuICAgICAgdmFyIGZpbGUgPSBmaWxlSW5wdXQuZmlsZXNbMF07XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignUE9TVCcsICfQstCw0Yhf0LDQtNGA0LXRgV/RgdC10YDQstC10YDQsC/QvtCx0YDQsNCx0L7RgtGH0LjQul/Qt9Cw0L/RgNC+0YHQvtCyLnBocCcsIHRydWUpO1xuXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YTQsNC50LvQsC4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgIH0pO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBpZiAodHlwZW9mIElNYXNrICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LnBob25lJyk7XG4gICAgbGV0IG1hc2tPcHRpb25zID0ge1xuICAgICAgbWFzazogJyt7N30oMDAwKTAwMC0wMC0wMCdcbiAgICB9O1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBJTWFzayhlbGVtZW50LCBtYXNrT3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgZm9ybVN0ZXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tc3RlcCcpO1xuICBjb25zdCBmb3JtUGFnaW5hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXBhZ2luYXRpb24nKTtcblxuICAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0LLRgdC10YUg0Y3Qu9C10LzQtdC90YLQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtVxuICBpZiAoZm9ybVN0ZXBzLmxlbmd0aCA+IDAgJiYgZm9ybVBhZ2luYXRpb24pIHtcbiAgICAvLyDQldGB0LvQuCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQv9GA0LjRgdGD0YLRgdGC0LLRg9GO0YIsINC00L7QsdCw0LLQu9GP0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGB0L7QsdGL0YLQuNC5INC4INC00YDRg9Cz0YPRjiDQu9C+0LPQuNC60YNcbiAgICBmdW5jdGlvbiBjaGVja1JlcXVpcmVkRmllbGRzKHN0ZXApIHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkSW5wdXRzID0gc3RlcC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtyZXF1aXJlZF0sIHRleHRhcmVhW3JlcXVpcmVkXSwgc2VsZWN0W3JlcXVpcmVkXScpO1xuICAgICAgbGV0IGNoZWNrQm94Q2hlY2tlZCA9IGZhbHNlOyAvLyDQpNC70LDQsyDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDRh9C10LrQsdC+0LrRgdC+0LJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVxdWlyZWRJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSByZXF1aXJlZElucHV0c1tpXTtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hlY2tCb3hDaGVja2VkID0gdHJ1ZTsgLy8g0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0YTQu9Cw0LMg0LIgdHJ1ZSwg0LXRgdC70Lgg0YXQvtGC0Y8g0LHRiyDQvtC00LjQvSDRh9C10LrQsdC+0LrRgSDQstGL0LHRgNCw0L1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vINCX0LDQv9C+0LvQvdC10L3QviDQtNGA0YPQs9C+0LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvtC1INC/0L7Qu9C1XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hlY2tCb3hDaGVja2VkOyAvLyDQktC10YDQvdGD0YLRjCDRgdC+0YHRgtC+0Y/QvdC40LUg0YTQu9Cw0LPQsFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5leHRCdXR0b25TdGF0ZShzdGVwKSB7XG4gICAgICBjb25zdCBuZXh0QnV0dG9uID0gc3RlcC5xdWVyeVNlbGVjdG9yKCcud3BjZjctc3VibWl0Jyk7XG4gICAgICBpZiAobmV4dEJ1dHRvbikge1xuICAgICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gIWNoZWNrUmVxdWlyZWRGaWVsZHMoc3RlcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlUGFnaW5hdGlvbkxpbmsoaW5kZXgpIHtcbiAgICAgIGZvcm1QYWdpbmF0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaCgobGksIGkpID0+IHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcm1TdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IHN0ZXAucXVlcnlTZWxlY3RvcignLndwY2Y3LXN1Ym1pdCcpO1xuICAgICAgaWYgKG5leHRCdXR0b24pIHtcbiAgICAgICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFN0ZXAgPSB0aGlzLmNsb3Nlc3QoJy5mb3JtLXN0ZXAnKTtcbiAgICAgICAgICBjb25zdCBuZXh0U3RlcCA9IGN1cnJlbnRTdGVwLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgICBpZiAobmV4dFN0ZXApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBuZXh0U3RlcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHVwZGF0ZU5leHRCdXR0b25TdGF0ZShuZXh0U3RlcCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRTdGVwSW5kZXggPSBBcnJheS5mcm9tKGZvcm1TdGVwcykuaW5kZXhPZihuZXh0U3RlcCk7XG4gICAgICAgICAgICBzZXRBY3RpdmVQYWdpbmF0aW9uTGluayhuZXh0U3RlcEluZGV4KTtcbiAgICAgICAgICAgIGlmIChuZXh0U3RlcEluZGV4ID09PSBmb3JtU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICBmb3JtUGFnaW5hdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3JtUGFnaW5hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFN0ZXBJbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LnRleHRDb250ZW50KSAtIDE7XG4gICAgICAgIGNvbnN0IHRhcmdldFN0ZXAgPSBmb3JtU3RlcHNbdGFyZ2V0U3RlcEluZGV4XTtcbiAgICAgICAgaWYgKHRhcmdldFN0ZXAgJiYgY2hlY2tSZXF1aXJlZEZpZWxkcyh0YXJnZXRTdGVwKSkgeyAvLyDQlNC+0LHQsNCy0LjQuyDQv9GA0L7QstC10YDQutGDINC90LAg0LfQsNC/0L7Qu9C90LXQvdC90L7RgdGC0Ywg0YLQtdC60YPRidC10LPQviDRiNCw0LPQsFxuICAgICAgICAgIGZvcm1TdGVwcy5mb3JFYWNoKHN0ZXAgPT4gc3RlcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgICAgICAgICB0YXJnZXRTdGVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIHVwZGF0ZU5leHRCdXR0b25TdGF0ZSh0YXJnZXRTdGVwKTtcblxuICAgICAgICAgIHNldEFjdGl2ZVBhZ2luYXRpb25MaW5rKHRhcmdldFN0ZXBJbmRleCk7XG4gICAgICAgICAgaWYgKHRhcmdldFN0ZXBJbmRleCA9PT0gZm9ybVN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGZvcm1QYWdpbmF0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3JtU3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIGNvbnN0IGlucHV0cyA9IHN0ZXAucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbcmVxdWlyZWRdLCB0ZXh0YXJlYVtyZXF1aXJlZF0sIHNlbGVjdFtyZXF1aXJlZF0nKTtcbiAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdXBkYXRlTmV4dEJ1dHRvblN0YXRlKHN0ZXApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y86INC/0L7QutCw0LfRi9Cy0LDQtdC8INC/0LXRgNCy0YvQuSDRiNCw0LNcbiAgICBmb3JtU3RlcHNbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgc2V0QWN0aXZlUGFnaW5hdGlvbkxpbmsoMCk7XG4gICAgdXBkYXRlTmV4dEJ1dHRvblN0YXRlKGZvcm1TdGVwc1swXSk7XG4gIH1cbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRhYldyYXBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi13cmFwcGVyJyk7XG5cbiAgZnVuY3Rpb24gaGlkZUFsbFRhYkl0ZW1zKHdyYXBwZXJzKSB7XG4gICAgd3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+IHtcbiAgICAgIGNvbnN0IHRhYkl0ZW1zID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWl0ZW0nKTtcbiAgICAgIHRhYkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1RhYkl0ZW0od3JhcHBlciwgaW5kZXgpIHtcbiAgICBjb25zdCB0YWJJdGVtcyA9IHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1pdGVtJyk7XG4gICAgaGlkZUFsbFRhYkl0ZW1zKFt3cmFwcGVyXSk7XG4gICAgdGFiSXRlbXNbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlVGFiQnV0dG9uKGFjdGl2ZUJ1dHRvbiwgYnV0dG9ucykge1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgaWYgKGJ1dHRvbiA9PT0gYWN0aXZlQnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVUYWJzKHRhYldyYXBwZXJzKSB7XG4gICAgdGFiV3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+IHtcbiAgICAgIGNvbnN0IHRhYkJ1dHRvbnMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN1bHRzLXRhYi1idG4nKTtcbiAgICAgIGNvbnN0IHRhYkl0ZW1zID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWl0ZW0nKTtcbiAgICAgIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2hvd1RhYkl0ZW0od3JhcHBlciwgaW5kZXgpO1xuICAgICAgICAgIHNldEFjdGl2ZVRhYkJ1dHRvbihidXR0b24sIHRhYkJ1dHRvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8g0J/QvtC60LDQt9GL0LLQsNC10Lwg0L/QtdGA0LLRi9C5INGC0LDQsSDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXG4gICAgICBzaG93VGFiSXRlbSh3cmFwcGVyLCAwKTtcbiAgICAgIHNldEFjdGl2ZVRhYkJ1dHRvbih0YWJCdXR0b25zWzBdLCB0YWJCdXR0b25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVUYWJzKHRhYldyYXBwZXJzKTtcbn0pO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyDQrdGC0L4gLSDQstCw0YjQsCDRgtC+0YfQutCwINCy0YXQvtC00LAg0LTQu9GPINGB0LrRgNC40L/RgtC+0LIg0YHRgtGA0LDQvdC40YbRiy4g0JjQvNC/0L7RgNGC0LjRgNGD0LnRgtC1INGB0Y7QtNCwINC90YPQttC90YvQtSDQstCw0Lwg0YTQsNC50LvRiy5cblxuaW1wb3J0ICcuL3NjcmlwdCc7XG4iXSwibmFtZXMiOlsic3dpcGVyMSIsIlN3aXBlciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJvYnNlcnZlU2xpZGVDaGlsZHJlbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwic3dpcGVyMiIsImFsbG93VG91Y2hNb3ZlIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJzd2lwZXI0IiwiZWZmZWN0Iiwic3dpcGVyMyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjY29yZGlvbkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwidHJpZ2dlciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic3R5bGUiLCJoZWlnaHQiLCJjaGlsZCIsImFkZCIsInNjcm9sbEhlaWdodCIsImNvbGxhcHNlSXRlbXMiLCJmaWx0ZXJzIiwiZmlsdGVyIiwib3RoZXJGaWx0ZXIiLCJoZWFkZXIiLCJ3aW5kb3ciLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsImJ0bk1lbnVNb2JpbGUiLCJoZWFkZXJNb2JpbGVXcmFwcGVyIiwiYnRuQ2xvc2VNb2JpbGVNZW51IiwiYnRuIiwib25sb2FkIiwiZGlhZ3JhbVdyYXBwZXJzIiwid3JhcHBlciIsImJhcnMiLCJtYXhWYWx1ZSIsImJhciIsInZhbHVlIiwicGFyc2VGbG9hdCIsIm5leHRFbGVtZW50U2libGluZyIsImdldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsIm1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbnMiLCJvcGVuTW9kYWwiLCJtb2RhbEJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwibW9kYWxJZCIsIm1vZGFsRWxlbSIsImRpc3BsYXkiLCJzZXRUaW1lb3V0IiwiY2xvc2VNb2RhbCIsImNsb3NlQnRuIiwibW9kYWwiLCJjbG9zZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImlmcmFtZSIsInZpZGVvU3JjIiwic2V0QXR0cmlidXRlIiwidXBsb2FkQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlIiwiZXZlbnQiLCJmaWxlSW5wdXQiLCJmaWxlIiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInRleHRDb250ZW50IiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsIklNYXNrIiwiZWxlbWVudHMiLCJtYXNrT3B0aW9ucyIsIm1hc2siLCJsZW5ndGgiLCJlbGVtZW50IiwiZm9ybVN0ZXBzIiwiZm9ybVBhZ2luYXRpb24iLCJjaGVja1JlcXVpcmVkRmllbGRzIiwic3RlcCIsInJlcXVpcmVkSW5wdXRzIiwiY2hlY2tCb3hDaGVja2VkIiwiaSIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJ0cmltIiwidXBkYXRlTmV4dEJ1dHRvblN0YXRlIiwibmV4dEJ1dHRvbiIsImRpc2FibGVkIiwic2V0QWN0aXZlUGFnaW5hdGlvbkxpbmsiLCJsaSIsImN1cnJlbnRTdGVwIiwibmV4dFN0ZXAiLCJuZXh0U3RlcEluZGV4IiwiQXJyYXkiLCJmcm9tIiwiaW5kZXhPZiIsInRhZ05hbWUiLCJ0YXJnZXRTdGVwSW5kZXgiLCJwYXJzZUludCIsInRhcmdldFN0ZXAiLCJpbnB1dHMiLCJ0YWJXcmFwcGVycyIsImhpZGVBbGxUYWJJdGVtcyIsIndyYXBwZXJzIiwidGFiSXRlbXMiLCJzaG93VGFiSXRlbSIsInNldEFjdGl2ZVRhYkJ1dHRvbiIsImFjdGl2ZUJ1dHRvbiIsImJ1dHRvbnMiLCJidXR0b24iLCJpbml0aWFsaXplVGFicyIsInRhYkJ1dHRvbnMiXSwic291cmNlUm9vdCI6IiJ9