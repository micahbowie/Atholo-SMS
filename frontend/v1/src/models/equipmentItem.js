class EquipmentItem {

  constructor (id, name, equipmentType, uniqueId, warranty, manufactureId, notes, packId, specs, manual, picture) {
      this.id = id;
      this.name = name;
      this.equipmentType = equipmentType;
      this.uniqueId = uniqueId;
      this.warranty = warranty;
      this.manufactureId = manufactureId;
      this.notes = notes;
      this.packId = packId;
      this.specs = specs;
      this.manual = manual;
      this.picture = picture;
  }


  renderEquipmentItem () {
      let equipmentItemDiv = document.getElementById("equipment-items-container")
      equipmentItemDiv.innerHTML +=
      `
      <ul>
        <li>
          <h3> ${this.name} </h5>
          <h5> ${this.equipmentType} </h5>
          <h5> UID: ${this.uniqueId} </h5>
          <h5> Manufacture Id: ${this.manufactureId} </h5>
          <h5> Warranty: ${this.warranty} </h5>
          <h5> Pack Id: ${this.packId} </h5>
          <h5> notes: ${this.notes} </h5>
        </li>
      </ul>


      `
  }


}
