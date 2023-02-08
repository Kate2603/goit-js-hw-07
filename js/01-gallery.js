import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const insertGalleryItems = (string) => {
    gallery.insertAdjacentHTML("beforeend", string);
};
insertGalleryItems(createGalleryItems(galleryItems));

gallery.addEventListener("click", onGalleryClick);

function createGalleryItems(items) {
    return items.map(item => 
        `<div class="gallery__item">
                <a class="gallery__link" href=${item.original}>
                <img
                    class="gallery__image"
                    src=${item.preview}
                    data-source=${item.original}
                    alt=${item.description}
                /></a>
            </div>`).join("");
}


function onGalleryClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(
        `<img src=${evt.target.dataset.source} width="800" height="600" />`,
    {
        onShow: instance => {
        window.addEventListener('keydown', closeModal);
        },
        onClose: instance => {
        window.removeEventListener('keydown', closeModal);
        },
        });
    
    function closeModal(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
    instance.show();
}