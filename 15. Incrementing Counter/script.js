const counters = document.querySelectorAll("div.counter");
const time = 200;

counters.forEach((counter) => {
  counter.innerHTML = "0";

  const count = counter.dataset.count;
  const step = count / time;

  const update = () =>
    setTimeout(() => {
      value = Math.ceil(parseInt(counter.innerHTML) + step);
      if (value <= count) {
        counter.innerHTML = value;
        update();
      } else counter.innerHTML = count;
    }, 1);

  update();
});
