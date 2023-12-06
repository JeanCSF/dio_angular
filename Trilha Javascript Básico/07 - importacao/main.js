const { gets, print } = require("./funcoes-auxiliares");
/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/
const qtdAlunos = gets();
let maiorNumero = 0

for (let i = 0; i < qtdAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorNumero){
        maiorNumero = numeroSorteado;
    }
}

print('vencedor: ' + maiorNumero);