const OperArit = require('./modules/OperArit.js');

var calculadora = new OperArit(10, 5);

/*
if(condição){...}
*/
var x, y; x = true; y = false;

if (y) {//se for true 
    console.log(calculadora.soma());
    console.log(calculadora.subtracao());
}
if (x) {//se for true 
    console.log(calculadora.multiplicacao());
    console.log(calculadora.divisao());
    console.log(calculadora.mod());
    console.log(calculadora.potencia());
}