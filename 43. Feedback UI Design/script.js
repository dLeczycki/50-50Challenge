const container = document.querySelector('div.container');
const sendButton = document.querySelector('button');
const feedbackBoxes = document.querySelectorAll('div.feedback');

let active = document.querySelector('div.active');

sendButton.addEventListener('click', () => createThanksCard(active.dataset.feedback));
feedbackBoxes.forEach(feedbackBox => feedbackBox.addEventListener('click', setActivefeedback.bind(feedbackBox)));

function setActivefeedback() {
    active.classList.remove('active');
    this.classList.add('active');
    active = this;
}

function createThanksCard(feedback = 'Satisfied') {
    container.innerHTML =
        `
    <div class="thanks-card">
        <i class="fa fa-heart"></i>
        <strong>Thank you!</strong>
        <strong class="feedback">Feedback: ${feedback}</strong>
        <p>We'll use your feedback to improve our <br> customer support</p>
    </div>
    `
}