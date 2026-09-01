// ===============================
// PERSPECTIVE GALLERY
// ===============================

const gallery = document.getElementById("gallery");
const galleryTitle = document.getElementById("gallery-title");
const galleryDescription = document.getElementById("gallery-description");

// Number of photographs in each category
const photoCounts = {
    nature: 8,
    people: 5,
    architecture: 8,
    street: 4,
    culture: 3,
    abstract: 5
};

// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Category information
const categoryInfo = {
    nature: {
        title: "Nature",
        description: "Life beyond the concrete."
    },

    people: {
        title: "People",
        description: "Faces, emotions and stories."
    },

    architecture: {
        title: "Architecture",
        description: "Structures shaped by perspective."
    },

    street: {
        title: "Street",
        description: "Life as it happens."
    },

    culture: {
        title: "Culture",
        description: "Traditions, places and people."
    },

    abstract: {
        title: "Abstract",
        description: "When reality becomes interpretation."
    }
};


// ===============================
// LOAD GALLERY
// ===============================

function loadGallery() {

    if (!category || !photoCounts[category]) {
        galleryTitle.textContent = "Photography";
        galleryDescription.textContent =
            "A collection of moments seen from a different perspective.";
        return;
    }

    // Update heading
    galleryTitle.textContent = categoryInfo[category].title;
    galleryDescription.textContent = categoryInfo[category].description;

    // Clear gallery
    gallery.innerHTML = "";

    // Add photographs
    for (let i = 1; i <= photoCounts[category]; i++) {

        const imagePath =
            `image/${category}/${category}${i}.jpg`;

        const card = document.createElement("div");
        card.className = "gallery-item";

        card.innerHTML = `
            <img
                src="${imagePath}"
                alt="${categoryInfo[category].title} photograph ${i}"
                loading="lazy"
                onclick="openLightbox('${imagePath}')"
            >
        `;

        gallery.appendChild(card);
    }
}


// ===============================
// LIGHTBOX
// ===============================

function openLightbox(imagePath) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = imagePath;

    lightbox.classList.add("active");
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    lightbox.classList.remove("active");
}


// Close lightbox when clicking outside image
document.getElementById("lightbox").addEventListener("click", function(event) {

    if (event.target === this) {
        closeLightbox();
    }

});


// ===============================
// START
// ===============================

loadGallery();
