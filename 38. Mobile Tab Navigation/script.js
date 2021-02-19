const screens = document.querySelectorAll('img.screen');
const buttons = document.querySelectorAll('li');

let active = 0;

buttons.forEach(button => {
    button.addEventListener('click', changeScreen.bind(button));
})

function changeScreen() {
    buttons.forEach((button, index) => {
        if (button === this) changeActive(index);
        return;
    })
}

function changeActive(index) {
    screens[active].classList.remove('active');
    screens[index].classList.add('active');
    buttons[active].classList.remove('active');
    buttons[index].classList.add('active');
    active = index;
}