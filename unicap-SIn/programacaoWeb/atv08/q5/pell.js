const prompt = require('prompt-sync')();

let valor = Number(prompt("Digite: "))

console.log(pell(valor))

function pell(valor) {
    if (valor == 0) {
        return 0;
    } else if ( valor == 1) {
        return 1
    } else {
        return 2 * pell(valor-1) + pell(valor - 2)
    }
}