import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGalleryRef = document.querySelector('.gallery')



// const instance = basicLightbox.create(`
//    <img src="assets/images/image.png">
// `)

// divGalleryRef.addEventListener('click', instance)
// instance.show()


function createGallerySet() {
    const galleryLayout = galleryItems
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

    divGalleryRef.innerHTML = galleryLayout;
}

createGallerySet()