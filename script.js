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

email.addEventListener("input", function(event) {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Email address must use the format example@.domain.com");
    } else if (email.validity.valueMissing) {
      console.log("invalid entry");
        email.setCustomValidity("Please enter your email address");
    }    
    else {email.setCustomValidity("")}
    emailError.textContent = email.validationMessage;
})

password.addEventListener("input", function(event) {
    if (password.validity.valueMissing) {
        password.setCustomValidity("Please enter a password");
    } else if (password.validity.tooShort) {
        password.setCustomValidity("Password must be at least 8 characters")
    } else if (password.validity.patternMismatch) {
        password.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.")
    } else {password.setCustomValidity("")}
    passwordError.textContent = password.validationMessage;
})

confirmPassword.addEventListener("input", function(event) {
    if (confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity("Please re-enter your password");
    } else if (password.value != confirmPassword.ariaValueMax) {
        confirmPassword.setCustomValidity("Passwords must match")
    } else {confirmPassword.setCustomValidity("")}
    confirmPasswordError.textContent = username.validationMessage;
})


submit.addEventListener("click", function() {
    localStorage.setItem("username", username.value);
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Email address must use the format example@.domain.com");
        email.focus();
    } else if (email.validity.valueMissing) {
      console.log("invalid entry");
        email.setCustomValidity("Please enter your email address");
        email.focus();
    }    
    else {email.setCustomValidity("")}
    emailError.textContent = email.validationMessage;
})