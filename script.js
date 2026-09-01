// ===============================
// PERSPECTIVE GALLERY
// ===============================

const gallery = document.getElementById("gallery");
const galleryTitle = document.getElementById("gallery-title");
const galleryDescription = document.getElementById("gallery-description");


// Number of photographs in each category
const categories = {
    nature: 8,
    people: 5,
    architecture: 8,
    street: 4,
    culture: 3,
    abstract: 5
};


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


// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category")?.toLowerCase() || "nature";


// Check if category exists
if (!categories[category]) {

    galleryTitle.textContent = "Photography";
    galleryDescription.textContent =
        "A collection of moments seen from a different perspective.";

} else {

    // Update page heading
    galleryTitle.textContent = categoryInfo[category].title;
    galleryDescription.textContent = categoryInfo[category].description;


    // Create photographs
    for (let i = 1; i <= categories[category]; i++) {

        const image = document.createElement("img");

        image.src = `image/${category}/${category}${i}.jpg`;

        image.alt =
            `${categoryInfo[category].title} photograph ${i}`;

        image.className = "gallery-image";


        // If image cannot be found
        image.onerror = function () {
            console.log("Image not found:", image.src);
            image.style.display = "none";
        };


        // Open image in lightbox
        image.onclick = function () {
            openLightbox(image.src);
        };


        gallery.appendChild(image);
    }
}



// ===============================
// LIGHTBOX
// ===============================

function openLightbox(imageSrc) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = imageSrc;

    lightbox.classList.add("active");
}


function closeLightbox() {

    const lightbox = document.getElementById("lightbox");

    lightbox.classList.remove("active");
}


// Close lightbox when clicking outside image
document.getElementById("lightbox").addEventListener("click", function (event) {

    if (event.target === this) {
        closeLightbox();
    }

});
