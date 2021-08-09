const categoriesEl = document.querySelectorAll("#categories li.item");
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach((categoryEl) => {
  console.log(`Категория : ${categoryEl.firstElementChild.textContent}`);
  console.log(
    `Количество элементов : ${categoryEl.querySelectorAll(`li`).length}`
  );
});
