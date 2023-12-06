// 2) Crie um programa que seja capaz de percorrer um lista de n´meros e imprima cada número par encontrado

const numeros = [45, 12, 78, 29, 63, 17, 50, 94, 36, 81]
let pares = [];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        pares.push(numeros[i]);
    }
}
console.log('lista: ' + numeros);
console.log('os numeros pares encontrados foram: ' + pares);