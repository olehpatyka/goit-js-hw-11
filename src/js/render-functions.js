// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let gallery;

export function createGallery(images) {
  const markup = itemsTemplate(images);
  galleryList.innerHTML = markup;

  gallery = new SimpleLightbox('.gallery a');
  gallery.refresh();
}

function itemTemplate(item) {
  return `<li class="gallery-item">
            <a href="${item.largeImageURL}">
                <img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}" title="${item.tags}">
            </a>
            
            <ul class="info-list">
            <li class="info-data">
                <h3 class="data-title">Likes</h3>
                <p class="data-value">${item.likes}</p>
            </li>
            <li class="info-data">
                <h3 class="data-title">Views</h3>
                <p class="data-value">${item.views}</p>
            </li>
            <li class="info-data">
                <h3 class="data-title">Comments</h3>
                <p class="data-value">${item.comments}</p>
            </li>
            <li class="info-data">
                <h3 class="data-title">Downloads</h3>
                <p class="data-value">${item.downloads}</p>
            </li>
            </ul>

        </li>`;
}
function itemsTemplate(items) {
  return items.map(itemTemplate).join('');
}

export function clearGallery() {
  galleryList.innerHTML = '';
}
export function showLoader() {
  loader.classList.toggle('hidden', false);
}
export function hideLoader() {
  loader.classList.toggle('hidden', true);
}
