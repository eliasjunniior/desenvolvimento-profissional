const leia = require('prompt-sync')();
const ids = [];
const alunos = {};


function addAluno(nome, nota) {
    let id = Math.floor(Math.random() * 1000) + 1;


    while(ids.includes(id)) {
        id = Math.floor(Math.random() * 1000) + 1;
    }
    
    ids.push(id)
    
    alunos[[id]] = {nome, nota}
}
addAluno('brunooo', 10)
console.log(alunos)