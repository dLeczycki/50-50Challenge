const container = document.querySelector("div.container");
const psSection = document.querySelector("section.ps");
const xboxSection = document.querySelector("section.xbox");

psSection.addEventListener("mouseover", () => {
  container.classList.remove("right-active");
  container.classList.add("left-active");
});

xboxSection.addEventListener("mouseover", () => {
  container.classList.remove("left-active");
  container.classList.add("right-active");
});

container.addEventListener("mouseout", () => {
  container.classList.remove("left-active");
  container.classList.remove("right-active");
});
