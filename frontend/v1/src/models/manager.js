class Manager {

  constructor (id, firstName, lastName, username, phone, email) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.phone = phone;
      this.email = email;
  }



  renderManager() {
    let managerDiv = document.getElementById("manager-container")
    managerDiv.innerHTML +=
    `
    <ul>
      <li>
        <h5> ${this.firstName} ${this.lastName}  | ${this.username} | ${this.phone} | ${this.email} </h5>
      </li>
    </ul>


    `
  }



}
