// Achei essa atividade mediana, sendo a única até então que eu consegui fazer no método de três etapas, com um pouco de dificuldades também, já que eu não sabia que o "return" retornava apenas uma variável, por isso tive que criar um array

function ReceberValores(){
    let capital = Number(prompt("Digite o capital do produto"))
    let taxa = Number(prompt("Digite a taxa em porcentagem"))
    let tempo = Number(prompt("Digite o tempo em meses"))
    return [capital, taxa, tempo]    
}
function CalcularJurosSimples(capital, taxa, tempo){
    let juros1 = capital * taxa * tempo
    let juros2 = juros1/100
    return juros2
}
function ExibirResultado(calculo){
    return alert("O valor dos juros calculados de acordo com as especificações é de " + calculo + " reais")
}
let valores = ReceberValores()
let calculo = CalcularJurosSimples(...valores)
let resultado = ExibirResultado(calculo)