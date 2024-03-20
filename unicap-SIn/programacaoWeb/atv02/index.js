const prompt = require('prompt-sync')();

tabelaIMC = {
    18.5: "Abaixo do peso",
    24.9: "Peso normal",
    29.9: "Excesso de peso",
    34.9: "Obesidade grau I",
    39.9: "Obesidade grau II",
    40: "Obesidade grau III",
};



function calcularIMC(peso, altura) {
    let imc = peso / Math.pow((altura / 100), 2);

    for (const key of Object.keys(tabelaIMC).sort()) {
        if (imc <= Number (key)) {
            console.log(tabelaIMC[key])
            break
        }
    }
}

calcularIMC(65, 169)