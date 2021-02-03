class Contact {

  constructor(id, firstName, lastName, phone, altPhone, email, altEmail, company, website, jobTitle, department, address, notes, school, schoolId, ){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.school = school;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.altPhone = altPhone;
    this.altEmail = altEmail;
    this.website = website;
    this.jobTitle = jobTitle;
    this.department = department;
    this.schooldId = schoolId;
    this.notes = notes;

  }



  renderContact () {
      let contactDiv = document.getElementById("contacts-container")
      contactDiv.innerHTML +=
      `
      <ul>
        <li>
          <h3> ${this.firstName} ${this.lastName} </h3>
          <h5> ${this.company} | ${this.department}</h5>
          <h5> ${this.school} </h5>
          <h5> Phone: ${this.phone}  | alt: ${this.altPhone}</h5>
          <h5> Email: ${this.email}  | alt: ${this.altEmail}</h5>
          <h5> School: ${this.school} </h5>
          <h5> Address: ${this.address} </h5>
          <h5> Email: ${this.website} </h5>
          <h5> notes: ${this.notes} </h5>
        </li>
        <button class="delete-bttn" data-id=${this.id}> Delete Contact </button>
      </ul>


      `
  }

}
