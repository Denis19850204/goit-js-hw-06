const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const result = document.querySelector('#value');

let counterValue = 0;

const onIncremenClick = () => {
    counterValue += 1;
    result.textContent = counterValue;
}

const onDecrementBtn = () => {
    counterValue -= 1;
    result.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncremenClick)
decrementBtn.addEventListener('click', onDecrementBtn) 