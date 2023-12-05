class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, nasci em ${this.anoNascimento}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p2.nome} e ${p1.nome}, tem a mesma idade`);
    }
}

const jean = new Pessoa("Jean", 26);
const matheus = new Pessoa("Matheus", 25);

compararPessoas(jean, matheus);

// const jean = {
//     nome: 'Jean Carlos',
//     idade: 26,
//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     },
// };

