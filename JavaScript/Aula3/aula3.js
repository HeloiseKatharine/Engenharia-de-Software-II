/*
function <nome da função> (parâmetros)
{

}
*/

/*function somar()
{
    var x, y; x = 10; y = 10;
    var soma = x + y;
    console.log(soma) 
}

somar();*/

//outro modo de fazer 
/*
const somar = function() {
    var x, y; x = 10; y = 10;
    var soma = x + y;
    console.log(soma)
}
somar();
*/

/*
const somar = function(x, y) {
    var soma = x + y;
    console.log(soma)
}

somar(5,6);
somar(10,15);
somar(5.5,8.6);

*/


const somar = function(x, y) {
    var soma = x + y
    return soma
}
var z = somar(4,2)
console.log(z)
