const galleries = {
    nature: 8,
    people: 5,
    architecture: 8,
    street: 4,
    culture: 3,
    abstract: 5
};

document.querySelectorAll(".category").forEach(category => {

    category.addEventListener("click", function (event) {

        event.preventDefault();

        const categoryName = Object.keys(galleries).find(name =>
            this.classList.contains(name)
        );

        if (!categoryName) return;

        const count = galleries[categoryName];

        let galleryHTML = `
            <div class="gallery-page">
                <h1>${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>

                <div class="gallery-grid">
        `;

        for (let i = 1; i <= count; i++) {

            galleryHTML += `
                <div class="gallery-item">
                    <img 
                        src="./image/${categoryName}/${categoryName}${i}.jpg"
                        alt="${categoryName} photograph ${i}"
                    >
                </div>
            `;
        }

        galleryHTML += `
                </div>
            </div>
        `;

        document.body.innerHTML = galleryHTML;
    });

});
