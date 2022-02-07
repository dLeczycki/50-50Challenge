const headerImg = document.querySelector(".card-header img");
const title = document.querySelector(".card-content h3");
const content = document.querySelector(".card-content>p");
const authorImg = document.querySelector(".author-img img");
const author = document.querySelector(".author-name");
const date = document.querySelector(".date");

setTimeout(getData, 2000);

function getData() {
  const data = {
    headerImg: "./images/sky.jpg",
    title: "Title",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur itaque sapiente sed harum recusandae at rerum saepe.",
    authorImg: "https://randomuser.me/api/portraits/men/61.jpg",
    author: "John Parker",
    date: "Jan 02, 2020",
  };

  updateView(data);
}

function updateView(data) {
  const animatedBgs = document.querySelectorAll(".bg-to-animate");
  const animatedTexts = document.querySelectorAll(".text-to-animate");

  animatedBgs.forEach((animatedElement) =>
    animatedElement.classList.remove("bg-to-animate")
  );
  animatedTexts.forEach((animatedElement) =>
    animatedElement.classList.remove("text-to-animate")
  );

  headerImg.src = data.headerImg;
  title.textContent = data.title;
  content.innerHTML = data.content;
  authorImg.src = data.authorImg;
  author.textContent = data.author;
  date.textContent = data.date;
}
