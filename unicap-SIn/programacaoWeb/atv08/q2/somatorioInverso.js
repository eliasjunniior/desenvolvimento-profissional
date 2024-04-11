const prompt = require('prompt-sync')();

let valor = Number(prompt('Digite o valor: '));

console.log(somatorioInverso(valor).toFixed(2));

function somatorioInverso(valor, soma = 0) {
    if (valor === 0) {
        return soma;
    } else {
        return somatorioInverso(valor - 1, soma + 1 / valor);
    }
}


