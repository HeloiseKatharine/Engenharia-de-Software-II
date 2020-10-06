//JSON Notação de Objetos JavaScript 

const obj = {
    nome: "Heloise",
    idade: 0,

    setIdade: function(idade){
        this.idade = idade;
    },

    classifIdade: function(){
        if(this.idade >= 0 && this.idade < 13) 
            return "Criança."
       else if(this.idade >= 13 && this.idade < 19) return "Jovem"
       else return "Adulto"
    },

    classifAluno: function(){
        if((this.idade >= 0 && this.idade < 13) || (this.idade >=13 && this.idade < 19) ) return "Aluno"
        else return "Não é um aluno"
    }, 

    idadeCorreta: function(){
        if(!(this.idade < 0)) return "Idade Correta"
        else return "Idade Incorreta"
    }

}
module.exports = obj;