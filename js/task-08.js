const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполненны!");
  } else {
    const adressObj = {};
    adressObj.Email = `${email}`;
    adressObj.Password = `${password}`
    console.log(adressObj)
    // console.log(`Email:${email}, Password:${password}`);
    event.currentTarget.reset();
  }
}
