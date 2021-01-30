const increaseFontBtn = document.querySelector("button.increase-font");
const decreaseFontBtn = document.querySelector("button.decrease-font");
const clearBtn = document.querySelector("button.clear");
const fontSizeDiv = document.querySelector("div.font-size");
const colorInput = document.querySelector("input");

const canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

let radius = 10;
let color = "black";
let isPressed = false;
let x1;
let y1;

increaseFontBtn.addEventListener("click", () => {
  if (radius < 30) {
    radius += 5;
    fontSizeDiv.textContent = radius;
  }
});

decreaseFontBtn.addEventListener("click", () => {
  if (radius > 10) {
    radius -= 5;
    fontSizeDiv.textContent = radius;
  }
});

clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

colorInput.addEventListener("change", (e) => (color = e.target.value));

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x1 = e.offsetX;
  y1 = e.offsetY;

  drawCircle(x1, y1);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x1, y1, x2, y2);

    x1 = x2;
    y1 = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, radius / 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.lineWidth = radius;
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}
