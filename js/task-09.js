const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', onClick);


function onClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
  
};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
