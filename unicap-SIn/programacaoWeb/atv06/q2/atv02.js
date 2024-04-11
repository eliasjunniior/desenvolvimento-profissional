const prompt = require('prompt-sync')();

let nome, senha, flag = false;

while (!flag) {
    
    nome = prompt("Digite o nome: ");
    senha = prompt("Digite a senha: ");

    if (senha == nome) {
        console.log("Nome e senha devem ser diferentes.")
    } else if (/\d/.test(senha) && /[a-z]/.test(senha) && /[A-Z]/.test(senha)) {
        console.log("Entrou")
        flag = true;
    } else {
        console.log("A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula e um número.");
    }
}
