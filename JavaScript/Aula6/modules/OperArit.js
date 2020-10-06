class OperArit{
    constructor(var1, var2){
        this.var1 = var1;
        this.var2 = var2;
    }
    soma(){
        return (this.var1 + this.var2);//soma "+"
    }
    subtracao(){
        return (this.var1 - this.var2);//subtração "-"
    }
    multiplicacao(){
        return (this.var1 * this.var2);
    }
    divisao(){
        return(this.var1 / this.var2);
    }
    mod(){
        return(this.var1 % this.var2);
    }
    potencia(){
        return(this.var1 ** this.var2);
    }
}

module.exports = OperArit;