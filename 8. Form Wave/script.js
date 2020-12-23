const inputs = [...document.querySelectorAll("div.form-control input")];
const labels = [...document.querySelectorAll("div.form-control label")];
// const button = document.querySelector("form button");

// button.addEventListener("click", (e) => {
//   e.preventDefault();
// });

labels.forEach((label) => {
  let delay = 0;
  let text = label.textContent;
  label.textContent = "";
  text.split("").forEach((letter) => {
    let newSpan = document.createElement("span");
    newSpan.setAttribute("style", `transition-delay:${delay}ms`);
    newSpan.textContent = letter;
    label.appendChild(newSpan);
    delay += 50;
  });
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) input.classList.add("notEmpty");
    else input.classList.remove("notEmpty");
  });
});
