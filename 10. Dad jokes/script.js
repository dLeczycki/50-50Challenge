const jokeP = document.querySelector("p.joke");
const jokeBtn = document.querySelector("button.getJokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeP.textContent = data.joke;
}
