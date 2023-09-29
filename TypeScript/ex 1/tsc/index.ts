function mandarNave(nome: string, capitao: string) {
    const nave = {
        nome,
        capitao,
        velocidade: 20,
        emMissao: true,
        tripulacao: []
    }
    alert(`A nave ${nome} sob comando do capitão ${capitao} está saindo em missão`)
    return nave
}

function velocidadeAtribuir(velocidadeNova: number, nave: { nome: string, velocidade: number }) {
    if (nave.velocidade < velocidadeNova) {
        alert(`A nave ${nave.nome} está aumentando a velocidade para ${velocidadeNova}`)
    } else if (nave.velocidade > velocidadeNova) {
        alert(`A nave ${nave.nome} está diminuindo a velocidade para ${velocidadeNova}`)
    } else {
        alert(`A nave ${nave.nome} está mantendo a velocidade em ${velocidadeNova}`)
    }
}
 
const nomeNave = prompt('Qual nome da sua espaçonave?')
const nomeCapitao = prompt('Qual o nome do capitão?')

const nave = mandarNave(nomeNave, nomeCapitao)

const novaVelocidade = Number(prompt('Qual a nova velocidade?'))
velocidadeAtribuir(novaVelocidade, nave)
