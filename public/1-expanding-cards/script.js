const images = [...document.querySelectorAll("div")];

images.forEach((imageDiv) =>
  imageDiv.addEventListener("click", (event) => {
    let activeImage = document.querySelector("div.active");
    activeImage.classList.remove("active");
    event.target.classList.add("active");
  })
);
