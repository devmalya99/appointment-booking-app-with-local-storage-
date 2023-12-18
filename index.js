// Grab the form by id
const myForm = document.getElementById('myForm');

// Now select form submission event for that use event listener
myForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('phone').value;

  // Create a unique key for the user
  const userKey = 'user_' + name;

  // Create a new user data object
  const userData = {
      name: name,
      email: email,
      number: number
  };

  // Store the user data object in local storage with the unique key
  localStorage.setItem(userKey, JSON.stringify(userData));
});
