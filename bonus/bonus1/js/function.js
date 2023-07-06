//------------------ function -----------------


//genera numeri random dato un minimo ed un massimo d un numero di numeri da estrarre
function generatereRandomArray(numbersOfElements, minInterval, maxInterval) {

    let arrayOfNumbers = [];

    for (let i = 0; i < numbersOfElements; i++) {

        let randomNumber = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;

        if (!arrayOfNumbers.includes(randomNumber)) {

            arrayOfNumbers.push(randomNumber);

        }

    }

    return arrayOfNumbers;
}


//cerca e compare due array
function searchInArray(array, elementToSearch) {
    
    let numeriTrovati = [];
  
    for (let i = 0; i < array.length; i++) {
      
        if (elementToSearch.includes(array[i])) {
            
            numeriTrovati.push(array[i]);
        
        }
        
    }
  
    return numeriTrovati;
  
}

//controllo se dei numeri si trovano dentro un determinato range
function controllNumberRange(number, minInterval, maxInterval) {

    if (number >= minInterval && number <= maxInterval) {
        return true;
    } else {
        return false;
    }

}
