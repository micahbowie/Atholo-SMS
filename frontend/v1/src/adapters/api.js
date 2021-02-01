class API {

    constructor(port = 3000) {
      this.url = `http://localhost:${port}/api/v1`
    }


  // Helpers //

   parseJSON = response => {
     if (response.status === 200) {
       return response.json()
     } else {
       throw console.error("Nope")
     }
   }

   headers = {"Accepts": "application/json", "Content-Type": "application/json"}

   // Employee(s) //

   get employeesURL() {
     return this.url + '/employees'
   }



     // Requests //
      fetchEmployees = () => {
         fetch(this.employeesURL)
         .then(this.parseJSON)
         .then(employees => {
           for (const employee of employees){
             let emply = new Employee(employee.id, employee.first_name, employee.last_name, employee.age, employee.school, employee.address, employee.phone, employee.email, employee.snapchat, employee.instagram, employee.linkedin, employee.major, employee.career_path, employee.manager_id, employee.notes)
             emply.renderEmployee();
           }
         })
      }

   fetchEmployee = (id) => {
     return fetch(this.employeesURL + `/${id}`)
     .then(this.parseJSON)
     .then(employee => {
         let emply = new Employee(employee.id, employee.first_name, employee.last_name, employee.age, employee.school, employee.address, employee.phone, employee.email, employee.snapchat, employee.instagram, employee.linkedin, employee.major, employee.career_path, employee.manager_id, employee.notes)
         emply.renderEmployee();

     })
   }



   deletePokemon = (id) => {
     return fetch(this.pokemonURL + `/${id}`, {
       method: "DELETE",
       headers: this.headers
     }).then(this.parseJSON)
   }


   // Equipment Item(s) //

   get equipmentItemsURL() {
     return this.url + '/equipment_items'
   }
      // Requests //
   fetchEquipmentItems = () => {
     return fetch(this.equipmentItemsURL).then(this.parseJSON)
   }

   fetchEquipmentItem = (id) => {
     return fetch(this.equipmentItemsURL + `/${id}`).then(this.parseJSON)
   }

    // Manager(s) //

    get managersURL() {
      return this.url + '/managers'
    }

       // Requests //
    fetchManagers = () => {
      return fetch(this.managersURL).then(this.parseJSON)
    }

    fetchManager = (id) => {
      return fetch(this.managersURL + `/${id}`).then(this.parseJSON)
    }


    // School(s) //

    get schoolsURL() {
      return this.url + '/schools'
    }

       // Requests //
    fetchSchools = () => {
      return fetch(this.schoolsURL).then(this.parseJSON)
    }

    fetchSchool = (id) => {
      return fetch(this.schoolsURL + `/${id}`).then(this.parseJSON)
    }


    // Contact(s) //

    get contactsURL() {
      return this.url + '/contacts'
    }

       // Requests //
    fetchContacts = () => {
      return fetch(this.contactsURL).then(this.parseJSON)
    }

    fetchContact = (id) => {
      return fetch(this.contactsURL + `/${id}`).then(this.parseJSON)
    }



}
