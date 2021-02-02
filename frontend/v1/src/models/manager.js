class Manager {

  constructor (id, firstName, lastName, username, passwordDigest, phone, email) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.passwordDigest = passwordDigest;
      this.phone = phone;
      this.email = email;
  }



  renderManager() {
    let managerDiv = document.getElementById("manager-container")
    managerDiv.innerHTML +=
    `
    <ul>
      <li>
        <h3> ${this.firstName} ${this.lastName} </h5>
        <h5> Username: ${this.username} </h5>
        <h5> Phone: ${this.phone} </h5>
        <h5> Email: ${this.email} </h5>
      </li>
    </ul>


    `
  }



}
