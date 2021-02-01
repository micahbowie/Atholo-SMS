const api = new API();
document.addEventListener("DOMContentLoaded", () => {
  createEmployeeForm();
  api.fetchEmployees()
})


function createEmployeeForm() {
  let employeeForm = document.getElementById("create-employee-container")
  employeeForm.innerHTML +=

  `
  <h3>Add a new employee: </h3>
  <form>
    <label for="first_name">First name:</label>
     <input type="text" id="first_name" name="last_name"><br>
    <label for="last_name">Last name:</label>
     <input type="text" id="last_name" name="last_name"><br>
    <label for="age">age:</label>
     <input type="text" id="age" name="age"><br>
    <label for="job_type">Job:</label>
     <input type="text" id="job_type" name="job_type"><br>
    <label for="school">School:</label>
     <input type="text" id="school" name="school"><br>
    <label for="phone">Phone:</label>
     <input type="text" id="phone" name="phone"><br>
    <label for="email">Email:</label>
     <input type="text" id="email" name="email"><br>
    <label for="address">Adress:</label>
     <input type="text" id="address" name="address"><br>
     <label for="notes">Notes:</label>
      <input type="text" id="notes" name="notes"><br>
     <input type="submit" value="Save">
  </form>
  `

  employeeForm.addEventListener("submit", employeeFormSubmission);

}


function employeeFormSubmission() {
  event.preventDefault();
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let age = document.getElementById("age").value;
  let jobType = document.getElementById("job_type").value;
  let school = document.getElementById("school").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let notes = document.getElementById("notes").value;

  let employee = {
    first_name: firstName,
    last_name: lastName,
    age: age,
    job_type: jobType,
    school: school,
    phone: phone,
    email: email,
    address: address,
    notes: notes
  }


  fetch("http://localhost:3000/api/v1/employees", {
    method: "POST",
    headers: {"Accepts": "application/json", "Content-Type": "application/json"},
    body: JSON.stringify(employee)
  })
  .then(resp => resp.json())
  .then(employee => {
    let emply = new Employee(employee.id, employee.first_name, employee.last_name, employee.age, employee.school, employee.address, employee.phone, employee.email, employee.snapchat, employee.instagram, employee.linkedin, employee.major, employee.career_path, employee.manager_id, employee.notes)
    emply.renderEmployee();
  })
}


let buttons = document.querySelectorAll(".employeeButton")
console.log(buttons)
// for (const button of buttons){
//   button.addEventListener("click", () => {
//     debugger;
//   })
// }
