const api = new API();
document.addEventListener("DOMContentLoaded", () => {
  api.fetchManager(1)
  // api.fetchEmployees()
  // api.fetchContacts()
  // createContactForm()
  // api.fetchContact(3)
  // api.fetchEquipmentItems()
  // createEmployeeForm()
  // createEquipmentItemForm()
})


// Employee //

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


let buttons = document.querySelectorAll(".delete-bttn")
buttons = document.querySelectorAll(".delete-bttn")
console.log(buttons)
// for (const button of buttons){
//   button.addEventListener("click", () => {
//     debugger;
//   })
// }


// Equipment Item //

function createEquipmentItemForm() {
  let equipmentItemForm = document.getElementById("create-equipment-item-container")
  equipmentItemForm.innerHTML +=

  `
  <h3>Add new equipment: </h3>
  <form>
    <label for="name">Name:</label>
     <input type="text" id="name" name="name"><br>
    <label for="equipment_type">Equipment Type:</label>
     <input type="text" id="equipment_type" name="equipment_type"><br>
    <label for="warranty">Warranty:</label>
     <input type="text" id="warranty" name="warranty"><br>
    <label for="manufacture_id">Manufacture Id:</label>
     <input type="text" id="manufacture_id" name="manufacture_id"><br>
    <label for="notes">Notes:</label>
     <input type="text" id="notes" name="notes"><br>
    <label for="pack_id">Pack Id:</label>
     <input type="text" id="pack_id" name="pack_id"><br>
    <label for="specs">Specs:</label>
     <input type="text" id="specs" name="specs"><br>
     <input type="submit" id="submit-button" value="Save">
  </form>
  `
  equipmentItemForm.addEventListener("submit", equipmentItemFormSubmission);

}


function equipmentItemFormSubmission() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let equipmentType = document.getElementById("equipment_type").value;
  let warranty = document.getElementById("warranty").value;
  let manufactureId = document.getElementById("manufacture_id").value;
  let notes = document.getElementById("notes").value;
  let packId = document.getElementById("pack_id").value;
  let specs = document.getElementById("specs").value;

  let equipmentItem = {
    name: name,
    equipment_type: equipmentType,
    warranty: warranty,
    manufacture_id: manufactureId,
    notes: notes,
    pack_id: packId,
    specs: specs
  }

  fetch("http://localhost:3000/api/v1/equipment_items", {
    method: "POST",
    headers: {"Accepts": "application/json", "Content-Type": "application/json"},
    body: JSON.stringify(equipmentItem)
  })
  .then(resp => resp.json())
  .then(equipmentItem => {
    let item = new EquipmentItem(equipmentItem.id, equipmentItem.name, equipmentItem.equipment_type, equipmentItem.warranty, equipmentItem.manufacture_id, equipmentItem.notes, equipmentItem.pack_id, equipmentItem.specs, equipmentItem.unique_id, equipmentItem.manual, equipmentItem.picture)
    item.renderEquipmentItem();
  })
}




// Contact //

function createContactForm() {
  let contactForm = document.getElementById("create-contact-container")
  contactForm.innerHTML +=

  `
  <h3>Add a new contact: </h3>
  <form>
    <label for="first_name">First name:</label>
     <input type="text" id="first_name" name="last_name"><br>
    <label for="last_name">Last name:</label>
     <input type="text" id="last_name" name="last_name"><br>
    <label for="company">Company:</label>
     <input type="text" id="company" name="company"><br>
     <label for="department">Department:</label>
      <input type="text" id="department" name="department"><br>
    <label for="job_title">Job title:</label>
     <input type="text" id="job_title" name="job_title"><br>
    <label for="school">School:</label>
     <input type="text" id="school" name="school"><br>
    <label for="phone">Phone:</label>
     <input type="text" id="phone" name="phone"><br>
    <label for="email">Email:</label>
     <input type="text" id="email" name="email"><br>
     <label for="alt_phone">Alt Phone:</label>
      <input type="text" id="alt_phone" name="alt_phone"><br>
     <label for="alt_email">Alt Email:</label>
      <input type="text" id="alt_email" name="alt_email"><br>
    <label for="address">Adress:</label>
     <input type="text" id="address" name="address"><br>
     <label for="website">Website:</label>
      <input type="text" id="website" name="website"><br>
     <label for="notes">Notes:</label>
      <input type="text" id="notes" name="notes"><br>
     <input type="submit" value="Save">
  </form>
  `

  contactForm.addEventListener("submit", contactFormSubmission);

}


function contactFormSubmission() {
  event.preventDefault();
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let phone = document.getElementById("phone").value;
  let altPhone = document.getElementById("alt_phone").value;
  let email = document.getElementById("email").value;
  let altEmail = document.getElementById("alt_email").value;
  let company = document.getElementById("company").value;
  let website = document.getElementById("website").value;
  let jobTitle = document.getElementById("job_title").value;
  let department = document.getElementById("department").value;
  let address = document.getElementById("address").value;
  let notes = document.getElementById("notes").value;
  let school = document.getElementById("school").value;

  let contact = {
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    alt_phone: altPhone,
    email:email,
    alt_email: altEmail,
    company: company,
    website: website,
    job_title: jobTitle,
    department: department,
    address: address,
    notes: notes,
    school: school
  }


  fetch("http://localhost:3000/api/v1/contacts", {
    method: "POST",
    headers: {"Accepts": "application/json", "Content-Type": "application/json"},
    body: JSON.stringify(contact)
  })
  .then(response => response.json())
  .then(contact => {
    let contct = new Contact(contact.id, contact.first_name, contact.last_name, contact.phone, contact.alt_phone, contact.email, contact.alt_email, contact.company, contact.website, contact.job_title, contact.department, contact.address, contact.notes, contact.school, contact.school_id)
    contct.renderContact();
  })

}
