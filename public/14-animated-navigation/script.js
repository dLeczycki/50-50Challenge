const navbar = document.querySelector("nav");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  navbar.classList.toggle("off");
});
