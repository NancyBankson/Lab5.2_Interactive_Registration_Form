# Lab 5.2 Interactive Registration Form

## Overview

In this lab, we explored client-side validation techniques.  Using the HTML template provided, I created a form for the user to input username, email, and password.  I implemented real-time validation using event listeners, HTML5 validaiton attributes, and used the JavaScript Constraint Validation API to check the validity of entries and provide custom error messages.

## Features

After building the HTML structure based on the template and styling using the CSS provided in the lab, I implemented the JavaScript with the following specifications:

Select all necessary DOM elements (form, inputs, error message spans).
Load saved username: On page load, check if a username is saved in localStorage. If so, pre-fill the username field.
Real-time validation: Add input event listeners to each field.
-Check validity using the Constraint Validation API (inputElement.validity).
-For the “Confirm Password” field, explicitly check if it matches the “Password” field.
-Display appropriate custom error messages in the corresponding <span> elements. Clear messages if valid.
Form submission: Add a submit event listener to the form.
-Call event.preventDefault().
-Perform a final validation check on all fields.
-If all fields are valid:
-Display a success message (e.g., an alert or update a status message on the page).
-Save the username to localStorage.
-Optionally, reset the form.
-If any field is invalid, ensure error messages are displayed and focus on the first invalid field.

## Testing

1. Test Basic Registration: Fill out all fields with valid data and submit the form. Verify the success message and that the username is saved in localStorage (check your browser’s Developer Tools > Application > Local Storage).
2. Test Username Validation:
-Try submitting with an empty username.
-Enter a username that is too short.
-Verify error messages appear in real-time as you type (or on blur/submit).
3. Test Email Validation:
-Try submitting with an empty email.
-Enter an invalid email format (e.g., “test@”, “test.com”).
4. Test Password Validation:
Try submitting with an empty password.
-Enter a password that is too short.
-Enter a password that doesn’t meet the pattern (e.g., all lowercase, no numbers).
-Ensure the “Confirm Password” field shows an error if it doesn’t match the password.
5. Test Local Storage Persistence: After a successful registration, refresh the page. The username field should be pre-filled with the value you entered.
6. Edge Cases: Think about what happens if a user tries to bypass validation (though client-side validation is mainly for UX, server-side is for security). What happens if localStorage is full or disabled (for this lab, we assume it works, but it’s a real-world consideration)?


## Tools

- HTML
- CSS
- JavaScript

## Reflection Questions

1. How did event.preventDefault() help in handling form submission?

Because input listeners did not always catch errors, such as tabbing through a field, event.preventDefault() was necessary to catch errors missed by input listeners.  It also allowed for the form to be cleared after successful submission.

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 allows for validation using built in checks and errors.  Using these in conjuction with JavaScript validation allows custom checks and error messages, providing a clearer user experience.

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

I used local storage to store the username by using the setItem and getItem methods.  Local storage has a size limit of 5-10 mb and will not store if it is full.  If it is used to store sensitive data, it is possible to steal that data using malicious JavaScript.

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.

I had some difficulty finding a pattern to use for the email validation check.  I removed the special characters and then the string worked properly.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I loaded the error messages into the spans under the input so that the user would see them clearly and know how to avoid the error.  I used the Constraint Validation API with multiple validation checks to ensure the correct error message was displayed.
