function receberAluno(){
  const aluno ={
    nome:prompt("Digite o nome do aluno")
  }   
  const nota = []
  for(let i = 0; i< 3; i++){
    nota[i] = Number(prompt(`Digite a ${i+1}º nota do aluno ${aluno.nome}`))
  }
  aluno.notas = nota
  return aluno
}
function calcularMediaArray(valores){
     let soma = 0
     for(let item of valores){
        soma += item
     }
     soma = soma/3
     return soma
}
function avaliarAluno(estudante){
  let resultado = calcularMediaArray(estudante.notas)
  if(resultado >= 60){
    let situacao = "Aprovado"
    return situacao
  } else{
    let situacao = "Reprovado"
    return situacao
  }
}
function mostrarEstado(estado){
  alert(`O aluno ${objeto.nome} está ${estado}`)
}
let objeto = receberAluno()
let estado = avaliarAluno(objeto)
mostrarEstado(estado)