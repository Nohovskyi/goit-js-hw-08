// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const cardMarkup = createImageCard(galleryItems);

function createImageCard(galleryItems) {
  return galleryItems
    .map(item => {
      return `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
    })
    .join('');
}

gallery.insertAdjacentHTML('beforeend', cardMarkup);
gallery.addEventListener('click', onLinkContainerClick);

let gallerySimple = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

function onLinkContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  gallerySimple;
}
