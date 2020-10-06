const OperArit = require('./modules/OperArit.js');

var calculadora = new OperArit(10,5);


console.log(calculadora.soma());
console.log(calculadora.subtracao());
console.log(calculadora.multiplicacao());
console.log(calculadora.divisao());
console.log(calculadora.mod());
console.log(calculadora.potencia());
