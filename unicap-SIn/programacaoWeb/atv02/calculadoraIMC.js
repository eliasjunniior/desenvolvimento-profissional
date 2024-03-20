class CalculadoraIMC {

    constructor() {
        this._tabelaIMC = {
            18.5: "Abaixo do peso",
            24.9: "Peso normal",
            29.9: "Excesso de peso",
            34.9: "Obesidade grau I",
            39.9: "Obesidade grau II",
            40: "Obesidade grau III"
        };
    }

    

    calcularIMC(peso, altura) {
        let imc = peso / Math.pow(altura, 2);

        for (const key in this._tabelaIMC) {
            console.log(key)
        }
    }
}