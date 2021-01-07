const bigGlass = document.querySelector(".glass.big");
const remainedDiv = document.querySelector("div.remained");
const remainedHeader = document.querySelector("div.remained h2");
const filledDiv = document.querySelector("div.filled");
const totalHeight = bigGlass.offsetHeight;
const smallGlasses = [...document.querySelectorAll("div.glass.small")];

smallGlasses.forEach((glass) =>
  glass.addEventListener("click", () => fill(glass))
);

function fill(glass) {
  const glassesFilled = document.querySelectorAll("div.glass.small.filled");
  const glassId = smallGlasses.indexOf(glass);

  if (glassesFilled.length < glassId) {
    for (let i = 0; i <= glassId; i++) {
      smallGlasses[i].classList.add("filled");
    }
  } else if (glassesFilled.length <= glassId + 1) {
    glass.classList.toggle("filled");
  } else {
    for (let i = glassId + 1; i < smallGlasses.length; i++) {
      smallGlasses[i].classList.remove("filled");
    }
  }
  updateFilling();
}

function updateFilling() {
  const glassesFilled = document.querySelectorAll("div.glass.small.filled");
  const percentage = (100 / smallGlasses.length) * glassesFilled.length;
  const litersRemained = 2 - percentage / 50;

  remainedDiv.setAttribute(
    "style",
    `height: ${totalHeight - (totalHeight * percentage) / 100}px`
  );
  remainedHeader.textContent = `${litersRemained}L`;
  filledDiv.setAttribute(
    "style",
    `height:${(totalHeight * percentage) / 100}px;line-height:${
      (totalHeight * percentage) / 100
    }px`
  );
  filledDiv.textContent = `${percentage}%`;

  if (percentage === 100) {
    const style = remainedDiv.getAttribute("style");
    remainedDiv.setAttribute(
      "style",
      `${style};visibility:hidden; padding: 0;`
    );
  } else if (percentage === 0) {
    const style = filledDiv.getAttribute("style");
    filledDiv.setAttribute("style", `${style};visibility:hidden; padding: 0;`);
  }
}
