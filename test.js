// importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('from 150 dolars to equal 15987.5 yenes', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    const total = fromDollarToYen(150);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(15987.5);
});

// comienza tu primera prueba
test('from 150 Euro to equal 180 Dollar', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    const total = fromEuroToDollar(150);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(180);
});

// comienza tu primera prueba
test('from 1279 yen to equal 8 pounds', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    const total = fromYenToPound(1279);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(8);
});