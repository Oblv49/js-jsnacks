//------------------ function -----------------

function sommaNumeri(array) {
    
    let somma = 0;
    
    for (let i = 0; i < array.length; i++) {
        somma = array[i] + somma;
    }

    return somma;
}