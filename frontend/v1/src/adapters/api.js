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
             emply.renderEmployeeTable();
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
             let item = new EquipmentItem(equipmentItem.id, equipmentItem.name, equipmentItem.equipment_type, equipmentItem.warranty, equipmentItem.manufacture_id, equipmentItem.notes, equipmentItem.pack_id, equipmentItem.specs, equipmentItem.unique_id, equipmentItem.manual, equipmentItem.picture)
             item.renderEquipmentItem();
           }
         })
      }

      fetchEquipmentItem = (id) => {
         fetch(this.equipmentItemsURL)
         .then(this.parseJSON)
         .then(equipmentItem => {
             let item = new EquipmentItem(equipmentItem.id, equipmentItem.name, equipmentItem.equipment_type, equipmentItem.warranty, equipmentItem.manufacture_id, equipmentItem.notes, equipmentItem.pack_id, equipmentItem.specs, equipmentItem.unique_id, equipmentItem.manual, equipmentItem.picture)
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
           fetch(this.schoolsURL)
           .then(this.parseJSON)
           .then(schools => {
             for (const school of schools){
               let schl = new School(school.id, school.name, school.phone, school.address, school.mascot, school.athletic_conference, school.county, school.school_district, school.website, school.notes)
               schl.renderSchool();
             }
           })
        }

     fetchSchool = (id) => {
       return fetch(this.schoolsURL + `/${id}`)
       .then(this.parseJSON)
       .then(school => {
         let schl = new School(school.id, school.name, school.phone, school.address, school.mascot, school.athletic_conference, school.county, school.school_district, school.website, school.notes)
         schl.renderSchool();

       })
     }



    // Contact(s) //

    get contactsURL() {
      return this.url + '/contacts'
    }

      // Requests //
       fetchContacts = () => {
          fetch(this.contactsURL)
          .then(this.parseJSON)
          .then(contacts => {
            for (const contact of contacts){
              let cntct = new Contact(contact.id, contact.first_name, contact.last_name, contact.phone, contact.alt_phone, contact.email, contact.alt_email, contact.company, contact.website, contact.job_title, contact.department, contact.address, contact.notes, contact.school, contact.school_id)
              cntct.renderContact();
            }
          })
       }

    fetchContact = (id) => {
      return fetch(this.contactsURL + `/${id}`)
      .then(this.parseJSON)
      .then(contact => {
        let cntct = new Contact(contact.id, contact.first_name, contact.last_name, contact.phone, contact.alt_phone, contact.email, contact.alt_email, contact.company, contact.website, contact.job_title, contact.department, contact.address, contact.notes, contact.school, contact.school_id)
        cntct.renderContact();

      })
    }

}
