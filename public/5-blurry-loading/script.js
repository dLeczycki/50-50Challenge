const loadingPage = document.querySelector("section.loading-page");
const loadProgress = document.querySelector("div.load-progress");

let progress = 0;

const interval = setInterval(() => {
  load();
}, 20);

load = () => {
  progress++;
  loadingPage.setAttribute("style", `filter: blur(${100 - progress}px)`);
  loadProgress.textContent = `${progress}%`;
  loadProgress.setAttribute("style", `opacity: ${1 - progress / 100}`);
  if (progress === 100) clearInterval(interval);
};
