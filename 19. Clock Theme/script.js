const html = document.querySelector("html");
const modeBtn = document.querySelector("button.mode");
const hourDiv = document.querySelector("div.hour");
const dateDiv = document.querySelector("div.date");
const secondNeedleDiv = document.querySelector("div.second-needle");
const minuteNeedleDiv = document.querySelector("div.minute-needle");
const hourNeedleDiv = document.querySelector("div.hour-needle");

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
const weekDays = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

modeBtn.addEventListener("click", () => {
  if (html.classList.contains("dark-mode")) {
    modeBtn.textContent = "Light mode";
    html.classList.remove("dark-mode");
  } else {
    modeBtn.textContent = "Dark mode";
    html.classList.add("dark-mode");
  }
});

function setTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const weekDay = date.getDay();
  const month = date.getMonth();
  const day = date.getDate();

  secondNeedleDiv.style.transform = `translate(-50%, -100%) rotate(${rotation(
    60,
    360,
    seconds
  )}deg)`;
  minuteNeedleDiv.style.transform = `translate(-50%, -100%) rotate(${rotation(
    60,
    360,
    minutes
  )}deg)`;
  hourNeedleDiv.style.transform = `translate(-50%, -100%) rotate(${rotation(
    24,
    360,
    hours
  )}deg)`;

  if (hours < 13)
    hourDiv.textContent = `${hours}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    } AM`;
  else
    hourDiv.textContent = `${hours}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    } PM`;

  dateDiv.innerHTML = `${weekDays[weekDay - 1]}, ${
    months[month]
  } <span>${day}</span>`;
}

function rotation(maxIn, maxOut, value) {
  return (value / maxIn) * maxOut;
}

setTime();

setInterval(setTime, 1000);
