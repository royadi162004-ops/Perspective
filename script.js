// ========================================
// PERSPECTIVE - PHOTOGRAPHY GALLERY
// ========================================

const galleryData = {
    nature: 8,
    people: 5,
    architecture: 8,
    street: 4,
    culture: 3,
    abstract: 5
};


// ========================================
// CREATE GALLERY
// ========================================

function createGallery(category) {

    const gallery = document.getElementById("gallery");

    if (!gallery) return;

    gallery.innerHTML = "";

    const totalPhotos = galleryData[category];

    if (!totalPhotos) {
        gallery.innerHTML = "<p>No photographs found.</p>";
        return;
    }

    for (let i = 1; i <= totalPhotos; i++) {

        const imagePath =
            `images/${category}/${category}(${i}).jpg`;

        const photoCard = document.createElement("div");

        photoCard.className = "gallery-photo";

        photoCard.innerHTML = `
            <img 
                src="${imagePath}" 
                alt="${category} photograph ${i}"
                loading="lazy"
            >
        `;

        photoCard.addEventListener("click", function () {
            openLightbox(imagePath);
        });

        gallery.appendChild(photoCard);
    }
}


// ========================================
// LIGHTBOX
// ========================================

function openLightbox(imagePath) {

    const lightbox = document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");

    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = imagePath;

    lightbox.classList.add("active");
}


// ========================================
// CLOSE LIGHTBOX
// ========================================

function closeLightbox() {

    const lightbox =
        document.getElementById("lightbox");

    if (lightbox) {
        lightbox.classList.remove("active");
    }
}


// ========================================
// CLOSE WITH ESCAPE KEY
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

});
