import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { searchImg, perPage } from './fetchPic';
import { renderGallary } from './render';

Notify.init({
  position: 'center-top',
  distance: '50px',
});

const gallaryEl = document.querySelector('.gallary');
const formEl = document.querySelector('.search-form');
const btnLoadMoreEl = document.querySelector('.load-more');
let page = 1;
let searchValue = '';

formEl.addEventListener('submit', onSubmit);
btnLoadMoreEl.addEventListener('click', onClick);

function onClick() {
  page += 1;
  searchImg(searchValue, page).then(data => {
    // console.log(123);
    gallaryEl.insertAdjacentHTML('beforeend', renderGallary(data));
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  searchValue = evt.target.searchQuery.value.trim();
  if (!searchValue) {
    Notify.info('Please enter a request');
    formEl.reset();
    return;
  }
  console.log(searchValue);
  gallaryEl.innerHTML = '';
  page = 1;
  searchImg(searchValue, page)
    .then(data => {
      gallaryEl.insertAdjacentHTML('beforeend', renderGallary(data));
      if (!data.hits.length) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        if (btnLoadMoreEl.classList.contains('show')) {
          btnLoadMoreEl.classList.remove('show');
        }
      } else {
        if (!btnLoadMoreEl.classList.contains('show')) {
          btnLoadMoreEl.classList.add('show');
        }
      }
    })
    .catch(error => Notify.failure(error));
}
