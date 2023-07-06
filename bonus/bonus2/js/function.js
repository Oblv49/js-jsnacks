//------------------ function -----------------

function sommaNumeri(array) {
    
    let somma = 0;
    
    for (let i = 0; i < array.length; i++) {
        somma = array[i] + somma;
    }

    return somma;
}

function mediaAritmetica(somma, numberOfNumbers) {
   
    let media = somma / numberOfNumbers;
    return media;

}

function arrayStringToInt(arrayString, arrayNumbersInt) {
    
    for(let i = 0; i < arrayString.length; i++){
        
        arrayNumbersInt.push(parseInt(arrayString[i]));
    
    }

}