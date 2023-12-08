//generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 2], [3, 4]);
const strArray = concatArray<string[]>(["Jean", "Naruto"], ["Gohan"]);

console.log(numArray);
console.log(strArray);