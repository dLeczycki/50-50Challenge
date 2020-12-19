const search = document.querySelector("div.search");
const button = document.querySelector("div.search button");

button.addEventListener("click", () => {
  search.classList.toggle("active");
});
