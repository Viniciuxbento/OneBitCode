let espaconaves = [];
function novaNaveFunc(nome, piloto, limiteTrip) {
    let novaNave = {
        nome,
        piloto,
        limiteTrip,
        tripulacao: [],
        emMissao: false
    };
    return novaNave;
}
function acharNave(nomeNave) {
    return espaconaves.find((nave) => nave.nome === nomeNave);
}
function adicionarTripulante(nome, espaconave) {
    let result = acharNave(espaconave);
    if (result && result.tripulacao.length < result.limiteTrip) {
        result.tripulacao.push(nome);
        alert(`${nome} foi adicionado à tripulação da nave ${result.nome}`);
        return result;
    }
    else {
        alert('Tripulação Lotada');
    }
}
function enviarParaMissao(nomeNave) {
    let aNave = acharNave(nomeNave);
    let quantidadeTrip = Math.floor(aNave.limiteTrip / 3);
    if (aNave.emMissao === false && aNave.tripulacao.length >= quantidadeTrip) {
        aNave.emMissao = true;
        alert('Nave foi para missão');
    }
    else {
        alert('A nave não pode ir para essa missão');
    }
}
function mostrarNaves() {
    for (const nave of espaconaves) {
        alert(`Nome: ${nave.nome}, Piloto: ${nave.piloto}, Tripulação: ${nave.tripulacao.length}`);
    }
}
function menu() {
    let valor;
    do {
        valor = Number(prompt(`Escolha uma opção:
    1-Adicionar nova nave
    2-Adicionar membro à uma nave
    3-Enviar nave para missão
    4-Mostrar naves
    5-Sair`));
        switch (valor) {
            case 1:
                let nome = prompt('Qual o nome da espaçonave?');
                let nomePiloto = prompt('Qual o nome do piloto?');
                let limiteTrip = Number(prompt('Qual o limite de tripulação?'));
                let novaNave = novaNaveFunc(nome, nomePiloto, limiteTrip);
                espaconaves.push(novaNave);
                break;
            case 2:
                let nomeTripulante = prompt('Qual o nome do tripulante?');
                let nomeNave = prompt('Qual o nome da nave para adicionar o tripulante?');
                adicionarTripulante(nomeTripulante, nomeNave);
                break;
            case 3:
                let nomeNaveMissao = prompt('Qual o nome da nave para enviar em missão?');
                enviarParaMissao(nomeNaveMissao);
                break;
            case 4:
                mostrarNaves();
                break;
            case 5:
                alert('Saindo do programa.');
                break;
            default:
                alert('Opção inválida.');
                break;
        }
    } while (valor !== 5);
}
// Chame a função menu para começar o programa
menu();
