//Achei essa questão em particular, não difícil, mas sim complicada de entender como iria fazer no método de três etapas, por isso preferi fazer do jeito simples msm. Fora isso foi bem dboa

function Menu() {
    let escolha;
    let valor, resultado;

    const taxaEuro = 6.00;
    const taxaDolar = 5.50;

    do {
        escolha = Number(prompt(
            "Digite a opção desejada:\n\n" +
            "1 - Converter de real para euro\n" +
            "2 - Converter de euro para real\n" +
            "3 - Converter de real para dólar\n" +
            "4 - Converter de dólar para real\n" +
            "5 - Fechar o programa"
        ));

        switch (escolha) {
            case 1:
                valor = Number(prompt("Digite o valor em Reais:"));
                resultado = valor / taxaEuro;
                alert( "O valor em real equivale a " + resultado + " euros");
                break;

            case 2:
                valor = Number(prompt("Digite o valor em Euros:"));
                resultado = valor * taxaEuro;
                alert( "O valor em euro equivale a " + resultado + " reais");
                break;

            case 3:
                valor = Number(prompt("Digite o valor em Reais:"));
                resultado = valor / taxaDolar;
                alert( "O valor em real equivale a " + resultado + " dólares");
                break;

            case 4:
                valor = Number(prompt("Digite o valor em Dólares:"));
                resultado = valor * taxaDolar;
                alert( "O valor em dólar equivale a " + resultado + " reais");
                break;

            case 5:
                alert("Programa encerrado com sucesso!");
                break;

            default:
                alert("Opção inválida! Por favor, escolha um número de 1 a 5.");
        }

    } while (escolha !== 5);
}

Menu();