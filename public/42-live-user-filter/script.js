const searchInput = document.querySelector('div.filter-box input');
const usersList = document.querySelector('ul.users-list');

const RANDOMUSER_API = 'https://randomuser.me/api/?results=40';

searchInput.addEventListener('input', e => search(e.target.value.toLowerCase()));

fetchUsers();

function search(filter = '') {
    const users = [...usersList.querySelectorAll('li')];
    const filteredUsers = users.filter(user => user.innerText.toLowerCase().includes(filter));

    users.forEach(user => user.classList.add('hide'));
    filteredUsers.forEach(user => user.classList.remove('hide'));
}

async function fetchUsers() {
    await fetch(RANDOMUSER_API).then(res => res.json()).then(result => {
        result.results.forEach(user => {
            const userBox = document.createElement('li');
            userBox.classList.add('user-box');
            userBox.innerHTML =
                `
            <img src='${user.picture.thumbnail}'>
            <div>
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
            `
            usersList.appendChild(userBox);
        })
    });
}