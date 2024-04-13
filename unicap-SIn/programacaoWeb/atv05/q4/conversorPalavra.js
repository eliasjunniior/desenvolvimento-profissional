const leia = require('prompt-sync')();

const palavra = leia("Digite a palavra: ");

console.log(caixaAlta(palavra))

function caixaAlta(palavra) {
    let novaPalavra = '';

    for (let i = 0; i < palavra.length; i++) {
        novaPalavra += palavra[i].toUpperCase()
    }

    return novaPalavra;
}