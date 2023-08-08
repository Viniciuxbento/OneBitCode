let imoveisCadastrados = [];
let opcaoSelecionada = ""; // Faltou a leitura da entrada do usuário
let quantidadeDeImoveis = 0;

do {
    opcaoSelecionada = prompt("Quantidade de imóveis adicionados: " + quantidadeDeImoveis +
        "\n\n1- Adicionar Imóvel \n2- Remover imóvel\n3- Todos os imóveis adicionados \n4- Sair");

    switch (opcaoSelecionada) {
        case "1":
            let novoImovel = [];
            novoImovel.push((imoveisCadastrados.length + 1) + " - " + prompt("Qual descrição do imóvel? (casa,apto)"));
            novoImovel.push(prompt("Qual nome do proprietário?"));
            novoImovel.push(prompt("Quantidade de quartos?"));
            novoImovel.push(prompt("Quantidade de banheiros?"));
            novoImovel.push(prompt("Possui garagem?"));
            imoveisCadastrados.unshift(novoImovel);
            quantidadeDeImoveis++;
            break;

        case "2":
            let numeroImovelRemovido = prompt("Qual o número do imóvel a ser removido?\n" + imoveisCadastrados) - 1;
            imoveisCadastrados.splice(numeroImovelRemovido, 1); // Usar splice para remover
            break;

        case "3":
            alert(imoveisCadastrados);
            break;

        case "4":
            alert("Finalizando...");
            break;

        default:
            alert("Opção inválida!\nTente novamente");
    }
} while (opcaoSelecionada !== "4");
