const userName = document.querySelector("#name-input");
const userText = document.querySelector("#name-output");
userName.addEventListener("input", () => {
  const name = userName.value.trim();
  if (name === "") {
    userText.textContent = "Anonymous";
  } else {
    userText.textContent = name;
  }
});
