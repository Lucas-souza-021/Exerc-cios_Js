//Achei essa questão moderada, no começo estava perdido não sabendo como fazer, depois com um tempo de racíocínio e ajuda de um colega consegui ir montando os códigos de pouco em pouco, resolvendo os problemas q apareciam
function somarElementos(){
    const numeros = []
    let soma
    let somatotal = 0
    let total = Number(prompt("Digite o total de números a ser somados: "))

    for(i = 0; i < total ; i++){
        let num = Number(prompt("Digite um número: "))
        numeros[i] = num
    }

    for(soma of numeros){
        somatotal = somatotal + soma
    }

    alert("A soma dos elementos descritos pelo usuário é: " + somatotal)
}
somarElementos()