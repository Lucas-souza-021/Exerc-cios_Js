function executarAnalise(){
    const alunos = [];
    for(let i = 0; i < 4; i++){
        alunos[i] = {
               nome: prompt(`Digite o nome do ${i+1}º aluno`),
               nota: Number(prompt(`Digite a nota do ${i+1}º aluno`))
        }
    }
    let numero = contarAprovados(alunos)
    console.log("O numero de alunos aprovados foi " + numero)
}
function contarAprovados(listaAlunos){
    let estado = 0
    let soma = 0
   for(const item in listaAlunos){
    let notas = listaAlunos[item].nota
     estado = verificarAprovacao(notas)
      if(estado){
        soma += 1
      }
   }
   return soma
}
function verificarAprovacao(pontos){
    if(pontos >= 60){
        return 1
    } else{
        return 0
    }
}

executarAnalise()