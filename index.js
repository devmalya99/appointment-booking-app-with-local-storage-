// Grab the form by id
const myForm = document.getElementById('myForm');

// Select the unordered list from the DOM
const userList = document.getElementById('userList');

userList.style.listStyleType = 'decimal';

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


 //reset the input fields to empty
 document.getElementById('username').value = '';
 document.getElementById('email').value = '';
 document.getElementById('phone').value = '';
//create an edit button just after delete button
const editBtn= document.createElement('button')

//set the text content of the delete button
 editBtn.textContent='Edit This';

//add edit functionality: When you click on this edit button, 
/*
the user details should be removed from the screen and from the local storage and 
should populate the input fields with the existing values.
*/

editBtn.addEventListener('click',function(event)
{

    userList.removeChild(userItem);
    localStorage.removeItem(userKey);

    document.getElementById('username').value =userData.name;
    document.getElementById('email').value = userData.email
    document.getElementById('phone').value = userData.number;
})


 //append the editBtn to the li element we created called userItems
userItem.appendChild(editBtn)

});
