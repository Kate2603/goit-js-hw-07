import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const insertGalleryItems = (string) => {
    gallery.insertAdjacentHTML("beforeend", string);
};

insertGalleryItems(createGalleryItems(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
});

function createGalleryItems(items) {
    return items.map((item) =>
        `<a class="gallery__item" href=${item.original}>
        <img class="gallery__image" src=${item.preview} alt=${item.description} />
        </a>
    `).join("");
}

console.log(galleryItems);