/*

    BONUS 2:
    Chiedi un numero di 4 cifre all’utente. Usa la funzione sommaNumeri per calcolare la somma di tutte le cifre che compongono 
    il numero e ritorni il risultato. Usa questa funzione per stampare poi a video il risultato ottenuto. 
    Ad es: 1286 la somma di tutti le sue cifre sarà 17!
 
*/

let numberUserPrompt = prompt("Inserisci un numero di 4 cifre:");
let number = parseInt(numberUserPrompt);
let arreyNumbersInt = [];

if (!isNaN(number) && numberUserPrompt.length == 4) {

  let arrayNumberString = Array.from(numberUserPrompt);
  arrayStringToInt(arrayNumberString, arreyNumbersInt);

  let result = sommaNumeri(arreyNumbersInt);
  
  console.log("La somma delle cifre del numero", number, "è", result);

} else {
  console.log("Input non valido. Assicurati di inserire un numero di 4 cifre.");
}