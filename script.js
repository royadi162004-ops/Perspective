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

        const categoryName = [...this.classList].find(
            name => galleries[name]
        );

        if (!categoryName) return;

        const count = galleries[categoryName];

        let galleryHTML = `
            <section class="gallery-page">
                <h1>${categoryName}</h1>
                <div class="gallery-grid">
        `;

        for (let i = 1; i <= count; i++) {

            galleryHTML += `
                <div class="gallery-item">
                    <img 
                        src="image/${categoryName}/${categoryName}${i}.jpg"
                        alt="${categoryName} photograph ${i}"
                    >
                </div>
            `;
        }

        galleryHTML += `
                </div>
            </section>
        `;

        document.body.innerHTML = galleryHTML;
    });

});
