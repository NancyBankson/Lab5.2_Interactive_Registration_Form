// Declarations
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const submitButton = document.getElementById("registrationForm");
let usernameCorrect = true;
let emailCorrect = false;
let passwordCorrect = false;
let confirmPasswordCorrect = false;

// Username retrieval from storage
window.addEventListener('load', () => {
    const user = localStorage.getItem("username");
    if (user) {
        username.value = user;
    }
});

// Check validity of username
username.addEventListener("input", function (event) {
    if (username.validity.valueMissing) {
        username.setCustomValidity("Please enter a Username (I'm not yelling)");
        usernameCorrect = false;
    } else if (username.validity.tooShort) {
        username.setCustomValidity("Username must be at least 3 characters");
        usernameCorrect = false;
    } else {
        username.setCustomValidity("");
        usernameCorrect = true;
    }
    usernameError.textContent = username.validationMessage;
})

// Check validity of email
email.addEventListener("input", function (event) {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Email address must use the format example@.domain.com");
    } else if (email.validity.valueMissing) {
        console.log("invalid entry");
        email.setCustomValidity("Please enter your email address");
    }
    else {
        email.setCustomValidity("");
        emailCorrect = true;
    }
    emailError.textContent = email.validationMessage;
})

// Check validity of password
password.addEventListener("input", function (event) {
    if (password.validity.valueMissing) {
        password.setCustomValidity("Please enter a password");
    } else if (password.validity.tooShort) {
        password.setCustomValidity("Password must be at least 8 characters")
    } else if (password.validity.patternMismatch) {
        password.setCustomValidity("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.")
    } else {
        password.setCustomValidity("");
        passwordCorrect = true;
    }
    passwordError.textContent = password.validationMessage;
})

// Check validity of confirmed password
confirmPassword.addEventListener("input", function (event) {
    if (confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity("Please re-enter your password");
    } else if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords must match")
    } else {
        confirmPassword.setCustomValidity("");
        confirmPasswordCorrect = true;
    }
    confirmPasswordError.textContent = confirmPassword.validationMessage;
})

// Event listener for submit button with prevent default
submitButton.addEventListener("submit", function(event) {    
    event.preventDefault();
    if (usernameCorrect === false) {
        alert("Enter a Username, must be at least 3 characters");
        username.focus();
    } else { localStorage.setItem("username", username.value); }
    if (emailCorrect === false) {
        alert("Please enter email address in format example@domain.com");
        email.focus();
    }
    if (passwordCorrect === false) {
        alert("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number");
        password.focus();
    }
    if (confirmPasswordCorrect === false) {
        alert("Passwords must match");
        confirmPassword.focus();
    }
    // If no errors found, return success message
    if ((usernameCorrect === true) && (emailCorrect === true) && (passwordCorrect === true) && (confirmPasswordCorrect === true)) {
        alert("Qapla!  That's Klingon for 'Success!'");
        username.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
    }
})
