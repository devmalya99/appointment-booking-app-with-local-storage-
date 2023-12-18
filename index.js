// Grab the form by id
const myForm = document.getElementById('myForm');

// Select the unordered list from the DOM
const userList = document.getElementById('userList');

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

 // Create a new list item for the user
 const userItem = document.createElement('li');

/*
The delete button is created and appended to each list item in your code. 
However, the text content of the list item is overwritten after the delete button is appended, which is why you can't see the delete button.

To fix this, you should append the user's data to the list item before appending the delete button. 
*/


// Set the content of the list item to the user's data
userItem.textContent = userData.name + ', ' + userData.email + ', ' + userData.number;


//create a delete button
 const deleteBtn=document.createElement('button');
 deleteBtn.textContent='Delete This';

 //add a event listener to add functionality to the delete button 
 deleteBtn.addEventListener('click',function(event)
 {
    userList.removeChild(userItem);
    localStorage.removeItem(userKey);
 })

 //append the delete button to the list item
 userItem.appendChild(deleteBtn);


 // Add the list item to the unordered list
 userList.appendChild(userItem);
});
