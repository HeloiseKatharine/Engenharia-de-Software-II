const Pessoa = require('./modulos/Pessoa.js')//importando a classe 

const maria = new Pessoa(80,1.75); //instanciando um objeto
console.log(maria.imc());

const carlos = new Pessoa();
carlos.peso = 100;
carlos.altura = 1.6;
console.log(carlos.imc());




