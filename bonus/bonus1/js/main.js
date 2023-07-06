/*
  BONUS 1:
  Continuare il superenalotto se non l'avete finito in classe questa mattina. 
  Potete pensare anche alla grafica del vostro sito e fare le palline con dentro i numeri estratti a caso e informare 
  l'utente con l'HTML quante palline ha beccato, magari evidenziando di un colore diverso le palline beccate!

*/




let numeriVincenti = generatereRandomArray(6, 1, 90);
let numeriUtenteArray = [];
let trovato;


for (let i = 0; i < 6; i++) {

  let numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 90: "));
  if (controllNumberRange(numeroUtente, 1, 90)) {
    numeriUtenteArray.push(numeroUtente);

  } else {
    
    document.getElementById("errorNumbers").classList.remove("d-none");
    document.getElementById("cardContainer").classList.add("d-none");
    console.log("Inserisci solo numeri tra 1 e 90!")
    
    break;
  
  }
  
  let trovato = searchInArray(numeriVincenti, numeriUtenteArray);



}


document.getElementById("numbersRandom").innerHTML ="I Numeri Vincenti sono: " + numeriVincenti;
document.getElementById("numbersUser").innerHTML = "I tuoi Numeri sono: " + numeriUtenteArray;


console.log("numeri random " + numeriVincenti);
console.log("numeri utente " + numeriUtenteArray);

console.log("numeri trovati: " + trovato);


//card fizz
for (let i = 1; i <= 90; i++) {

  let color = numeriVincenti.includes(i) ? 'bg-success' : 'bg-light';

  document.getElementById("cardContainer").innerHTML += `
      <div class="square rounded-circle ${color}">
          <p class="text-center fs-5 fw-3 vertical-align-square shadow">${i}</p>
      </div>
  `;

}

