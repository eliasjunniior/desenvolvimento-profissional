const prompt = require('prompt-sync')();

let flag = true
let num;

while (flag) {
    num = prompt('Digite um valor entre 0-10: ')

    if (num >= 0 && num <= 10) {
        flag = false
    }
}

console.log(num)