class Employee {

  constructor (id, firstName, lastName, age, school, address, phone, email, snapchat, instagram, linkedin, major, careerPath, managerId, notes) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.school = school;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.snapchat = snapchat;
      this.instagram = instagram;
      this.linkedin = linkedin;
      this.major = major;
      this.careerPath = careerPath;
      this.managerId = managerId;
      this.notes = notes;
  }


  renderEmployee () {
      let employeeDiv = document.getElementById("employees-container")
      employeeDiv.innerHTML +=
      `
      <ul>
        <li>
          <h3> ${this.firstName} ${this.lastName} </h5>
          <h5> Age: ${this.age} </h5>
          <h5> School: ${this.school} </h5>
          <h5> Address: ${this.address} </h5>
          <h5> Phone: ${this.phone} </h5>
          <h5> Email: ${this.email} </h5>
          <h5> notes: ${this.notes} </h5>
        </li>
        <button class="delete-bttn" data-id=${this.id}> Remove Employee </button>
      </ul>


      `
  }

  renderEmployeeTable() {
      let employeeRow = document.getElementById("input-employee-row")
      employeeRow.innerHTML +=
      `
          <TR>
            <TD>${this.firstName}</TD>
            <TD>${this.lastName}</TD>
            <TD>${this.age}</TD>
            <TD>${this.school}</TD>
            <TD>${this.address}</TD>
            <TD>${this.phone}</TD>
            <TD>${this.email}</TD>
          </TR>
      `
  }

}
