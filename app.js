const fromDollarToYen = function(valueInDollar){
    // convertir el valor dado en dolares a yen
    let valueInYen = valueInDollar * 106.58;
    //devuelve el valor en yen
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){
    // convertir el valor dado en euros a dólares
    let valueInDollar = valueInEuro * 1.2;
    //devuelve el valor en dolares
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    // convertir el valor dado en yen a libras
    let valueInPound = valueInYen * 0.006;
    //devuelve el valor en libras
    return valueInPound;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};