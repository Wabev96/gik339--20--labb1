const checkboxElement = document.getElementsByClassName("checkbox")[0]; // Checkboxen

const textFieldsCollection = document.querySelectorAll(".textfield"); // Alla textfält

const buttonElement = document.querySelector(".delete-button"); // Knappen

const divElement = document.querySelector(".tom-div"); // Div-elementet

// Uppgift 5
function handleInputChange(event) {
  // Ta emot eventobjektet som skickas i bakgrunden när eventlyssnaren triggas.
  const e = event;

  // Skriv ut till konsolen vilket inputfält som genererade eventet.
  console.log("avsändaren:", e.target);

  // Ta reda på inputfältets name-attribut. Innehållet i name-attributet kan lämpligen lagras i en variabel.
  const fieldName = e.target.name;

  // Om name-attributet är ”content”, ska innehållet i inputfältet skrivas ut till div-elementet.
  if (fieldName === "content") {
    // Ge div-elementet ett innehåll.
    divElement.innerHTML = e.target.value;
  }
}
//uppgift 6
// eventlyssnare för checkboxen
checkboxElement.addEventListener("change", handleInputChange);

// eventlyssnare för varje textfält i textFieldsCollection
textFieldsCollection.forEach(function (textField) {
  textField.addEventListener("input", handleInputChange);
  //textField.addEventListener("blur", handleInputChange);
});

const colorInput = document.getElementById("color");
// Eventlyssnare för checkboxen
checkboxElement.addEventListener("change", function () {
  // Vid förändring i checkboxen ska div-elementet ändra bakgrundsfärg
  const backgroundColor = colorInput.value;
  divElement.style.backgroundColor = backgroundColor;
});

// Eventlyssnare för knappen
buttonElement.addEventListener("click", function () {
  // div-elementet tas bort.
  divElement.innerHTML = "";
});
