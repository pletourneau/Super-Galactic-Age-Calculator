import Person from './galactic.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';

function handleGalacticForm(event) {
  event.preventDefault();
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;
  const newPerson = new Person(name, age);
  let planet = document.querySelector("input[name='planet']:checked").value;
  document.querySelector("p").innerText = planet;
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleGalacticForm);
});
