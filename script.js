const tabellone = document.querySelector("#tabellone");
const estraiNumeroButton = document.querySelector("#estraeNumero");
let numeriEstratti = [];

function creaTabellone() {
  for (let i = 1; i <= 76; i++) {
    const cell = document.createElement("td");
    cell.textContent = i;
    cell.dataset.numero = i;
    tabellone.appendChild(cell);
  }
}

creaTabellone();
