const numbers = [...document.querySelectorAll('div.numbers *')];
const go = document.querySelector('div.go');
const counter = document.querySelector('div.counter');
const replayBtn = document.querySelector('button');

let counts = numbers.length;

numbers.forEach((number, index) => {
    number.setAttribute('style', `animation-delay: ${index}s`);
    number.classList.add('run-animation');
    number.addEventListener('webkitAnimationEnd', e => start(e));
})

replayBtn.addEventListener('click', replay);

function start(e) {
    e.target.classList.remove('run-animation');
    if (--counts === 0) {
        go.classList.add('show');
        go.classList.remove('hide');
        counter.classList.add('hide');
        counter.classList.remove('show');
    }
}

function replay() {
    counts = numbers.length;
    go.classList.remove('show');
    counter.classList.remove('hide');
    numbers.forEach(number => number.classList.add('run-animation'));
}