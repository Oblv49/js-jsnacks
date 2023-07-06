/*
  BONUS 4:
  Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma. 
  Per palindroma di intende una parola che letta da sinistra a destra e da destra a sinistra si legge uguale. 
  Trovate in internet un sacco di parole palindrome, un esempio è ANNA.Fate un programma in cui chiedete la parola all'utente e gli 
  comunicate dunque se la parola è palindroma o meno usando la funzione appena creata!

*/


//chiedo la parola all'utente e la trasformo in array
let word = prompt("Inserisci una parola per scoprire se è Palindroma!");
let arrayWord = Array.from(word);

console.log("La parola che hai scelto è: " + arrayWord);

//uso la funzione per invertire l'array
let arrayWordInverted = [];
reverseArray(arrayWord, arrayWordInverted);

console.log("La parola invertita è: " + arrayWordInverted);

//confronto gli array se sono uguali la parola è palindroma sennò no
let isPalindrome = compareArray(arrayWord, arrayWordInverted);

if (isPalindrome) {
  console.log("La parola è palindroma!");
} else {
  console.log("La parola non è palindroma!");
}