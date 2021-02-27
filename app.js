// // esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar){
    var yenes = (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
        return yenes;
}

function fromEuroToDollar(euro){
    var dollar1 = euro * oneEuroIs["USD"];
        return dollar1;
}

function fromYenToPound(yen){
    let euro = (yen / oneEuroIs.JPY); //yen a euros
     let conver = euro * oneEuroIs.GBP;
        return conver;
}

console.log(fromDollarToYen(150));
console.log(fromEuroToDollar(150));
console.log(fromYenToPound(1279));