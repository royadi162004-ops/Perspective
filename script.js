const images = {
    nature: 8,
    people: 5,
    architecture: 8,
    street: 4,
    culture: 3,
    abstract: 5
};

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const gallery = document.getElementById("gallery");

if (gallery && images[category]) {
    for (let i = 1; i <= images[category]; i++) {

        const card = document.createElement("div");
        card.className = "gallery-item";

        const img = document.createElement("img");

        img.src = `image/${category}/${category}${i}.jpg`;
        img.alt = `${category} photograph ${i}`;

        card.appendChild(img);
        gallery.appendChild(card);
    }
}
