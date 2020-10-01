/*
class <nome_classe>
{

}
*/

class Pessoa {
    
    constructor(peso, altura) {//construtor
        this.peso = peso;
        this.altura = altura;
    }
     
    imc(){ //function
        let imc = this.peso / (this.altura **2);
        return imc;
    } 
}

module.exports = Pessoa; //classe não precisa de {} 