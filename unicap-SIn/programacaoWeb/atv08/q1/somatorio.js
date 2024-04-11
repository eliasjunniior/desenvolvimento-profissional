const prompt = require('prompt-sync')();

let valor = Number(prompt('Digite o valor: '));

console.log(somatorio(valor))

function somatorio(valor) {
    if (valor == 0) {
        return 0
    } else {
        return valor + somatorio(valor - 1)
    }
}