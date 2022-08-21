const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", onClick);

function onClick() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = spanEl.textContent;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
