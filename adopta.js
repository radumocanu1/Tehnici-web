function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
alert("Adresa de mail corecta");
return true;
}
else
{
alert("Nu este o adresa de mail valida");
return false;
}
}

// function CheckPassword(inputtxt) 
// { 
// var passw = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
// if(inputtxt.value.match(passw)) 
// { 
// alert('Corect')
// return true;
// }
// else
// { 
// alert('Gresit!')
// return false;
// }
// }


  window.onload = () => {
   const barButton = document.querySelector('.user-bar #changeDetails');
   const removeButton = document.querySelector('#removeDetails');
   const refreshButton = document.getElementById('refresh');
   barButton.addEventListener('click', changeDetails);
   removeButton.addEventListener('click', removeDetails);
   refreshButton.addEventListener('click', () => {
     window.location.reload();
   });
   renderBar();
 }
 
 function renderBar() {
   const barMessage = document.querySelector('.user-bar .message');
   const barButton = document.querySelector('.user-bar #changeDetails');
   let userDetails = null;
   try {
     userDetails = JSON.parse(localStorage.getItem('userDetails'));
   } catch (error) {
     userDetails = null;
   }
   if(userDetails) {
     barMessage.innerHTML = `Bine ai venit, ${userDetails.name}! Parola ta este: ${userDetails.age}`;
     barButton.innerHTML = "Schimbă Userul";
   } else {
     barMessage.innerHTML = "Bine ai venit! Conecteaza-te!";
     barButton.innerHTML = "LogIn";
   }
 }
 
 function changeDetails() {
   const name = prompt('Introduceti adresa de email');
   if(!ValidateEmail(name)) return;
   const age = prompt('Introduceti parola');
   if(!age) return;
   const userDetails = { name, age };
   localStorage.setItem('userDetails', JSON.stringify(userDetails));
   renderBar();
 }
 
 function removeDetails() {
   localStorage.removeItem('userDetails');
   renderBar();
 }
 