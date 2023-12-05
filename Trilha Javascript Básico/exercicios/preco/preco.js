/*
    3) Elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adeuqado.

    Código condição de pagamento
    - À vista débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoInicial = 100;
const condicaoPagamento = 3;
const tipoPagamento = 'Débito';
const qtdParcelas = 5

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