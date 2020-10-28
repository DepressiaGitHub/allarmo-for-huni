import './popUp.scss';

const summonPopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`).content.cloneNode(true);
  const body = document.querySelector('body');

  body.append(templateContent);

  if (fixer === true) {
    body.classList.add('popUp__body-fixer');
  }

  const popup = document.querySelector('.popUp');
  const close = popup.querySelector('.popUp__close');

  if (close) {
    close.addEventListener('click', () => {
      popup.remove();
      body.classList.remove('popUp__body-fixer');
    }, { once: true });
  }

  // if (form !== undefined) {
  //   applyValidation(form);
  // }
};

const removePopUp = (template, fixer) => {
  const templateContent = document.querySelector(`${template}`);
  const body = document.querySelector('body');

  if (fixer === true) {
    body.classList.remove('popUp__body-fixer');
  }

  templateContent.remove();
};

export { summonPopUp, removePopUp };
