const leia = require('prompt-sync')()

const num = Number(leia("Digite o valor: "));

parImpar(num)

function parImpar(num) {
    if (num % 2 == 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }
}