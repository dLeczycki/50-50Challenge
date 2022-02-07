const code = document.querySelectorAll('input');

code[0].focus();

code.forEach((digit, index) => {
    digit.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            code[index].value = '';
            handleVerification(index);
            return;
        }

        if (e.key === 'Backspace') setTimeout(() => code[index - 1].focus(), 0);
    })
})

function handleVerification(index) {
    if (index === code.length - 1) {
        setTimeout(() => alert('Code handled'), 0);
        return;
    }

    setTimeout(() => code[index + 1].focus(), 0);
}