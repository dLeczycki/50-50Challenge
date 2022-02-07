const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const clickXOrigin = x - this.offsetLeft + this.clientWidth / 2;
  const clickYOrigin = y - this.offsetTop + this.clientHeight / 2;

  let newSpan = document.createElement("span");
  newSpan.style.top = `${clickYOrigin}px`;
  newSpan.style.left = `${clickXOrigin}px`;
  console.log(btn.offsetTop);
  this.appendChild(newSpan);

  setTimeout(() => newSpan.remove(), 1000);
});
