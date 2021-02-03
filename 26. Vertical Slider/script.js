const step = 100;
const minOffset = (1 - document.querySelectorAll("div.title").length) * step;
const maxOffset = 0;

const titles = {
  DOMelement: document.querySelector("div.titles"),
  offset: maxOffset,
};
const images = {
  DOMelement: document.querySelector("div.images"),
  offset: minOffset,
};
const arrowUpButton = document.querySelector("button.arrow-up");
const arrowDownButton = document.querySelector("button.arrow-down");

arrowUpButton.addEventListener("click", () => {
  moveUp(images);
  moveDown(titles);
});

arrowDownButton.addEventListener("click", () => {
  moveUp(titles);
  moveDown(images);
});

function moveUp(element) {
  if (element.offset === minOffset) element.offset = maxOffset;
  else element.offset -= step;

  element.DOMelement.style.transform = `translateY(${element.offset}%)`;
}

function moveDown(element) {
  if (element.offset === maxOffset) element.offset = minOffset;
  else element.offset += step;

  element.DOMelement.style.transform = `translateY(${element.offset}%)`;
}

setInterval(() => {
  moveUp(titles);
  moveDown(images);
}, 8000);
