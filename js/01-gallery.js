import { galleryItems } from './gallery-items.js';
// Change code below this line

let modal;

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
    if (!event.target.classList.contains('gallery__image')) { 
        return;
    }
    modal = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `)
    modal.show();

    onOpenModal();
}

function onEscModalClose(event) { 
    if (event.key === 'Escape') { 
        modal.close()
    }
    console.log(event)
    onCloseModal()
} 

function onOpenModal() { 
    window.addEventListener('keydown', onEscModalClose)
}

function onCloseModal() { 
    window.removeEventListener('keydown', onEscModalClose)
}