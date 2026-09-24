//Achei essa questão fácil, já que não elvolve tanta lógica assim, e sim mais oq aprendemos sobre objeto
function formatarPessoa(){
    pessoa = {
        nome: prompt("Digite o nome da pessoa: "),
        idade: Number(prompt("Digite a idade: ")),
        profissao: prompt("Digite a profissão")
    }
    return "Olá meu nome é " + pessoa.nome + ", tenho " + pessoa.idade + " anos e trabalho como " + pessoa.profissao
}
alert(formatarPessoa())