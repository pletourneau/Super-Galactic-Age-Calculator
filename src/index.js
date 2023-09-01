import Person from './galactic.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';

function handleGalacticForm(event) {
  event.preventDefault();
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;
  const newPerson = new Person(name, age);
  let planetChecked = document.querySelector('input[name="planet"]:checked').value;
  let galAge = "";
  switch (planetChecked) {
  case "Mercury":
    galAge = newPerson.mercuryAge();
    break;
  case "Venus":
    galAge = newPerson.venusAge();
    break;
  case "Mars":
    galAge = newPerson.marsAge();
    break;
  case "Jupiter":
    galAge = newPerson.jupiterAge();
    break; 
  default:
    galAge = age;
  }
  document.getElementById("form1").reset();
  document.getElementById("p1").innerText = "You are " + galAge + " years old on the planet of " + planetChecked;
  


}

window.addEventListener("load", function() {
  document.getElementById("form1").addEventListener("submit", handleGalacticForm);
});
