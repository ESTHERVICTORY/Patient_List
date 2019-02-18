const PatientListArray = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(PatientListArray);

const command = prompt('Choose one: update, delete, add, reorder');

if (command == "update") {
  const OldPatient = prompt("Old Patient");
  const NewPatient = prompt("NewPatient");
  for (let i = 0; i < PatientListArray.length; i++) {
    if (PatientListArray[i] === OldPatient) {
      PatientListArray[i] = NewPatient;
      alert(PatientListArray);
    }
  }
}
  else if (command == "delete") {
    const OldPatient = prompt("Old Patient");
    for (let i = 0; i < PatientListArray.length; i++) {
      if (PatientListArray[i] === OldPatient) {
        PatientListArray[i] = "";
        alert(PatientListArray);
      }
    }
  }
  else if (command == "add") {
    for (let i = 0; i < 3; i++){
      PatientListArray.push(prompt('Enter Patient Names'));
     }
     alert(PatientListArray);
    }
   else if (command == "reorder") {
      alert(PatientListArray + " is the current order ");
      PatientListArray.sort();
      alert(PatientListArray + " is the new order");
    }
    else{alert("Please enter a valid selection")}
  
