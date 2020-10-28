// вызов окна для входа пользовтаеля
const loginButton = document.querySelector('.main-header__link');
const body = document.querySelector('body');
const loginTemplate = document.querySelector('#log-in')
  .content
  .querySelector('.modal');

const renderLoginTemplate = () => {
  const newLogin = loginTemplate.cloneNode(true);
  newLogin.classList.add('modal--show');
  return newLogin;
};

const fragment = document.querySelector('body');
const newDiv = document.createElement('div');
let modal;
let closeModal;
let okModal;


const getRemoveModal = () => {
  modal.remove();
  body.removeChild(newDiv);
  body.classList.remove('no-scroll');
  document.removeEventListener('keydown', closeModalOnEsc);
};

const getAddModal = () => {
  body.classList.add('no-scroll');
  body.appendChild(newDiv).classList.add('display-faded');
  document.addEventListener('keydown', closeModalOnEsc);
};

const modalCloseWithDelay = function () {
  modal.classList.add('modal--close');
  setTimeout(getRemoveModal, 600);
};

function closeModalOnEsc(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalCloseWithDelay();
  }
}

const showLoginModal = () => {
  fragment.appendChild(renderLoginTemplate());

  const loginForm = document.querySelector('.login-form');
  const input = document.querySelector('#user-login');

  modal = document.querySelector('.modal');
  closeModal = document.querySelector('.modal__close');

  getAddModal();
  input.focus();

  closeModal.onclick = () => {
    modalCloseWithDelay();
  };

  newDiv.onclick = () => {
    modalCloseWithDelay();
  };
};

// клик по кнопке "Войти" и отрисовка окна для ввода логина и пароля
loginButton.onclick = (evt) => {
  evt.preventDefault();
  modal = document.querySelector('.modal');

  if (!modal) {
    showLoginModal();
    const loginForm = document.querySelector('.login-form');
    window.test.validate('.login-form');

    loginForm.addEventListener('bouncerFormValid', function (evt) {
      modalCloseWithDelay();
    });
  }
};


// форма и окно для успешной регистрации
const registrationForm = document.querySelector('.registration-form');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.modal');

const renderTemplate = () => {
  const newModal = successTemplate.cloneNode(true);
  newModal.classList.add('modal--show');

  return newModal;
};

const showSuccessModal = () => {
  fragment.appendChild(renderTemplate());
  okModal = document.querySelector('.modal__button--ok');

  modal = document.querySelector('.modal');
  closeModal = document.querySelector('.modal__close');


  getAddModal();
  okModal.focus();

  newDiv.onclick = () => {
    modalCloseWithDelay();
  };

  closeModal.onclick = () => {
    modalCloseWithDelay();
  };

  okModal.onclick = () => {
    modalCloseWithDelay();
  };
};


registrationForm.addEventListener('bouncerFormValid', (evt) => {
  const modal = document.querySelector('.modal');

  if (!modal) {
    showSuccessModal();
  }
});

export {
  showLoginModal,
  showSuccessModal,
};
