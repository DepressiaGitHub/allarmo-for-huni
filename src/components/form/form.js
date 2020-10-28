import './form.scss';

// автоматическая высота для textarea
function OnInput() {
  this.style.height = 'auto';
  this.style.height = `${this.scrollHeight}px`;
}

const textareas = document.querySelectorAll('form__textarea');
textareas.forEach((element) => {
  element.setAttribute('style', `height:${element.scrollHeight}px;overflow-y:hidden;`);
  element.addEventListener('input', OnInput);
});
// автоматическая высота для textarea


const getBackForm = (evt) => {
  if (evt.target.classList.contains('form__reset')) {
    const content = evt.currentTarget.querySelector('.form__content');
    const message = evt.currentTarget.querySelector('.form__fail');
    const form = evt.currentTarget.querySelector('form');
    const submitButton = evt.currentTarget.querySelector('button[type="submit"]');

    form.reset();
    submitButton.removeAttribute('disabled');
    content.classList.remove('form__content--hidden');
    message.classList.remove('form__visible');
  }
};

const getFormMessage = (form, bollean) => {
  const template = document.querySelector(form);
  const content = template.querySelector('.form__content');

  content.classList.add('form__content--hidden');
  template.addEventListener('click', getBackForm, { once: true });

  if (bollean === true) {
    const message = template.querySelector('.form__greetings');
    message.classList.add('form__visible');
  } else {
    const message = template.querySelector('.form__fail');
    message.classList.add('form__visible');
  }
};

export {
  getBackForm, getFormMessage,
};
