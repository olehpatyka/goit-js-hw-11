import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
formElem.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  showLoader();
  clearGallery();

  const formData = new FormData(e.target);
  const data = {
    searchText: formData.get('search-text'),
  };

  getImagesByQuery({
    key: '58348296-09295ab4c2033fd1acf2ac2b8',
    q: data.searchText,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  })
    .then(response => {
      const data = response.data;
      const hits = data.hits;

      if (!hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomCenter',
        });
        return;
      }
      createGallery(hits);
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: err,
        position: 'bottomCenter',
      });

      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
}
