const GITHUB_API = "https://api.github.com/users/";

const form = document.querySelector("form");
const searchInput = document.querySelector("input.search");
const githubUserSection = document.querySelector("section.github-user");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInput.value) {
    search(searchInput.value);
    searchInput.value = "";
  }
});

function search(username) {
  getUser(username);
}

async function getUser(username) {
  await fetch(`${GITHUB_API}${username}`)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error(response);
    })
    .then((user) => {
      createCard(user);
      getUserRepos(username);
    })
    .catch(() => createErrorCard("No profile with this username"));
}

async function getUserRepos(username) {
  await fetch(`${GITHUB_API}${username}/repos`)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error();
    })
    .then((repos) => addReposToCard(repos))
    .catch(() => createErrorCard("Error fetching repositories"));
}

function createCard(user) {
  githubUserSection.innerHTML = `
  <div class="card">
    <img src="${user.avatar_url}"/>
    <div class="info">
        <h2 class="username">${user.login}</h2>
        <p class="bio">${user.bio}</p>
        <div class="user-details">
                    <div>${user.followers} <strong>Followers</strong></div>
                    <div>${user.following} <strong>Following</strong></div>
                    <div>${user.public_repos} <strong>Repos</strong></div>
        </div>
        <ul class="repos"></ul>
    </div>
  </div>
  `;
}

function addReposToCard(repos) {
  const reposContainer = document.querySelector("ul.repos");
  repos.slice(0, 5).forEach((repo) => {
    const listItem = document.createElement("li");
    const repoAnchor = document.createElement("a");

    repoAnchor.textContent = repo.name;
    repoAnchor.setAttribute("href", repo.html_url);

    listItem.appendChild(repoAnchor);
    reposContainer.appendChild(listItem);
  });
}

function createErrorCard(message) {
  githubUserSection.innerHTML = `<div class="card"><h1>${message}</h1></div>`;
}
