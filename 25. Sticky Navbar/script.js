const nav = document.querySelector("nav");
const links = document.querySelectorAll("a");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) nav.classList.add("sticked");
  else nav.classList.remove("sticked");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    links.forEach((activeLink) => activeLink.classList.remove("active"));
    link.classList.add("active");
  })
);
