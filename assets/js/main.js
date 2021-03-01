// CHIEDO NUMERO KM E SALVO IN VARIABILE
var numeroChilometri = parseFloat(prompt("Quanti km vuoi percorrere? (Inserisci un valore in cifre)"));

// CHIEDO ETA PASSEGGERO E SALVO IN VARIABILE
var etaPasseggero = parseInt(prompt("Quanti anni hai? (Inserisci un valore in cifre)"));

console.log(numeroChilometri, etaPasseggero);

// CALCOLO PREZZO BASE E SALVO IN VARIABILE
var prezzoBase = 0.21 * numeroChilometri;

console.log(prezzoBase);

// INSERISCO VARIABILI PER SCONTI DEL 20 E 40
var sconto20 = prezzoBase * 20 / 100;

var sconto40 = prezzoBase * 40 / 100;

// RESTITUISCO DEGLI ALERT SE I DATI INSERITI NON SONO VALORI  NUMERICI O SE L'ETA' NON E' UN NUMERO REALISTICO, ALTRIMENTI CALCOLO IL PREZZO FINALE DEL BIGLIETTO E LO STAMPO  NEL DOM NELL'ELEMENTO CON ID PREZZOFINALE
if (isNaN(numeroChilometri) || isNaN(etaPasseggero)){
  alert("I dati che hai inserito non sono corretti. Ricordati di inserire dati numerici.");
} else if (etaPasseggero < 0 || etaPasseggero > 120){
  alert("L'età che hai inserito non è valida. Inserisci valori compresi tra 0 e 120");
} else {
    if (etaPasseggero < 18) {
      document.getElementById("prezzofinale").innerHTML= Math.round((prezzoBase - sconto20) * 100) / 100 + " euro (scontato del 20%).";
    } else if (etaPasseggero > 65) {
      document.getElementById("prezzofinale").innerHTML= Math.round((prezzoBase - sconto40) * 100) / 100 + " euro (scontato del 40%).";
    } else {
      document.getElementById("prezzofinale").innerHTML= Math.round(prezzoBase * 100) / 100 + " euro.";
    }
  }
