/*
    1) Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar esste percurso.
*/

class Carro {
    marca;
    cor;
    consumoMedio;

    constructor(marca, cor, consumoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }

    calcularGasto(distancia, precoCombusivel) {
        return distancia * this.consumoMedio * precoCombusivel
    }
}

const celta = new Carro("chevrolet", "preto", 1 / 12);
const uno = new Carro("fiat", "vermelho", 1 / 16);

console.log(uno.calcularGasto(70, 5));
console.log(celta.calcularGasto(70, 5));

