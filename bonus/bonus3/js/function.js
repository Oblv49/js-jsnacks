//------------------ function -----------------

function countElement(array, elementToFind) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == elementToFind) {
            count++;
        } 
    }

    return count;
}

function arrayStringToInt(arrayString, arrayNumbersInt) {
    
    for(let i = 0; i < arrayString.length; i++){
        
        arrayNumbersInt.push(parseInt(arrayString[i]));
    
    }

}