var swiper1 = new Swiper(".testimonials-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".testimonials-slider .swiper-button-next",
    prevEl: ".testimonials-slider .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
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
    prevEl: ".cases-slider .swiper-button-prev",
  },
  pagination: {
    el: ".cases-slider .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
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
    prevEl: ".case-inner-slider .swiper-button-prev-inner",
  },
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
    prevEl: ".staff-slider .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  }
});




document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');

      trigger.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', function() {
  const collapseItems = document.querySelectorAll('.case-info-item');

  if (collapseItems) {
    collapseItems.forEach(item => {
      const trigger = item.querySelector('.case-info-header');
      const content = item.querySelector('.case-info-content');

      trigger.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', function() {
  var filters = document.querySelectorAll('.filter');

  filters.forEach(function(filter) {
    filter.addEventListener('click', function() {
      filters.forEach(function(otherFilter) {
        if (otherFilter !== filter) {
          otherFilter.classList.remove('active');
        }
      });
      filter.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function() {
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

window.onload = function() {
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
      const height = (value / maxValue) * 100;
      bar.style.height = height + '%';
      bar.nextElementSibling.innerText = value;
    });
  });
}


document.addEventListener('DOMContentLoaded', function() {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');

  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';

      setTimeout(function() {
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

      setTimeout(function() {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500); // Длительность анимации fadeOut
    });
  }

  /* open modal */
  modalButtons.forEach(function(modalBtn) {
    modalBtn.addEventListener('click', async function(e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', async function(e) {
      await closeModal(closeBtn);
    });
  });

  document.querySelectorAll('.modal-dialog').forEach(function(item) {
    item.addEventListener('click', async function(e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        await closeModal(this);
      }
    });
  });

  document.querySelectorAll('.modal-dialog').forEach(function(item) {
    item.addEventListener('click', function (e) {
      if(e.target !== e.currentTarget && !e.target.classList.contains('modal-close')) {
        return
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
    })
  });

});


document.addEventListener('DOMContentLoaded', function() {
  var uploadButton = document.getElementById('upload-button');
  var message = document.getElementById('file-upload-message');

  if (uploadButton) {
    uploadButton.addEventListener('click', function(event) {
      var fileInput = document.getElementById('file');
      var file = fileInput.files[0];
      var formData = new FormData();
      formData.append('file', file);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'ваш_адрес_сервера/обработчик_запросов.php', true);

      xhr.onreadystatechange = function() {
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

document.addEventListener('DOMContentLoaded', function() {
  if (typeof IMask !== 'undefined') {
    let elements = document.querySelectorAll('input.phone');
    let maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    if (elements.length > 0) {
      elements.forEach(function(element) {
        let mask = IMask(element, maskOptions);
      });
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {

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
        if (targetStep && checkRequiredFields(targetStep)) { // Добавил проверку на заполненность текущего шага
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


