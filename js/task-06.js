const textInput = document.querySelector('#validation-input');
console.dir(textInput)

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(element) {
    const inp = element.currentTarget;   
    const inputLength = textInput.value.length
   
    if (inputLength === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');        
    } else {
        textInput.classList.replace('valid','invalid');
        // textInput.classList.remove('valid');
        // textInput.classList.add('invalid');  

    }
}
