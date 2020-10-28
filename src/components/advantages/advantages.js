import './advantages.scss';

// Находим кнопку отправки формы и ставим :disabled
const form = document.querySelector('.advantages__form');
const checkAccept = form.querySelector('#accept-info');
const buttonForm = form.querySelector('.advantages__button');

buttonForm.disabled = true;

// Если чекбок выбран, снимаем disabled
checkAccept.onchange = function switcher() {
  if (checkAccept.checked) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
};
