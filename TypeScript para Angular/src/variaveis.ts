/**
 * variaveis
 */

//tipos primitivos: number, string, boolean
let ligado: boolean = false;
let nome: string = "Jean";
let idade: number = 26;
let altura: number = 1.78;

//tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name: "Jean",
    cidade: "São Paulo",
    idade: 26
};

//objeto - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 1500,
    unidades: 10
};

/**
 * arrays
 */
let dados: string[] = ["Jean", "Santos", "Ferreira"];
let dados2: Array<string> = ["Jean", "Santos", "Ferreira"];

let infos: (string | number)[] = ["Jean", "Santos", "Ferreira", 26];

/**
 * tuplas
 */
let boleto: [string, number, number] = ["Boleto", 1.5, 20];

/**
 * arrays métodos (são os mesmos do JavaScript)
 * push()
 * pop()
 * shift()
 * unshift()    
 * splice() 
 * slice()
 * concat()
 * reverse()
 * sort()
 * forEach()
 * map()
 * filter()
 * some()
 * every()
 * find()
 * findIndex()
 * includes()
 * join()
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2024-01-05 00:00");
console.log(aniversario);

