import createMarkup from './js/render-functions';

const elements = {
  searchForm: document.querySelector('.js-form'),
  imageList: document.querySelector('.js-list'),
};

elements.searchForm.addEventListener('submit', handlerSearch);
let searchedImg = '';

function handlerSearch(evn) {
  evn.preventDefault();
  searchedImg = evn.currentTarget.elements.searchImg.value.trim();
  if (searchedImg === '') {
    console.log('add value');
    return;
  }
  fetchImg()
    .then(({ hits }) => (elements.imageList.innerHTML = createMarkup(hits)))
    .catch(error => console.log(error));
  console.log('in handler', searchedImg);
}

const API_KEY = '40437222-3b8e1aead0ae08f3118e12752';
const API = 'https://pixabay.com/api/';

const params = new URLSearchParams({
  key: API_KEY,
  q: `${searchedImg}`,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});
console.log('not handler', searchedImg);
const url = `${API}?${params}`;
console.log(url);

function fetchImg() {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
