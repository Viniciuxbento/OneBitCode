function mandarNave(nome, capitao) {
    var nave = {
        nome: nome,
        capitao: capitao,
        velocidade: 20,
        emMissao: true,
        tripulacao: []
    };
    alert("A nave ".concat(nome, " sob comando do capit\u00E3o ").concat(capitao, " est\u00E1 saindo em miss\u00E3o"));
    return nave;
}
function velocidadeAtribuir(velocidadeNova, nave) {
    if (nave.velocidade < velocidadeNova) {
        alert("A nave ".concat(nave.nome, " est\u00E1 aumentando a velocidade para ").concat(velocidadeNova));
    }
    else if (nave.velocidade > velocidadeNova) {
        alert("A nave ".concat(nave.nome, " est\u00E1 diminuindo a velocidade para ").concat(velocidadeNova));
    }
    else {
        alert("A nave ".concat(nave.nome, " est\u00E1 mantendo a velocidade em ").concat(velocidadeNova));
    }
}
var nomeNave = prompt('Qual nome da sua espaçonave?');
var nomeCapitao = prompt('Qual o nome do capitão?');
var nave = mandarNave(nomeNave, nomeCapitao);
var novaVelocidade = Number(prompt('Qual a nova velocidade?'));
velocidadeAtribuir(novaVelocidade, nave);
