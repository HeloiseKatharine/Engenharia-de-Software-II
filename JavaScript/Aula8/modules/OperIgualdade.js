function OperIgualdade(esquerda, direita){
    this.valoresquerda = esquerda;
    this.valordireita = direita;

    this.igualdade = Igual; //função igualdade que executa a função Igual (Pode ser usada externamente(pública)) 
    this.diferenca = Diferente;

    function Igual(){
        if(this.valoresquerda == this.valordireita){
            return "Valores iguais";
        }
        else{
            return "Valores não são iguais";
        }
    }

    function Diferente(){
        if(this.valoresquerda != this.valordireita){
            return "Valores diferentes."
        }else{
            return "Valores não são diferentes."
        }
    }
}

module.exports = {OperIgualdade}

/*
=== compara igualdade de valor e tipo
!== compara diferença de valor e tipo 
*/