//Atividade fácil, demorei só um pouco pro pensamento de lógica voltar a funcionar

function calcuararearetangulo(){
    let altura = Number(prompt("Digite o valor da altura do retângulo em cm: "))
    let base = Number(prompt("Agora digite o valor da base do retângulo em cm: "))
    let area = altura * base
    return alert("A área do retângulo é de " + area + "cm")
}
calcuararearetangulo()