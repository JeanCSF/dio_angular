const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log(soma/notas.length);

const nome = 'Jean Carlos de Santana Ferreira';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)
    
}
