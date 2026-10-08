//Por ser uma questão bem parecida com a primeira achei mediana, só tive um pouco de dificuldades para saber como declarava um objeto e podia trazer ele como parâmetro, mas só isso tbm

function ReceberObjeto(){
    let nome = prompt("Digite o nome do produto")
    let preco = Number(prompt("Digite o preço do produto"))
    let estoque = Number(prompt("Digite a quantidade do produto disponível em estoque"))
    return {nome, preco, estoque}
}
function ExibirResumoProduto(nome, preco, estoque){
    return "Produto: " + nome + "\nPreço: R$" + preco + "\nEstoque: " + estoque + " unidades"
}
let Produto = ReceberObjeto()
let Exibir = ExibirResumoProduto(Produto.nome, Produto.preco, Produto.estoque)
alert(Exibir)