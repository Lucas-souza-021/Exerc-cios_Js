//Nessa questão achei ela bem mais fácil, pois sóexige saber usar a lógica básica e o "if", além de que eu estou aprendendo a fazer o método de três etapas

unction ValorProduto(){
    let Produto = Number(prompt("Digite o valor do produto desejado"))
    return Produto
}
function SaldoDisponivel(){
    let Saldo = Number(prompt("Digite a quantidade de saldo disponível"))
    return Saldo
}

function VerificarOrcamento(valorP, valorS){
    if(valorS >= valorP){
        return alert(true)
    }if(valorS < valorP){
        return alert(false)
    }
}

let valorP = ValorProduto()
let valorS = SaldoDisponivel()
let verificacao = VerificarOrcamento(valorP, valorS)
