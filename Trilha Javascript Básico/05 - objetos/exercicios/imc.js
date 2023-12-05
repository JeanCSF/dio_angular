/*
    2) Crie uma classe para apresentar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor de seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return imc.toFixed(2) + ', Abaixo do peso';
        } else if (imc <= 25) {
            return imc.toFixed(2) + ', Peso normal';
        } else if (imc <= 30) {
            return imc.toFixed(2) + ', Acima do peso';
        } else if (imc <= 40) {
            return imc.toFixed(2) + ', Obeso';
        } else {
            return imc.toFixed(2) + ', Obesidade grave';
        }
    }
};

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());