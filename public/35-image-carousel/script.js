const nextBtn = document.querySelector('button.next');
const prevBtn = document.querySelector('button.prev');
const carousel = document.querySelector('div.image-box');

let translate = 0;

prevBtn.addEventListener('click', setPrevImage);
nextBtn.addEventListener('click', setNextImage);

let interval = setInterval(setNextImage, 3000);

function setNextImage() {
    translate -= carousel.clientWidth;
    if (translate === -carousel.clientWidth * carousel.childElementCount) translate = 0;
    carousel.setAttribute("style", `transform:translate(${translate}px)`);
    clear();
}

function setPrevImage() {
    translate += carousel.clientWidth;
    if (translate > 0) translate = -carousel.clientWidth * (carousel.childElementCount - 1);
    carousel.setAttribute("style", `transform:translate(${translate}px)`);
    clear();
}

function clear() {
    clearInterval(interval);
    interval = setInterval(setNextImage, 3000);
}