const lengthInput = document.querySelector('input#password-length');
const params = [...document.querySelectorAll('input[type="checkbox"]')];
const resultDiv = document.querySelector('div.result');
const submitBtn = document.querySelector('button.generate-password');
const copyBtn = document.querySelector('i.fa-clipboard');

copyBtn.addEventListener('click', copyPassword);
submitBtn.addEventListener('click', () => {
    const generationFunctios = [generateUppercase, generateLowercase, generateNumber, generateSymbol];
    const options = params.map(param => param.checked);
    const selectedOptions = generationFunctios.filter((func, index) => options[index] === true);

    generatePassword(selectedOptions);
});

function copyPassword() {
    if (resultDiv.textContent === '') return;
    else navigator.clipboard.writeText(resultDiv.textContent).then(() => alert("Copied password to clipboard"))
}

function generatePassword(selectedOptions) {
    const passwordLength = lengthInput.value;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        let randomOptionFunction = selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        password += randomOptionFunction();
    }
    resultDiv.textContent = password;
}

function generateUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function generateLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function generateNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function generateSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}