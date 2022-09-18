test("One euro should be 1.2 dollars", function(){
    //importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    // hago la prueba
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 106.58 yens", function(){
    //importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(4.2)
    const expected = 4.2 * 106.58;
    // hago la prueba
     expect(fromDollarToYen(4.2)).toBe(447.636); 
})

test("One yen should be 0.006 pounds", function(){
    //importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(447.63)
    const expected = 447.636 * 0.006;
    // hago la prueba
    expect(fromYenToPound(447.63)).toBe(2.68578);
})
