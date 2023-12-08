//funções
function addNumber(x: number, y: number) {
    return x + y;
}

function addToHello(name: string) {
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number| string {
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "Jean";
}

let soma: number = addNumber(10, 20);

console.log(soma);