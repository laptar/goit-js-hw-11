const BASE_URL = 'https://pixabay.com/api/';
const apiKey = 'key=28350803-646ac60833af8cee69618d9eb';
const imgType = 'image_type=photo';
const orientation = 'orientation=horizontal';
const safesearch = 'safesearch=true';
const perPage = '199';

function searchImg(searchTxt, page) {
  return fetch(
    `${BASE_URL}?${apiKey}&q=${searchTxt}&${imgType}&${orientation}&${safesearch}&page=${page}&per_page=${per_page}`
  )
    .then(res => {
      // console.log(res);
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then(data => data);
}
export { searchImg, perPage };
