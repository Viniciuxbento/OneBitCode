let opcaoSelecionada = 0;

do {
    opcaoSelecionada = parseInt(prompt("Menu:\n 1- Opcao 1\n2- Opcao 2\n3- Opcao 3\n4- Opcao 4\n5- Encerrar"));

    switch (opcaoSelecionada) {
        case 1: alert('Opcao 1 foi selecionada'); break;
        case 2: alert('Opcao 2 foi selecionada'); break;
        case 3: alert('Opcao 3 foi selecionada'); break;
        case 4: alert('Opcao 4 foi selecionada'); break;
        case 5: alert('Encerrando...'); break;
        default: alert('Opção inválida');
    }

} while (opcaoSelecionada !== 5);
