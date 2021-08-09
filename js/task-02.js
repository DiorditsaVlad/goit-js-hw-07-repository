const ingredientsEl = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngridientsEl = (ingredient) => {
  const ingredientsElementLi = document.createElement(`li`);
  ingredientsElementLi.textContent = ingredient;
  return ingredientsElementLi;
};

ingredientsEl.append(...ingredients.map(createIngridientsEl));
