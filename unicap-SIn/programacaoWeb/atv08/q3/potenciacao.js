const prompt = require('prompt-sync')();

let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt('Digite o expoente: '));

console.log(potenciacao(base, expoente));

function potenciacao(base, expoente) {
    if (expoente == 0) {
        return 1
    } else {
        return base * potenciacao(base, expoente - 1);
    }
}