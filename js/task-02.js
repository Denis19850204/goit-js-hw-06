const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = document.createElement('li');
itemEl.classList.add('item')
console.log(itemEl)

for (const ingredient of ingredients) {
  console.log(ingredient)
  itemEl.textContent = ingredient;
}
