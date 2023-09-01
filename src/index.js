// import Person from './galactic.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/styles.css';

function handleGalacticForm(event) {
  event.preventDefault();
  const planet = document.querySelector("input[name='planet']:checked").value;
  console.log(planet);
  // do stuff here
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleGalacticForm);
});
