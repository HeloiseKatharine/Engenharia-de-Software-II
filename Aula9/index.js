const opi = require('./modules/OperIgualdade.js');
const opir = require('./modules/OperRelacional.js');
const opl = require('./modules/OperLogico.js');

opl.setIdade(30);
console.log(opl.classifIdade());
console.log(opl.classifAluno());
console.log(opl.idadeCorreta());

var obj = new opi.OperIgualdade(10,9);

console.log(obj.igualdade());
console.log(obj.diferenca());

var objr = new opir.OperRelacional(10,10);

console.log(objr.maiorq());

console.log(objr.menorq());
