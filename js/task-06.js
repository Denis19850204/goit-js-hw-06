const textInput = document.querySelector('#validation-input');
console.dir(textInput)

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(element) {
    const inp = element.currentTarget;   
    const inputLength = inp.value.length;
   
    if (inputLength === Number(inp.dataset.length)) {
        inp.classList.remove('invalid')
        inp.classList.add('valid');        
    } else {
        
        inp.classList.remove('valid');
        inp.classList.add('invalid');  

    }
}
