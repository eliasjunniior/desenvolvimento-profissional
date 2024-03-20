const prompt = require('prompt-sync')();

let v1 = [];
let soma = 0;

for (let index = 1; index <= 3; index++) {
    v1.push( Number (prompt(`Digite o ${index} valor: `)));    
}

for (let index = 0; index < v1.length; index++) {
    soma += v1[index];
}

console.log(`A média dos números é: ${soma / 3}`);
console.log(`Os números lidos foram: ${v1.join(", ")}.`)
