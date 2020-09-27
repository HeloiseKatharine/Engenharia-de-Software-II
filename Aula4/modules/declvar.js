//variáveis 
function modulo() {
    var x = 6;

    console.log(x);

    const y = "a"; //Não permite atualizações(não aceita novas atribuições de valores )

    //y = "b";//apresenta um erro 

    console.log(y);

    //variaveis locais 

    {//bloco 
        let z = 4;//só demostrar o valor da variavel DENTRO DO BLOCO e permite a atribuição de valores
        console.log(x);
        console.log(y);
        console.log(z);
    }
    //console.log(z);//erro | não está definida (fora do bloco)
}
module.exports = {modulo};//Disponibiliza a função modulo()
