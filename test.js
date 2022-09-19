test("One euro should be 1.2 dollars", function(){
    //importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    // hago la prueba
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 143.19 yens", function(){
    //importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(4.2)
    const expected = 4.2 * 143.19;
    // hago la prueba
     expect(fromDollarToYen(4.2)).toBe(601.398); 
})

test("One yen should be 0.006 pounds", function(){
    //importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(601.398)
    const expected = 601.398 * 0.006;
    // hago la prueba
    expect(fromYenToPound(601.398)).toBe(3.608388);
})
