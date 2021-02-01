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


  //Helpers//
  parseJSON = response => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw console.error("Nope")
    }
  }


  renderManager () {

  }



}
