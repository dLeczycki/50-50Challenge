const textArea = document.querySelector("textarea");
const choicesContainer = document.querySelector("div.choices");

document.addEventListener("keydown", (e) => {
  createChoices();

  if (e.key === "Enter") {
    let intervalNumber = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    const interval = setInterval(() => {
      selectRandomChoice();
      intervalNumber--;
      if (!intervalNumber) clearInterval(interval);
    }, 500);

    setTimeout(() => (e.target.value = ""), 0);
  }
});

const createChoices = () => {
  choicesContainer.innerHTML = "";

  const choices = textArea.value.split(",").filter((element) => element);
  choices.forEach((choice) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = choice;
    choicesContainer.appendChild(newSpan);
  });
};

const selectRandomChoice = () => {
  const choices = choicesContainer.childNodes;
  choices.forEach((choice) => choice.classList.remove("selected"));
  choices[Math.floor(Math.random() * choices.length)].classList.add("selected");
};
