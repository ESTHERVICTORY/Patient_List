const PatientListArray = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(PatientListArray);

const command = prompt('Choose one: update, delete, add, reorder');

if (command == "updated") {
  const OldPatient = prompt("Old Patient");
  const NewPatient = prompt("NewPatient");
  for (let i = 0; i < PatientListArray.length; i++) {
    if (PatientListArray[i] === OldPatient) {
      PatientListArray[i] = NewPatient;
      alert(PatientListArray);
    }
  
  else if (command == "delete") {
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
      PatientListArray.sort();
      alert(PatientListArray);
    }
    else{alert("Please enter a valid selection")}
  }
}
