function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes() {
  const amount = input.value;
  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesDiv.innerHTML = "";
  boxesDiv.append(...boxes);
  input.value = "";
}
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
