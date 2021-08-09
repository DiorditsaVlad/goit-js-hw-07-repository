const elemetns = {
  incrementButton: document.querySelector(`[data-action='increment']`),
  decrementButton: document.querySelector(`[data-action='decrement']`),
  counter: document.querySelector("#value"),
};

elemetns.incrementButton.addEventListener("click", () => {
  increment();
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
