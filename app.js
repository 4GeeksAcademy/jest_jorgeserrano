const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = (valueInDollar / 1.07) * 127.9;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras
    let valueInPound = (valueInYen / 127.9) * 0.8;
    // Retornamos el valor en libras
    return valueInPound;
}
module.exports = { fromEuroToDollar }
