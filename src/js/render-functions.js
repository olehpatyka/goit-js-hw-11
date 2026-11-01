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
  return `<li class="galley-item">
            <a href="${item.largeImageURL}">
                <img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}" title="${item.tags}">
            </a>
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
