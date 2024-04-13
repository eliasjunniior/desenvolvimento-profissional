const leia = require('prompt-sync')();

const lista = [];
let soma = 0;
const tamanho = Number(leia("Digite o tamanho do array: "));

for (let i = 0; i < tamanho; i++) {
    lista[i] = Number(leia());
}

console.log(mediaArray(lista))

function mediaArray(arr) {
    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma / arr.length;
}