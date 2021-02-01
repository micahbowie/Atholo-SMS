
#Manager seeds
Manager.create( first_name: 'Micah', last_name: 'Bowie', username: 'micahbowie', phone: 6148097539, email: 'micahbowie20@gmail.com', password_digest: "1234")

#Employee seeds
Employee.create( first_name: 'Ezekiel', last_name: 'Bowie', job_type: 'editor', phone: 6144312189, email: 'ezekielbowie24@gmail.com', age: 15, address:"7841 Cobdon Ave, Westerville Ohio 43081", manager_id: 1, school: "Homeschooled")

Employee.create( first_name: 'Josh', last_name: 'Gallagan', job_type: 'sales', phone: 6146789231, email: 'josh24@gmail.com', age: 45, address:"123 main st", manager_id: 1, school:"DACC")

#Contacts seed
Contact.create( first_name: 'Ezekiel', last_name: 'Bowie', job_title: 'editor', phone: 6144312189, email: 'ezekielbowie24@gmail.com', address: "7841 Cobdon Ave, Westerville Ohio 43081", school: "Homeschooled", company: 'Atholo Sports')

Contact.create( first_name: 'Josh', last_name: 'Gallagan', job_title: 'sales', phone: 6146789231, email: 'josh24@gmail.com', address:"123 main st", school:"DACC", company: "Atholo Sports ")

#equipment_items seeds
EquipmentItem.create( name: 'Panasonic AG-CX350 4K Camcorder',  equipment_type: 'camcorder', manufacture_id: "PCAGCX350", warranty:false , unique_id: "Ath9812", pack_id: 1)

#Pack seeds
Pack.create( name: 'Atholo Game Pack #1',  notes: 'This pack only has one camcorder in it.', unique_id: "Athpck001")

#School seeds
School.create( name: 'New Aalbany',  notes: 'Does not have a soccer team this year', mascot: "Eagles", athletic_conference: "Ohio Capital Conference", address: "123 main st", county: "Franklin County", phone: 6143456789, school_district: "New Albany School District")
