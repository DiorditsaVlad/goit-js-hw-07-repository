const elements = {
  incrementButton: document.querySelector(`[data-action='increment']`),
  decrementButton: document.querySelector(`[data-action='decrement']`),
  counter: document.querySelector("#value"),
};

elements.incrementButton.addEventListener("click", () => {
  increment();
  updateCounter();
});
elements.decrementButton.addEventListener("click", () => {
  decrement();
  updateCounter();
});

let counterValue = 0;

function increment() {
  counterValue += 1;
}
function decrement() {
  counterValue -= 1;
}
function updateCounter() {
  elements.counter.textContent = counterValue;
}
