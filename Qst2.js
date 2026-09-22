//Precisei de ajuda para fazer, foi um pouco confuso, não estava funcionando por um erro totalmente bobo
function letnumber(){
    numero = Number(prompt("Digite um númeropara a verificação: "))
    return numero
}
function processamento(parimpar){
    if(parimpar%2 == 0){
        return true
    }
    if(parimpar%2 !== 0){
        return false
    }
    return parimpar

}
function saida(verificacao){
    if(verificacao == true){
        alert("Seu número é par")
    }
    if(verificacao == false){
        alert("Seu número é ímpar")
    }

}

let num = letnumber()
let avalia = processamento(num)
saida(avalia)