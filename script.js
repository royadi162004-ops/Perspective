// ======================================
// PERSPECTIVE
// Gallery Category Filter
// ======================================

const filters = document.querySelectorAll(".filter");
const photos = document.querySelectorAll(".photo");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active class
        filters.forEach(button => {
            button.classList.remove("active");
        });

        // Add active class
        filter.classList.add("active");

        const selectedCategory = filter.dataset.filter;

        photos.forEach(photo => {

            if (
                selectedCategory === "all" ||
                photo.classList.contains(selectedCategory)
            ) {
                photo.classList.remove("hidden");
            } else {
                photo.classList.add("hidden");
            }

        });

    });

});
