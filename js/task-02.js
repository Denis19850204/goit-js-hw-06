const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')


// for (let i = 0; i < ingredients.length; i += 1) {  
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item')  
//   itemEl.textContent = ingredients[i];  
//  listEl.append(itemEl) 
// }

const ingredientsToChange = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  ingredientsEl.append(element);
})



 








