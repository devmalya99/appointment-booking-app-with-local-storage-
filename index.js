


// The handleFormSubmit function is called when a form is submitted.
function handleFormSubmit(event) 
{

    // The preventDefault function prevents the page from reloading upon form submission.
    event.preventDefault();

    // userDetails stores form inputs with keys named username, email, and phone.
    const userDetails = 
    {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    

    // Store userDetails to the local storage, the email value is used as the key and the userDetails object is stringified.
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));

     //store details on cloud 

    axios.post("https://crudcrud.com/api/18490e87f670438f88233c86ada08490/appointmentData",userDetails)
    .then((res)=>{
     // Call function to display user information on screen (more on this function below)
     displayUserOnScreen(res.data);
     console.log(res);
     })
    .catch((er)=>
    {
      document.body.innerHTML= document.body.innerHTML+"<h1>Something Went Wrong</h1>"
      console.log(err)
    }
      );

   


    // After storing and displaying the user details, clear the input fields in the form
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}
  

function displayUserOnScreen(userDetails) 
{

    // Create an li element to host the user details
    const userItem = document.createElement("li");


    // Append the user details (username, email and phone) text node to the li element
    userItem.appendChild(
      document.createTextNode(
       ` UserName:${userDetails.username} ; User Email is : ${userDetails.email} ; User Phone Number is: ${userDetails.phone}`
      )
    );
  
    // Create a Delete button for removing user details
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);


    // Create an Edit button for editing user details
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    // Select the ul element and append the new li to it
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    // When the delete button is clicked, remove the user's information from the display (user list), and also remove from localStorage
    deleteBtn.addEventListener("click", function (event) 
    {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
    });
  
    // When the edit button is clicked, remove the data from the list, and from localStorage, then fill out the input form for editing

    editBtn.addEventListener("click", function (event) 
    {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
}

//fetch saved data from cloud
function loadAllPastUserData()
{
  axios.get("https://crudcrud.com/api/18490e87f670438f88233c86ada08490/appointmentData")
  .then(res=>
    {
      const userData=res.data;
      userData.forEach((user)=>
      {
        displayUserOnScreen(user)
      })
    })   
}  
// Call function to load user data when the script is loaded
loadAllPastUserData()
