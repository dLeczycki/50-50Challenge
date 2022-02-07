const API = 'https://picsum.photos/300/300';
const container = document.querySelector('div.container');
const elementsCount = 32;

fetchImages();

async function fetchImages() {
    for (let i = 0; i < elementsCount; i++) {
        const image = document.createElement('div');
        image.style.backgroundImage = `url(${await fetch(API).then(res => res.url)})`;
        container.appendChild(image);
    }
}