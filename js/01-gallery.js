import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGalleryRef = document.querySelector('.gallery');

divGalleryRef.addEventListener('click', onImgClick)

const galleryLayout = createGallerySet(galleryItems);

divGalleryRef.insertAdjacentHTML('beforeend', galleryLayout)
    
function createGallerySet(gallery) {
    return galleryItems
        .map(({ preview, original, description }) =>  
            `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>`)
        .join('')
}

function onImgClick(event) { 
    event.preventDefault();
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.sourse}">
    `)
    instance.show()
}