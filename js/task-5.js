function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const batton = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.body;
batton.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = newColor;
});

// *Напиши скрипт, який змінює колір фону елемента < body >
// *через інлайн - стиль по кліку на button.change - color
// *і задає це значення кольору текстовим вмістом для span.color.
