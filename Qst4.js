//mesmo nível de dificuldade do anterior, médio
function calcularIMC(){
    let peso = Number(prompt("Digite o seu peso em kg: "))
    let altura = Number(prompt("Agora digite sua altura em metros: "))
    let IMC = peso / (altura*altura)
    if(IMC < 18.5){
        alert("Você está Abaixo do Peso")
    }if(IMC > 18.5 && IMC < 24.9){
        alert("Você está com o Peso Normal")
    }if(IMC > 25){
        alert("Você está com Sobrepeso")
    }
}
calcularIMC()