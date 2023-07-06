//------------------ function -----------------

//inverte gli indici di un array in un nuovo array
function reverseArray(array, reversedArray) {
    

    for (let i = array.length - 1; i >= 0; i--) {
        
        reversedArray.push(array[i]);
    
    }

    return reversedArray;
}


//compare due array e dice se sono uguali
function compareArray(array1, array2) {
    
    for (let i = 0; i < array1.length; i++) {
        
        if (array1[i] != array2[i]) {
            return false;
        }
    }

    return true;

}
