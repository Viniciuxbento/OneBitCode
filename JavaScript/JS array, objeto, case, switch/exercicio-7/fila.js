let pacientesAguardando = [];
let opcoes = "0"; // Inicializando com um valor diferente de "3" para entrar no loop

while (opcoes !== "3") {
    opcoes = prompt(`Aqui estão as opções disponíveis:\n\n
    1- Adicionar novo paciente.\n 
    2- Atender paciente\n 
    3- Sair \n\n
    Fila de espera:\n\n
    ${pacientesAguardando}`);
    
    switch (opcoes) {
        case "1":
            let novoPacienteNome = prompt("Qual o nome do novo paciente?");
            pacientesAguardando.push(novoPacienteNome);
            break;

        case "2":
            let pacienteAtendido = prompt("Qual o nome do paciente que foi atendido?");
            let indice = pacientesAguardando.indexOf(pacienteAtendido);
            if (indice !== -1) {
                pacientesAguardando.splice(indice, 1);
            } else {
                alert("Paciente não encontrado na lista de espera.");
            }
            break;

        case "3":
            alert("Finalizando...");
            break;

        default:
            alert("Opção inválida. Tente novamente.");
    }
}
