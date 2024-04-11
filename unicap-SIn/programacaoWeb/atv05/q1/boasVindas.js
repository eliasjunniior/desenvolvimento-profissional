const leia = require('prompt-sync')();

let nome = leia("Digite o seu nome: ");

function boasVindas(nome) {
    console.log(`Seja bem-vindo ${nome}.`)
}