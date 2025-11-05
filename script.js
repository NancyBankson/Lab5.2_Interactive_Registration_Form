const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submit = document.getElementById("submitButton");

window.addEventListener('load', () => {
  const user = localStorage.getItem("username");
  if (user) {
    username.value = user;
  }
});

username.addEventListener("input", function(event) {
    if (username.validity.valueMissing) {
        username.setCustomValidity("Please enter a Username (I'm not yelling)");
    } else if (username.validity.tooShort) {
        username.setCustomValidity("Username must be at least 3 characters")
    } else {username.setCustomValidity("")}
    usernameError.textContent = username.validationMessage;
})


submit.addEventListener("click", function() {
    localStorage.setItem("username", username.value);
})