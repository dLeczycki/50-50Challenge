const container = document.querySelector("div.container");
let alreadyPressed = false;

document.onkeydown = (e) => {
  container.innerHTML = `<div class="info key"><span>event.key</span>${
    e.key === " " ? "Space" : e.key
  }</div>
  <div class="info key"><span>event.keyCode</span>${e.keyCode}</div>
  <div class="info key"><span>event.code</span>${e.code}</div>`;
};
