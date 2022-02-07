const text = document.querySelector('div.text');
const speedInput = document.querySelector('input');

const message = "We Love Programming!"
const speedMin = 500;
let speed;


setText = () => {
    const textLength = text.textContent.length;
    if (textLength == message.length) text.textContent = '';
    else text.textContent = message.slice(0, textLength + 1);

    setTimeout(setText, speed);
}

setSpeed = () => speed = speedMin / speedInput.value;


speedInput.addEventListener('change', setSpeed);

setSpeed();
setText();