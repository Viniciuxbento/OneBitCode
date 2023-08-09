let dinheiroTotal = parseFloat(prompt("Qual valor total que você tem? "));
let opcaoSelecionada = 0;

do {
    opcaoSelecionada = parseInt(prompt("1- Adcionar dinheiro \n 2- Remover dinheiro 3- Sair"));

    switch (opcaoSelecionada) {
        case 1: dinheiroTotal += parseFloat(prompt("Quanto deseja adcionar?"));
            break;

        case 2: dinheiroTotal -= parseFloat(prompt("Quanto deseja subtrair?"));
            break;

        case 3: alert("Seu saldo atual é de "+ dinheiroTotal + "Reais");
            break;

        default: alert("Algo deu errado...");
    }
} while (opcaoSelecionada !== 3);

