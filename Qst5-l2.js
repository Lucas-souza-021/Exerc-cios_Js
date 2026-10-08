//Tive dificuldades para realizar essa questão e precisei de ajuda, mais por conta da dificuldade de associar os conhecimentos de array com objeto nas funções

function receberCarrinho() {
    const carrinho = []
    let quantidadeProdutos = Number(prompt("Digite quantos produtos o carrinho vai possuir"))
    for (let i = 0; i < quantidadeProdutos; i++) {
        const produto = {
            preco: Number(prompt(`Digite o preço do ${i + 1}º produto:`)),
            quantidade: Number(prompt(`Digite a quantidade do ${i + 1}º produto:`))
        }
        carrinho.push(produto)
    }
    return carrinho
}
function calcularSubtotalItem(item) {
    let subtotal = item.preco * item.quantidade
    return subtotal
}
function calcularTotalCarrinho(carrinho) {
    let total = 0
    for (let i = 0; i < carrinho.length; i++) {
        total += calcularSubtotalItem(carrinho[i])
    }
    return total
}
function mostrarTotal(total) {
    alert(`O total da compra é R$ ${total}`)
}
let carrinho = receberCarrinho()
let resultado = calcularTotalCarrinho(carrinho)
mostrarTotal(resultado)