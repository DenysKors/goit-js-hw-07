import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGalleryRef = document.querySelector('.gallery');

// ulGalleryRef.addEventListener('click', onImgClick)

const galleryLayout = createGallerySet(galleryItems);

ulGalleryRef.insertAdjacentHTML('beforeend', galleryLayout)
    
function createGallerySet(gallery) {
    return galleryItems
        .map(({ preview, original, description }) =>
            `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>`)
        .join('')
}

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
 
// function onImgClick(event) { 
//     event.preventDefault();
//     if (!event.target.classList.contains('gallery__image')) { 
//         return;
//     }
//     let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});
// }