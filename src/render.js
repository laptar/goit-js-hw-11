function renderGallary(data) {
  // console.log(data.hits);
  const contentGallary = data.hits
    .map(
      ({ webformatURL, likes, views, comments, downloads, tags }) =>
        `<div class="photo-card grid-item"><img src="${webformatURL}" alt="${tags}" loading="lazy"/><div class="info"><p class="info-item"><b>Likes&nbsp;</b>${likes}</p><p class="info-item"><b>Views&nbsp;</b>${views}</p><p class="info-item"><b>Comments&nbsp;</b>${comments}</p><p class="info-item"><b>Downloads&nbsp;</b>${downloads}</p></div></div>`
    )
    .join('');
  return contentGallary;
}

export { renderGallary, gallaryEl };
