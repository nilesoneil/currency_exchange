import {PlanetaryAgeOfConsentCalculator} from "./calculations";

function component() {
  const val = document.getElementById("bde").value;
  const planet = document.getElementById("planet").value;
  const dc = new PlanetaryAgeOfConsentCalculator(val);
  document.getElementById("bdeEnergy").innerHTML = dc.calculateAgeOnPlanet(planet) + " BIG DIC ENERGY";
}
window.addEventListener('load', () => {
  document.getElementById("bdeButton").addEventListener("click", component);
});
