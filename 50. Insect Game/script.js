const gameBoard = document.querySelector('div.game-board');
const timeSpan = document.querySelector('div.timer span');
const scoreSpan = document.querySelector('div.score span');

let time = 0;
let score = 0;

setInterval(setTime, 1000);
appendInsect();


function setTime() {
    time++;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timeSpan.textContent = (minutes < 10 ? '0' + minutes : minutes) + ':';
    timeSpan.textContent += seconds < 10 ? '0' + seconds : seconds;
}

function appendInsect() {
    const randomTime = getRandomTime();
    setTimeout(() => {
        const newInsect = document.createElement('img');
        newInsect.src = './img/spider.png'

        newInsect.classList.add('insect');
        newInsect.style.top = `${Math.floor(Math.random() * (gameBoard.clientHeight - 100*2)) + 100}px`;
        newInsect.style.left = `${Math.floor(Math.random() * (gameBoard.clientWidth - 150*2)) + 150}px`;

        newInsect.addEventListener('click', e => killInsect(e));
        gameBoard.appendChild(newInsect);
    }, randomTime);
}

function killInsect(event) {
    event.target.classList.add('killing');
    setTimeout(() => event.target.remove(), 500);
    appendInsect();
    appendInsect();
    increaseScore();
}

function increaseScore() {
    score++;
    scoreSpan.textContent = score;
}

function getRandomTime() {
    return (Math.random() * 3) * 1000
}