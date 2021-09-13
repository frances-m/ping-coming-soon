const form = document.getElementById('email-form');
const email = document.getElementById('email');

form.noValidate = true;

form.addEventListener('submit', function(event) {
  if (!email.validity.valid) {
    if (email.validity.valueMissing) {
      email.nextElementSibling.innerHTML = "Whoops! It looks like you forgot to add your email";
    } else {
      email.nextElementSibling.innerHTML = "Please provide a valid address";
    }
    email.classList.add('invalid');
    event.preventDefault();
  }
});

email.addEventListener('keydown', function() {
  email.classList.remove('invalid');
});
