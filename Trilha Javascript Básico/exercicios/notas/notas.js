/*
    1) Faça um algorítmo que dado as 3 notas tiradas por uma aluno em um semestre da faculdade calcule
    e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 = nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 5.75;
const nota2 = 10;
const nota3 = 8;

const mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno < 5) {
    console.log('reprovado, média: ' + mediaAluno.toFixed(2))
} else if (mediaAluno <= 7) {
    console.log('recuperação, média: ' + mediaAluno.toFixed(2))
} else {
    console.log('aprovado, média: ' + mediaAluno.toFixed(2))
}