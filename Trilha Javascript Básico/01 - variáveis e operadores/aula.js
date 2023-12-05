const precoCombustivel = 5.79;
const consumoMedio = 12;
const distancia = 1580;

console.log('Valor gasto: R$ ' + (distancia / consumoMedio * precoCombustivel).toFixed(2))