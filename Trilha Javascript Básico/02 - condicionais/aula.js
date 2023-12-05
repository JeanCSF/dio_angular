const precoEtanol = 5.79;
const precoGasolina = 4.89;
const tipoCombustivel = 'Gasolina';
const consumoMedio = 10;
const distancia = 100;

const isGasolina = (tipoCombustivel === 'Gasolina');
if (isGasolina) {
    console.log('Valor gasto: R$ ' + (distancia / consumoMedio * precoGasolina).toFixed(2))
} else {
    console.log('Valor gasto: R$ ' + (distancia / consumoMedio * precoEtanol).toFixed(2))
}