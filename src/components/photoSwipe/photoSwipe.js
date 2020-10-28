/* eslint-disable */
const openPhotoSwipe = function (items, number) {
  const pswpElement = document.querySelectorAll('.pswp')[0];

  const options = {
    index: number,
    escKey: false,
    bgOpacity: 0.9,
    closeOnVerticalDrag: false,
  };

  const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
/* eslint-enable */


const createSlide = (array) => {
  const items = [];
  array.forEach((element) => {
    items.push({
      src: element.getAttribute('href'),
      w: parseInt(element.getAttribute('data-width'), 10),
      h: parseInt(element.getAttribute('data-height'), 10),
    });
  });

  return items;
};

const photoSwipe = document.querySelector('#photoSwipe').content.querySelector('.pswp');

const summonPhotoSwipe = () => {
  const body = document.querySelector('body');
  const closeButton = photoSwipe.querySelector('.pswp__button--close');

  body.append(photoSwipe);

  closeButton.addEventListener('click', () => {
    photoSwipe.remove();
  }, { once: true });
};

export { openPhotoSwipe, createSlide, summonPhotoSwipe };
