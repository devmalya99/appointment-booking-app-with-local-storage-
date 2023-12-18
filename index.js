
//grab the form by id

const myForm=document.getElementById("userForm")

//now select form submission event for that use event listener

myForm.addEventListener('submit' , function(event)
{
    event.preventDefault();
 
    const name=document.getElementById('userName').value;
    const email=document.getElementById('uEmail').value
    const number=document.getElementById('number').value;

 
 const userData= {
 
      name: name,
      email: email,
      number:number
}

localStorage.setItem('userData', JSON.stringify(userData))


})