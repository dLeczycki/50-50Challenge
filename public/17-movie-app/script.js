const API =
  "https://api.themoviedb.org/3/discover/movie?api_key=4292b062ee01cde287c5c84f1bc7d12c&language=en-US&sort_by=popularity.desc&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w500";

const container = document.querySelector("section.movie-container");
const search = document.querySelector("input");

getData();

async function getData() {
  let movies;
  await fetch(API)
    .then((response) => response.json())
    .then((response) => (movies = response.results));

  showMovies(movies);
}

function showMovies(movies) {
  movies.forEach((movie) => {
    const { title, overview, poster_path, vote_average } = movie;

    let color;
    if (vote_average > 8) color = "#1fff5a";
    else if (vote_average > 5) color = "yellow";
    else color = "red";

    const newElement = document.createElement("div");
    newElement.classList.add("movie");

    newElement.innerHTML = `<img src=${IMAGE_API}${poster_path} />
    <div class="movie-info">
        <h3>${title}</h3>
        <span style="color: ${color}">${vote_average}</span>
        <div class="overview"><strong>Overview</strong><p>${overview}</p></div>
    </div>`;
    container.appendChild(newElement);
  });
}

search.addEventListener("input", (e) => {
  const movieTitles = document.querySelectorAll(".movie-info h3");
  movieTitles.forEach((title) => {
    if (title.textContent.includes(e.target.value))
      title.parentNode.parentNode.classList.remove("hidden");
    else title.parentNode.parentNode.classList.add("hidden");
  });
});
