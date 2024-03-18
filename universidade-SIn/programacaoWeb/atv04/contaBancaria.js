class ContaBancaria {
    constructor(nome, saldo = 0) {
        this.nome = nome;
        this.cadastro = true;
        this.hstCred = true;
        this.credEspecial = 0;
        this.conta = Math.floor(Math.random() * (10000 - 1000)) + 1000;

        if (saldo => 0) {
            this.saldo = saldo;
        }
    }

    get verificarSaldo() {
        return this.saldo
    }

    set realizarSaque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }

    set realizarDeposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    realizarTransferencia(valor, conta){
        if (valor <= this.saldo) {
            this.saldo -= valor;
            conta.realizarDeposito = valor;
        }
    }

    checarChequeEspecial(saldo) {
        if (this.saldo >= 0){
            console.log("Fora do limite do cheque especial")
        } else {
            console.log("Dentro do limite do cheque especial")
            this.credEspecial++
        }
    }

    atualizarCadastro(cadastroAtivo) {
        if (cadastroAtivo.cadastro() && cadastroAtivo.verificarSaldo > 0) {
            console.log("Cadastro ativo e saldo positivo")
        } else if (cadastroAtivo.cadastro() && cadastroAtivo.verificarSaldo() <= 0) {
            console.log("Cadastro ativo mas precisa regularizar saldo")
        } else if (!cadastroAtivo.cadastro()) {
            console.log("Por favor, atualize seu cadastro")
        }
    }

    avaliarCredito (saldo, historicoCredito, rendaMensal) {
        if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {

            console.log("Crédito aprovado");
        
          } else {
        
            console.log("Crédito negado");
        
          }
    }

    get numConta() {
        return this.conta;
    }
    get cadastro() {
        return this.cadastro
    }


    




}

module.exports = ContaBancaria