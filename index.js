// Write your code below:


//grab the form by id

const myForm=document.getElementById('myForm')

//now select form submission event for that use event listener

myForm.addEventListener('submit' , function(event)
{
    event.preventDefault();
 
    const name=document.getElementById('username').value;
    const email=document.getElementById('email').value
    const number=document.getElementById('phone').value;

 
 const userData= {
 
      name: name,
      email: email,
      number:number
}

localStorage.setItem('userData', JSON.stringify(userData))


})
