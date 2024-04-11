const prompt = require('prompt-sync')();

let valor = Number(prompt("Digite o valor: "));

console.log(tribonacci(valor));

function tribonacci(valor) {
    if (valor == 0 || valor == 1) {
        return 0
    } else if (valor == 2){
        return 1
    } else {
        return tribonacci(valor - 1) + tribonacci(valor - 2) + tribonacci(valor - 3);
    }
}