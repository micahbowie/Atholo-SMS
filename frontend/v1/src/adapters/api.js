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



   // Equipment Item(s) //

   get equipmentItemsURL() {
     return this.url + '/equipment_items'
   }
      // Requests //
      fetchEquipmentItems = () => {
         fetch(this.equipmentItemsURL)
         .then(this.parseJSON)
         .then(equipmentItems => {
           for (const equipmentItem of equipmentItems){
             let item = new EquipmentItem(equipmentItem.id, equipmentItem.name, equipmentItem.equipmentType, equipmentItem.uniqueId, equipmentItem.warranty, equipmentItem.manufactureId, equipmentItem.notes, equipmentItem.packId, equipmentItem.specs, equipmentItem.manual, equipmentItem.picture)
             item.renderEquipmentItem();
           }
         })
      }

      fetchEquipmentItem = (id) => {
         fetch(this.equipmentItemsURL)
         .then(this.parseJSON)
         .then(equipmentItem => {
             let item = new EquipmentItem(equipmentItem.id, equipmentItem.name, equipmentItem.equipmentType, equipmentItem.uniqueId, equipmentItem.warranty, equipmentItem.manufactureId, equipmentItem.notes, equipmentItem.packId, equipmentItem.specs, equipmentItem.manual, equipmentItem.picture)
             item.renderEquipmentItem();
         })
      }

    // Manager(s) //

    get managersURL() {
      return this.url + '/managers'
    }

       // Requests //
       fetchManagers = () => {
          fetch(this.managersURL)
          .then(this.parseJSON)
          .then(managers => {
            for (const manager of managers){
              let mngr = new Manager(manager.id, manager.first_name, manager.last_name, manager.username, manager.phone, manager.email)
              mngr.renderManager();
            }
          })
       }

     fetchManager = (id) => {
      return fetch(this.managersURL + `/${id}`)
      .then(this.parseJSON)
      .then(manager => {
          let mngr = new Manager(manager.id, manager.first_name, manager.last_name, manager.username, manager.phone, manager.email)
          mngr.renderManager();

      })
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
