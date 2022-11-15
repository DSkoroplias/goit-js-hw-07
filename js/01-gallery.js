import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const instance = basicLightbox.create(`
    <div class="modal">
    <img src="">
    </div>
`);

const refs = {
  gallery: document.querySelector(".gallery"),
  cardsGallery: getItemGallery(galleryItems),
  modalSource: instance.element().querySelector("img"),
};

refs.gallery.insertAdjacentHTML("beforeend", refs.cardsGallery);

function getItemGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join("");
}

function onGalleryClick(evt) {
  evt.preventDefault();
  const іsGalleryEl = evt.target.classList.contains("gallery__image");
  if (!іsGalleryEl) {
    return;
  }
  evt.target.src = evt.target.dataset.source;
  refs.modalSource.src = evt.target.dataset.source;

  document.addEventListener("keydown", instance.close);

  instance.show();
  //   console.log(evt.target.dataset.source);
}

refs.gallery.addEventListener("click", onGalleryClick);
