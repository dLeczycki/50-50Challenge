const draggedElement = document.querySelector("div.to-drag");
const holders = document.querySelectorAll("div.holder");

holders.forEach((holder) => {
  holder.addEventListener("dragover", dragOver),
    holder.addEventListener("dragenter", dragEnter),
    holder.addEventListener("dragleave", dragLeave),
    holder.addEventListener("drop", dragDrop);
});

draggedElement.addEventListener("dragstart", dragStart);
draggedElement.addEventListener("dragend", dragEnd);

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("entered");
}

function dragLeave() {
  this.classList.remove("entered");
}

function dragDrop() {
  this.classList.remove("entered");
  this.append(draggedElement);
}

function dragStart() {
  setTimeout(() => this.classList.add("hidden"), 0);
}

function dragEnd() {
  this.classList.remove("hidden");
}
