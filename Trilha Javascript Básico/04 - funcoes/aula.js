function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
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

function calcularValorFinal(precoInicial, condicaoPagamento, tipoPagamento, qtdParcelas) {
    const ehAVista = (condicaoPagamento === 1 || condicaoPagamento === 2);
    if (ehAVista) {
        if (tipoPagamento === 'Débito') {
            console.log('valor a ser pago: R$ ' + (precoInicial - (precoInicial * 10) / 100));
        } else {
            console.log('valor a ser pago: R$ ' + (precoInicial - (precoInicial * 15) / 100));
        }
    } else {
        if (qtdParcelas > 2) {
            console.log('valor a ser pago: R$ ' + (precoInicial + (precoInicial * 10) / 100) / qtdParcelas + ' por mês, totalizando: R$ ' + (precoInicial + (precoInicial * 10) / 100));
        } else {
            console.log('valor a ser pago: R$ ' + (precoInicial / qtdParcelas) + ' por mês, totalizando: R$ ' + precoInicial);
        }
    }
}

function imcMain() {
    const peso = 75;
    const altura = 1.78;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

function precoMain() {
    const precoInicial = 100;
    const condicaoPagamento = 2;
    const tipoPagamento = 'PIX';
    const qtdParcelas = 5;
    calcularValorFinal(precoInicial, condicaoPagamento, tipoPagamento, qtdParcelas);
}
precoMain();

