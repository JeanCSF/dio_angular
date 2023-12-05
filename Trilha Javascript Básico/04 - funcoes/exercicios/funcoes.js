function escrevaMeuNome(nome) {
    return "Meu nome é: " + nome;
}

escrevaMeuNome('Jean');
escrevaMeuNome('Matheus');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Jean') +', Maior');
    } else {
        console.log('Menor');
    }
}

verificarIdade(26);