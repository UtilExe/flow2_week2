import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade"

/* GET ALL PERSONS */
function getAllPersonFunc() {
personFacade.getAllPersons()
.then(data=> {
    const persons = data.all;
    const tableRows = persons.map(person => `
    <tr>
    <td>${person.id}</td>
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.phone}</td>
    <td>${person.street}</td>
    <td>${person.zip}</td>
    <td>${person.city}</td>
    </tr>
    `)
  
    const tableRowsAsString = tableRows.join("");
    document.getElementById("tbody").innerHTML = tableRowsAsString; 
})
.catch(err =>{
  if(err.status) {
    err.fullError.then(e=> {
      console.log(e.message)
      document.getElementById("error").innerHTML = e.message;
  })
}
  else{ console.log("Network error"); }
})
}
getAllPersonFunc();

/* ADD NEW PERSON */
let savebtn = document.getElementById("savebtn");
savebtn.addEventListener('click', (event) => {

  event.preventDefault();
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let phone = document.getElementById("phone").value;
  let street = document.getElementById("street").value;
  let zip = document.getElementById("zip").value;
  let city = document.getElementById("city").value;

  const userAdd = {
    firstName,
    lastName,
    phone,
    street,
    zip,
    city
  }

  document.getElementById("error").innerHTML = ""
  personFacade.addPerson(userAdd)
  // In order to reload automatically, instead of having to refresh page:
  .then (getAllPersonFunc()) // doesn't work though. strange. worked on other frontend project. maybe something with the pop-up. 
  // I'll handle it through the reload button then.
  .catch (err => {
    if (err.status) {
      err.fullError.then(e=> document.getElementById("error").innerHTML = /*e.msg*/ "Error")
    } else {
      console.log("Network Error")
    }
  });
});

/* RELOAD BUTTON */
let reload = document.getElementById("reload");
reload.addEventListener('click', (event) => {

event.preventDefault();

getAllPersonFunc();
});