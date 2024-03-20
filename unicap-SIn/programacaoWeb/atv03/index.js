const prompt = require('prompt-sync')();
const ContaBancaria = require('./contaBancaria');

const c1 = new ContaBancaria("Bruno", 1000);
const c2 = new ContaBancaria("Guilherme", 500);


c1.realizarTransferencia(100, c2);

console.log(c1.verificarSaldo);
console.log(c2.verificarSaldo);

let opc = prompt("")

switch (opc) {
    case value:
        
        break;

    default:
        break;
}