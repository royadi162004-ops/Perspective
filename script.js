// ========================================
// PERSPECTIVE PHOTO GALLERY
// ========================================

const galleries = {
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


// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");


// Find gallery elements
const gallery = document.getElementById("gallery");
const title = document.getElementById("gallery-title");
const description = document.getElementById("gallery-description");


// Load the selected category
function loadGallery() {

    if (!gallery || !category) {
        return;
    }

    const data = galleries[category];

    if (!data) {
        gallery.innerHTML = "<p>Category not found.</p>";
        return;
    }


    // Page heading
    title.textContent = data.title;

    description.textContent = data.description;


    // Create photographs
    for (let i = 1; i <= data.count; i++) {

        const image = document.createElement("img");

        image.src =
            `image/${category}/${category}${i}.jpg`;

        image.alt =
            `${data.title} photograph ${i}`;

        image.loading = "lazy";


        // Create photo container
        const photo = document.createElement("div");

        photo.className = "gallery-photo";

        photo.appendChild(image);


        // Open image in lightbox
        photo.addEventListener("click", function () {

            openLightbox(image.src);

        });


        gallery.appendChild(photo);
    }
}


// ========================================
// LIGHTBOX
// ========================================

function openLightbox(imageSrc) {

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightbox-image");


    lightboxImage.src = imageSrc;

    lightbox.classList.add("active");
}


function closeLightbox() {

    const lightbox =
        document.getElementById("lightbox");

    lightbox.classList.remove("active");
}


// Close lightbox with Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


// Start
document.addEventListener("DOMContentLoaded", function() {

    loadGallery();

});
