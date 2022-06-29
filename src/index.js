import Notiflix from 'notiflix';
import { searchImg } from './fetchPic';
import { renderGallary } from './render';

const formEl = document.querySelector('.search-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  console.log(evt.target.searchQuery.value);
  searchImg(evt.target.searchQuery.value).then(data => renderGallary(data));
}
