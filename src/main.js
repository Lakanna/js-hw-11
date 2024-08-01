import createMarkup from './js/render-functions';
import { fetchImg } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  searchForm: document.querySelector('.js-form'),
  imageList: document.querySelector('.js-list'),
  loader: document.querySelector('.loader'),
};

elements.searchForm.addEventListener('submit', handlerSearch);

function handlerSearch(evn) {
  evn.preventDefault();

  let searchedImg = evn.currentTarget.elements.searchImg.value.trim();

  if (searchedImg === '') {
    iziToast.show({
      message: 'Please, input what are you searching!',
      color: 'red',
      position: 'topCenter',
    });
    return;
  }

  elements.loader.hidden = false;
  console.dir(elements.loader);

  fetchImg(searchedImg)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topCenter',
        });
      }
      elements.imageList.innerHTML = createMarkup(hits);
      let gallery = new SimpleLightbox('.image-list a');
      gallery.refresh();
    })
    .catch(error => console.log(error));

  elements.loader.hidden = true;

  evn.target.reset();
}
