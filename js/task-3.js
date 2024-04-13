const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (Event) => {
  output.textContent = Event.currentTarget.value.trim();
});
