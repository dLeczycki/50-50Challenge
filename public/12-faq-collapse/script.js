const buttons = document.querySelectorAll("button.collapse");

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    this.parentNode.classList.toggle("active");
  })
);
