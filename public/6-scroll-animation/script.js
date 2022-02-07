const boxes = [...document.querySelectorAll("div.content")];

showBoxes = () => {
  boxes.forEach((box) => {
    let boxRect = box.getBoundingClientRect();
    if (boxRect.top + boxRect.height < window.innerHeight)
      box.classList.add("on");
  });
};

document.addEventListener("scroll", showBoxes);
window.onload = showBoxes;
