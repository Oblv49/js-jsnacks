/*

    BONUS 3:
    Creare una funzione che dato un array di stringhe o di numeri mi restituisca il 
    numero di volte che un elemento è presente dentro quell'array. Ad esempio se ho un array con dei numeri mi dica quante 
    volte il numero 2 compare dentro l'array.
 
*/

//chiedere all'utente se vuole  inserire delle parole o dei numeri
let choiseTypeArray = parseInt(prompt("Se vuoi inserire delle PAROLE digita '1' o  se vuoi inserire dei NUMERI digita '2'."));
let arrayWords = [];
let arrayNumbers = [];

//creazione degli array in base alla scelta dell'utente
  if (choiseTypeArray == 1) {
    
    //arrai PAROLE da prompt utente
    let lengthArrayWords = parseInt(prompt("Inserisci quante parole vuoi inserire: "));
    
    for (let i = 0; i < lengthArrayWords; i++) {
        let word = prompt("Inserisci una parola: ");
        arrayWords.push(word);
    }
    
    console.log("parole inserite nell'array: " + arrayWords);

    //chiedere la PAROLA da ricercare nell'array creato
    let wordToFind = prompt("Inserisci la parola da cercare.")
    let numbersInstancesWord = countElement(arrayWords, wordToFind);

    if (numbersInstancesWord == 0) {
      console.log("La parola cercata non è presente.")
    } else {
      console.log("La parola " + wordToFind + " è presente " + numbersInstancesWord);
    }
 
  } else if (choiseTypeArray == 2) {
   
    //array NUMERI da prompt utente
    let lengthArrayNumbers = parseInt(prompt("Indica quanti numeri vuoi inserire: "));
    
    for (let i = 0; i < lengthArrayNumbers; i++) {
        let number = parseInt(prompt("Inserisci un numero: "));
        arrayNumbers.push(number);
    }
  
    console.log("numeri inserite nell'array: " + arrayNumbers);

    //chiedere il NUMERO da ricercare nell'array creato
    let numberToFind = parseInt(prompt("Inserisci il numero da cercare."));
    let numbersInstancesNumber = countElement(arrayNumbers, numberToFind);

    if (numbersInstancesNumber == 0) {
      console.log("Il numero cercato non è presente.")
    } else {
      console.log("Il numero " + numberToFind + " è presente " + numbersInstancesNumber);
    }

  } else {
    
    console.log("Inserisci un valore valido. 1 o 2.")
  }


  

 
