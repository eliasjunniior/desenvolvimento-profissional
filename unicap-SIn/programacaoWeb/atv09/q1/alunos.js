/* 
Crie uma lista de alunos onde cada aluno será representado por um objeto contendo id, nome e nota.
Implemente funções para adicionar um novo aluno, buscar um aluno por id e calcular a média das notas dos alunos 
*/

const leia = require('prompt-sync')();

let nome
let nota
const alunos = [];
let ids = [];
let flag = true;

while (flag) {
    let opc = Number(leia(`
    Escolha uma opção:\n
    1 - Adicionar aluno\n
    2 - Buscar por ID\n
    3 - Média dos alunos\n
    0 - Finalizar:\nResposta: `))

    switch (opc) {
        case 1:
            if (opc === 1) {
                nome = leia("Digite o nome: ");
                nota = Number(leia("Digite a nota: "));
                addAluno(nome, nota);
            }
            break;
        case 2:
            const idAluno = leia("Digite o ID: ")
            buscarPorID(idAluno);
            break;
        case 3:
            mediaAlunos()
            break;
        case 0:
            flag = false;
            break;
        default:
            console.log("Nenhum valor válido.")
            break;
    }
}


function criarAluno(nome, nota) {
    let id = Math.floor(Math.random() * 1000) + 1;
    while (ids.includes(id)) {
        id = Math.floor(Math.random() * 1000) + 1;
    }

    ids.push(id);

    return { id, nome, nota }
}

function addAluno(nome, nota) {
    const alunoCriado = criarAluno(nome, nota)
    alunos.push(alunoCriado)
    console.log(`Aluno ${alunoCriado.nome} criado com sucesso. Seu ID é ${alunoCriado.id}`)
}

function buscarPorID(id) {
    for (let i = 0; i < alunos.length; i++) {
        if (id == alunos[i]['id']) {
            console.log("Aluno encontrado: "+ JSON.stringify(alunos[i]))
            return alunos[i]
        }
    }

    console.log("ID não encontrado")
    return false
}

function mediaAlunos() {
    let total = 0
    for (let i = 0; i < alunos.length; i++) {
        total += Number(alunos[i].nota);
    }
    let media = total / alunos.length

    console.log("A media foi de: "+media)
    return media
}