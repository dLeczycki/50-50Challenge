const label = document.querySelector('label');
const slider = document.querySelector('input');

const maxPercentage = (slider.offsetWidth - label.offsetWidth / 2) / slider.offsetWidth * 100;

slider.addEventListener('input', e => {
    const value = e.target.value;
    const maxValue = e.target.max;

    label.style.left = getLeftOffset(value, maxPercentage, maxValue) + '%';
    label.textContent = value;
})

function getLeftOffset(value, maxPercentage, maxValue) {
    value = maxPercentage * value / maxValue;
    return value;
}