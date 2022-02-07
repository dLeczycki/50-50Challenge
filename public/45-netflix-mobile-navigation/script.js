const nav = document.querySelector('nav');
const openBtn = document.querySelector('button.open-nav-btn');
const closeBtn = document.querySelector('button.close-nav-btn');

openBtn.addEventListener('click', () => nav.classList.add('visible'));
closeBtn.addEventListener('click', () => nav.classList.remove('visible'));