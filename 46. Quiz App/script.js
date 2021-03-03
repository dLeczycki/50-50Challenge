const button = document.querySelector('button');
const card = document.querySelector('.card');

let activeQuestionIndex = 0;
let score = 0;

const questions = getData();

button.addEventListener('click', submitQuestion);

function getData() {
    const questions = [{
            question: 'Which language runs in a web browser?',
            answers: ['Java', 'C', 'Python', 'JavaScript'],
            correct: [false, false, false, true]
        },
        {
            question: 'What does CSS stand for?',
            answers: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'Cars SUVs Sailboats'],
            correct: [false, true, false, false]
        },
        {
            question: 'What does HTML stand for?',
            answers: ['Hypertext Markup Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'Helicopters Terminals Motorboats Lamborginis'],
            correct: [true, false, false, false]
        },
        {
            question: 'What year was JavaScript launched',
            answers: ['1996', '1995', '1994', 'none of the above'],
            correct: [false, true, false, false]
        }
    ]
    createCard(questions[activeQuestionIndex]);
    return questions;
}

function submitQuestion() {
    const selectedAnswer = document.querySelector('input:checked');
    const activeQuestion = questions[activeQuestionIndex];
    const answerId = parseInt(selectedAnswer.id);

    if (!selectedAnswer) return;
    if (activeQuestion.correct[answerId]) score++;

    activeQuestionIndex++;
    if (activeQuestionIndex === questions.length) {
        printScore();
        return;
    }

    createCard(questions[activeQuestionIndex]);
}

function reloadQuiz() {
    score = 0;
    activeQuestionIndex = 0;

    button.textContent = 'Submit';
    button.removeEventListener('click', reloadQuiz);
    button.addEventListener('click', submitQuestion);

    createCard(questions[activeQuestionIndex]);
}

function printScore() {
    card.innerHTML =
        `
        <h2 class="question">Your score is ${score}/${questions.length}</h2>
        `
    button.textContent = 'Reload';
    button.removeEventListener('click', submitQuestion);
    button.addEventListener('click', reloadQuiz);
}

function createCard(question) {
    card.innerHTML =
        `
    <h2 class="question">${question.question}</h2>
    <div class="answer"><input type="radio" name="answer" id="0"><label for="0">${question.answers[0]}</label></div>
    <div class="answer"><input type="radio" name="answer" id="1"><label for="1">${question.answers[1]}</label></div>
    <div class="answer"><input type="radio" name="answer" id="2"><label for="2">${question.answers[2]}</label></div>
    <div class="answer"><input type="radio" name="answer" id="3"><label for="3">${question.answers[3]}</label></div>
    `
}