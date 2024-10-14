//Richiesta chilometri
let km = prompt("Quanti chilometri hai intenzione di percorrere?")
//Richiesta Eta'
let age = prompt("Quanit anni hai?")
//Calcolo costo base biglietto 0,21$ a chilometro
let bigliettoBase = km * 0.21
//Scelta dello sconto
//minorenni sconto 20%
//Pui di 65 anni sconto del 40%
if (age < 18) {
    let sconto = bigliettoBase * 20 / 100
    console.log("Il costo del biglietto e': " + sconto + "€")
}
else if (age > 65) {
    let sconto = bigliettoBase * 40 / 100
    console.log("Il costo del biglietto e': " + sconto + "€")
}
else {
    console.log("Il costo del biglietto e': " + bigliettoBase + "€")
}
//Output prezzo finale