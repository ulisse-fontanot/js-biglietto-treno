var eta;
var km;

km = prompt("Quanti kilometri devi percorrere? ");
console.log(km);

eta = prompt("Quanti anni hai? ");
console.log(eta);


var prezzo = km * 0.21;
console.log(prezzo);
document.getElementById('prezzo').innerHTML += prezzo;

if (eta < 18) {
  var prezzoMinore = prezzo - (prezzo / 100 * 20);
  console.log(prezzoMinore);
  document.getElementById('prezzoMinore').innerHTML = "Con lo sconto per minorenni: " + prezzoMinore + "€";
} else if (eta > 65) {
  var prezzoMaggiore = prezzo - (prezzo / 100 * 40);
  console.log(prezzoMaggiore);
  document.getElementById('prezzoMaggiore').innerHTML = "Con lo sconto per over 65: " + prezzoMaggiore + "€";
}
