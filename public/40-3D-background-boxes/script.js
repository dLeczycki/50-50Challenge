const container = document.querySelector('div.container');
const button = document.querySelector('button');

loadBoxes();

button.addEventListener('click', transform);

function loadBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            container.appendChild(box);
        }
    }
}

function transform() {
    container.classList.toggle('transform');
}