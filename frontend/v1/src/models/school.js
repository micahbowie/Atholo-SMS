class School {

  constructor(id, name, phone, address, mascot, athleticConference, county, schoolDistrict, website, notes){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.mascot = mascot;
    this.athleticConference = athleticConference;
    this.county = county;
    this.schoolDistrict = schoolDistrict;
    this.website = website;
    this.notes = notes;
  }

  renderSchool() {
      let schoolDiv = document.getElementById("schools-container")
      schoolDiv.innerHTML +=
      `
      <ul>
        <li>
          <h3> ${this.name} |  ${this.mascot}</h3>
          <h5> ${this.phone} - ${this.website}</h5>
          <h5> Address: ${this.address} </h5>
          <h5> ${this.athleticConference} </h5>
          <h5> County: ${this.phone} </h5>
          <h5> School District: ${this.schoolDistrict}</h5>
          <h5> notes: ${this.notes} </h5>
        </li>
        <button class="delete-bttn" data-id=${this.id}> Remove School </button>
      </ul>


      `
  }
}
