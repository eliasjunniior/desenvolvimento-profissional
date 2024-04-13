const leia = require('prompt-sync')();

let num = Number(leia("Digite: "));

console.log(numPrimo(num))

function numPrimo(num) {

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            return false
        } else {
            return true
        }
        
    }

}