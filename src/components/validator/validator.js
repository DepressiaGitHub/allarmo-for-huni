import './validator.scss';

import Inputmask from 'inputmask';
import Bouncer from 'formbouncerjs';


const maska = new Inputmask('+7 [(999) 999-99-99]', {
  // autoUnmask: true,
  // clearMaskOnLostFocus: false,
});

const phones = document.querySelectorAll('.mask');

phones.forEach((phone) => {
  maska.mask(phone);

  phone.addEventListener('paste', (evt) => {
    evt.preventDefault();
    const initialValue = (evt.clipboardData || window.clipboardData).getData('text');
    let serializedValue = initialValue.replace(/[^-0-9]/gim, '');

    if (Number(serializedValue.charAt(0)) === 7) {
      serializedValue = serializedValue.slice(1);
    } else if (Number(serializedValue.charAt(0)) === 8) {
      serializedValue = serializedValue.slice(1);
    }
    phone.value = Number(serializedValue);
 });
});

const onlyLettersSpaceDashNolint = /^[^s]+[a-zA-ZА-Яа-яЁё-]+( [a-zA-ZА-Яа-яЁё]+)*[^s]+$/;
const doNotAllowEmptySpacesNolint = /^[^s]+[a-zA-ZА-Яа-яЁё0-9-!$%^&amp;*()_+|~=`{}[:;&lt;&gt;?,.@#№'&quot;]+( [a-zA-ZА-Яа-яЁё0-9-!$%^&amp;*()_+|~=`{}[:;&lt;&gt;?,.@#№'&quot;]+)*[^s]$/;


const validate = (form) => {
  const validatorNolint = new Bouncer(form, {
    fieldClass: 'validator__input--error',
    errorClass: 'validator__error',
    disableSubmit: true,
    emitEvents: true,
    messages: {
      missingValue: {
        default: 'Необходимо заполнить',
      },
      patternMismatch: {
        email: 'Введите корректный e-mail',
        url: 'Начинается с http://',
      },
      wrongLength: {
        over: 'Максимум 32 символа',
        under: 'Минимум 6 символов',
      },
      outOfRange: {
        over: 'Очень много',
        under: 'Очень мало',
      },
    },
  });
};

validate('.validator');

export default validate;
