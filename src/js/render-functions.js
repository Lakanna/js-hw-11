function createMarkup(arr) {
  return arr
    .map(
      ({
        comments,
        likes,
        downloads,
        views,
        largeImageURL,
        webformatURL,
        tags,
      }) => {
        return `
          <li class="img-container">
             <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" /></a>
             <ul class="tags-list">
               <li>Comments: ${comments}</li>
               <li>Likes: ${likes}</li>
               <li>Views: ${views} </li>
               <li>Downloads: ${downloads}</li>
             </ul>
         </li>`;
      }
    )
    .join('');
}

export default createMarkup;
