type Coordenadas = [number, number, number, number]
type  Situacao = "habitado" | "habitavel" | "inabitavel" | "inexplorado"


interface Planeta {
    nome: string;
    coordenadas: Coordenadas;
    situacao: Situacao;
    satelites: string[];
}

let planetasRegistrados: Planeta[] = [];


function createPlanet(nome: string, coordenadas: Coordenadas, situacao: Situacao, satelites: string[]) {
    let novoPlaneta = {
        nome,
        coordenadas,
        situacao,
        satelites
    }
    return novoPlaneta
}

function acharPlaneta(nomePlaneta: string) {
    return planetasRegistrados.find((planeta) => planeta.nome === nomePlaneta);
}

function alterarSituacao(nomePlaneta: string, novaSituacao:Situacao) {
    let planeta = acharPlaneta(nomePlaneta);
    if (planeta) {
        planeta.situacao = novaSituacao; 
        alert('Situacao alterada')
    } else {
        console.log("Planeta não encontrado.");
    }}


function adcionarSatelite(nome:string, nomePlaneta:string){
    let planeta = acharPlaneta(nomePlaneta);
    if (planeta) {
        planeta.satelites.push(nome); 
        alert('Satelite adcionado')
    } else {
        console.log("Planeta não encontrado.");
    }
}

function removerSatelite(nome:string, nomePlaneta:string){
    let planeta = acharPlaneta(nomePlaneta);
    const indice = planetasRegistrados.findIndex((planeta) => planeta.nome === nome);

    if (planeta) {
        planeta.satelites.splice(indice,1); 
        alert('Removido')
    } else {
        console.log("Planeta não encontrado.");
    }
}

function listarPlanetas(){
    alert(planetasRegistrados)
}

function menu(){
   let opcao;
    do { 
        opcao = Number(prompt(`Selecione uma opção:
        1-Adcionar planeta
        2-Atualizar Situação planeta
        3-Adcionar Satelite
        4-Remover Satelite
        5-Mostrar planetas
        6-Sair
        `))
    

        switch (opcao) {
        
                case 1:
                    
                 let nome = prompt('Qual o nome do novo planeta?')
                 let coordenadasPegar: Coordenadas = [0, 0, 0, 0]; // Inicialize as coordenadas
                coordenadasPegar[0] = Number(prompt('Qual é a coordenada 1'));
                coordenadasPegar[1] = Number(prompt('Qual é a coordenada 2'));
                coordenadasPegar[2] = Number(prompt('Qual é a coordenada 3'));
                coordenadasPegar[3] = Number(prompt('Qual é a coordenada 4'));

                 let situacao: Situacao;
                do {
                    situacao = prompt('Qual a situação do planeta? (habitado, habitavel, inabitavel, inexplorado)') as Situacao;
                } while (!["habitado", "habitavel", "inabitavel", "inexplorado"].includes(situacao));

                 let satelites:string[] = []
                 satelites.push(prompt('Adcione um satelite'))

                 let planetaCriado = (createPlanet(nome, coordenadasPegar, situacao, satelites))
                 planetasRegistrados.push(planetaCriado)

                break;
                case 2:
                let planetaCase2 = prompt('Qual o nome do planeta?')
                 let situacao1: Situacao;
                do {
                    situacao = prompt('Qual a situação do planeta? (habitado, habitavel, inabitavel, inexplorado)') as Situacao;
                } while (!["habitado", "habitavel", "inabitavel", "inexplorado"].includes(situacao1));
                alterarSituacao(planetaCase2 , situacao1)
                
                break;
                case 3:
                    let planetaCase3 = prompt('Qual o nome do planeta')
                    let novoSatelite = prompt('O nome do novo satelite:')
                    adcionarSatelite(novoSatelite,planetaCase3)
                    
                
                break;
                case 4:
                    let planetaCase4 = prompt('Qual o nome do planeta')
                    let removido = prompt('O nome do satelite para remover:')
                    adcionarSatelite(removido,planetaCase4)
                break;
                case 5:
                 listarPlanetas()
                break;
                case 6:
                 alert('Saindo...')
                break;
        
                default: alert('algo deu errado')
                break;
        }
    } while (opcao !== 6);
}
menu()