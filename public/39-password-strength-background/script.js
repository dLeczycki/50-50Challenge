const background = document.querySelector('div.background');
const password = document.querySelector('input#password');

const maxBlur = 10;

password.addEventListener('input', () => {
    let value = maxBlur - password.value.length;
    if (value < 0) value = 0;
    background.setAttribute('style', `filter: blur(${value}px)`);
})