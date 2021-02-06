const loveItSpan = document.querySelector("span");
const img = document.querySelector("div.image");

let lovesIt = 0;

img.addEventListener("dblclick", (e) => {
  loveItSpan.textContent = ++lovesIt;
  addHeart(e);
});

function addHeart(e) {
  const heart = document.createElement("i");
  heart.className = "fas fa-heart heart";

  const top = e.clientY - img.offsetTop;
  const left = e.clientX - img.parentElement.offsetLeft + img.offsetWidth / 2;

  heart.style.top = `${top}px`;
  heart.style.left = `${left}px`;

  img.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}
