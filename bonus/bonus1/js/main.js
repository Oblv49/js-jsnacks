let numeriVincenti = generatereRandomArray(6, 1, 20);
let numeriUtenteArray = [];
let trovato;


for (let i = 0; i < 6; i++) {

  let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 20: "));
  if (controllNumberRange(numeroUtente, 1, 20)) {
    numeriUtenteArray.push(numeroUtente);

  } else {
    console.log("Inserisci solo numeri tra 1 e 20!")
    break;
  }

  let trovato = searchInArray(numeriVincenti, numeriUtenteArray);



}


console.log("numeri random " + numeriVincenti);
console.log("numeri utente " + numeriUtenteArray);

console.log("numeri trovati: " + trovato);



