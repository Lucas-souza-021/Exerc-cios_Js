//Achei bem díficil de fazer essa questão, ainda mais nesse modo de separar em três etapas, mas no fim consegui entender um pouco como é a dinâmica. Precisei de ajuda para realizar essa questão

function receberValores(){
   let precoProduto = Number(prompt("Digite o valor da compra"))
   return precoProduto
}
function aplicarDesconto(v, p){
   let descontoAplicado = v - [v*(p/100)]
   return descontoAplicado
}
function MostrarValor(produto){
    alert(`O valor do produto é R$${produto}`)
}
function processarVenda(bruto){
  if(bruto > 100){
    let aplicado = aplicarDesconto(bruto, 10)
    return aplicado
  }else{
    return bruto
  }
}
 let valor = receberValores()
 let total =  processarVenda(valor)
 MostrarValor(total)