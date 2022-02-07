const audios = [...document.querySelectorAll("audio")];

[...document.querySelectorAll("button")].forEach((button) => {
  button.addEventListener("click", (e) => {
    let audioToPlay = audios.filter(
      (audio) => audio.id === e.target.textContent
    )[0];
    resetAudios();
    audioToPlay.play();
  });
});

resetAudios = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
};
