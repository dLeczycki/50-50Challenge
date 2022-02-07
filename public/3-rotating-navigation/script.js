const menu = document.querySelector("div.menu");
const bars = document.querySelector("i.fa-bars");
const times = document.querySelector("i.fa-times");

bars.addEventListener("click", () => menu.classList.add("active"));

times.addEventListener("click", () => menu.classList.remove("active"));
