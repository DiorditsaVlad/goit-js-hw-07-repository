const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", checkEnteredValue);

function checkEnteredValue(event) {
  const target = event.currentTarget;
  const requiredLength = Number(target.dataset.length);
  if (!isNaN(requiredLength) && target.value.length === requiredLength) {
    target.classList.add("valid");
    target.classList.remove("invalid");
  } else {
    target.classList.add("invalid");
    target.classList.remove("valid");
  }
}
