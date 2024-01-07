const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

const users = {};

function onFormSubmit(e) {
  e.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  users.email = email;
  users.password = password;
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(users);
  form.reset();
}
