const slides = [...document.querySelectorAll(".slide")];
const leftBtn = document.querySelector("button.left");
const rightBtn = document.querySelector("button.right");

let activeSlide = 0;

setBodyBg();

leftBtn.addEventListener("click", () =>
  setActive(() =>
    activeSlide === 0 ? (activeSlide = slides.length - 1) : (activeSlide -= 1)
  )
);

rightBtn.addEventListener("click", () =>
  setActive(() =>
    activeSlide === slides.length - 1 ? (activeSlide = 0) : (activeSlide += 1)
  )
);

function setBodyBg() {
  document.body.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}

function setActive(setFunc) {
  slides.forEach((slide) => slide.classList.remove("active"));
  setFunc();
  slides[activeSlide].classList.add("active");

  setBodyBg();
}
