// ========================================
// PERSPECTIVE - GALLERY SYSTEM
// ========================================

const galleryData = {
    nature: {
        count: 8,
        title: "Nature",
        description: "Life beyond the concrete."
    },

    people: {
        count: 5,
        title: "People",
        description: "Faces, emotions and stories."
    },

    architecture: {
        count: 8,
        title: "Architecture",
        description: "Structures shaped by perspective."
    },

    street: {
        count: 4,
        title: "Street",
        description: "Life as it happens."
    },

    culture: {
        count: 3,
        title: "Culture",
        description: "Traditions, places and people."
    },

    abstract: {
        count: 5,
        title: "Abstract",
        description: "When reality becomes interpretation."
    }
};


// ========================================
// GET CATEGORY FROM URL
// ========================================

const urlParams = new URLSearchParams(window.location.search);

const category = urlParams.get("category");


// ========================================
// LOAD GALLERY
// ========================================

function loadGallery() {

    const gallery = document.getElementById("gallery");

    if (!gallery || !category) {
        return;
    }

    const data = galleryData[category];

    if (!data) {
        gallery.innerHTML = "<p>Category not found.</p>";
        return;
    }


    // Update page title

    const title = document.getElementById("gallery-title");

    if (title) {
        title.textContent = data.title;
    }


    // Update description

    const description =
        document.getElementById("gallery-description");

    if (description) {
        description.textContent = data.description;
    }


    // Create photographs

    for (let i = 1; i <= data.count; i++) {

        const imagePath =
            `images/${category}/${category}(${i}).jpg`;


        const photoCard =
            document.createElement("div");

        photoCard.className = "gallery-photo";


        photoCard.innerHTML = `
            <img
                src="${imagePath}"
                alt="${data.title} photograph ${i}"
                loading="lazy"
            >
        `;


        // Open photograph

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

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("lightbox-image");


    if (!lightbox || !image) {
        return;
    }


    image.src = imagePath;

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
// ESC KEY
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


// ========================================
// START GALLERY
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    loadGallery();

});
