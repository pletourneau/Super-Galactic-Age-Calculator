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
  document.getElementById("p1").innerText = name + ", you are " + galAge + " years old on the planet of " + planetChecked;
}

function diffYears(event) {
  event.preventDefault();
  const name = document.getElementById("nameInput2").value;
  const curAge = document.getElementById("currentAgeInput2").value;
  const othAge = document.getElementById("otherAgeInput2").value;
  const newPerson2 = new Person(name, curAge);
  
  document.getElementById("form2").reset();
  document.getElementById("p2").innerText = newPerson2.diff(othAge);

}  

window.addEventListener("load", function() {
  document.getElementById("form1").addEventListener("submit", handleGalacticForm);
  document.getElementById("form2").addEventListener("submit", diffYears);
});
