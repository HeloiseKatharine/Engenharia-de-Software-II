function OperRelacional(esquerda, direita){
    this.valoresquerda = esquerda;
    this.valordireita = direita;

    this.maiorq = maior;
    this.menorq = menor;


    function maior(){
        if(this.valoresquerda > this.valordireita){
            return"Valor da esquerda é maior";
        }
        else{
            return "Valor da esquerda não é maior"
        }
    }

    function menor(){
        if(this.valoresquerda < this.valordireita){
            return"Valor da esquerda é menor";
        }
        else{
            return "Valor da esquerda não é menor"
        }
    }
}

module.exports = {OperRelacional};