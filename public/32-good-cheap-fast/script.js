const options = document.querySelectorAll('div.checkbox');
const good = options[0];
const cheap = options[1];
const fast = options[2];

options.forEach(option => option.addEventListener('click', (e) => selectOption(e)))

function selectOption(e) {
    console.log('here');
    e.target.classList.toggle('active');
    if (good.classList.contains('active') && cheap.classList.contains('active') && fast.classList.contains('active')) {
        if (e.target === good) fast.classList.remove('active');
        else if (e.target === cheap) good.classList.remove('active');
        else cheap.classList.remove('active');
    }
}