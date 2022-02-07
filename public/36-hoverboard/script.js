const squares = document.querySelectorAll('div.square');
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

squares.forEach(square => square.addEventListener('mouseover', e => turnOn(e.target)));
squares.forEach(square => square.addEventListener('mouseout', e => turnOff(e.target)));

function turnOn(square) {
    square.classList.remove('off');
    const color = drawColor();
    setColor(square, color);
}

function turnOff(square) {
    square.classList.add('off');
    setColor(square);
}

function drawColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(square, color = '#222') {
    square.style.backgroundColor = color;
    color == '#222' ? square.style.boxShadow = '0 0 0 rgba(0,0,0,0)' : square.style.boxShadow = `0 0 5px ${color}`;
}