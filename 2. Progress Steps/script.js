const nextBtn = document.querySelector("button.next");
const prevBtn = document.querySelector("button.prev");
const steps = document.querySelectorAll("div.step");
const progressBar = document.querySelector("div#progress-bar");
const progressMaxWidth = document.querySelector("div.progress-container")
  .offsetWidth;

let step = 1;
let progressPosition = 0;

nextBtn.addEventListener("click", () => {
  if (step === steps.length) return;

  progressPosition += progressMaxWidth / 3;
  step++;

  progressBar.setAttribute("style", `left: ${progressPosition}px`);
  prevBtn.disabled = false;
  steps[step - 1].classList.add("on");
  if (step === steps.length) nextBtn.disabled = true;
});

prevBtn.addEventListener("click", () => {
  if (step === 1) return;

  progressPosition -= progressMaxWidth / 3;
  step--;

  progressBar.setAttribute("style", `left: ${progressPosition}px`);
  nextBtn.disabled = false;
  steps[step].classList.remove("on");
  if (step === 1) prevBtn.disabled = true;
});
