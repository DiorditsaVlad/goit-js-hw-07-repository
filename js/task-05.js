const elements = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
elements.nameInput.addEventListener("input", (event) => {
  elements.nameOutput.textContent =
    event.currentTarget.value === "" ? "незнакомец" : event.currentTarget.value;
});
