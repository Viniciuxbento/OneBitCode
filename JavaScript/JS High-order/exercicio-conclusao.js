
//cruar uma nova vaga (nome,data limite )(confirm) OKKKKKKK
//olhar uma vaga ( indice dela, nome,data, quantidade e nome dos inscritos)
//inscrever candidato( nome candidato, indice da vaga, confimar com informações da vaga)
//excluir vaga(indice da vaga, exibir informações e confirm

let listaDeVagas = [];
let opcaoSelecionada = "";

function criarNovaVaga(vaga){
    if(opcaoSelecionada === "1"){
        nomeVaga = prompt("Qual o nome da vaga?")
        dataLimite = prompt("Qual a data limite?")
        vaga = `\n${listaDeVagas.length + 1}- ${nomeVaga} - Data para expirar: ${dataLimite}`

        listaDeVagas.push(vaga)
        let confimar = confirm(`As informações estão corretas?\n
        ${vaga}`)
        if(confimar === true){
            alert("Cadastrada com sucesso!")
        }else{
            criarNovaVaga()
        }
    }
}
function olharVagaSelecionada(indice){
    if(opcaoSelecionada ==="2"){
    indice = prompt("Qual vaga voce quer visualizar?\n" + listaDeVagas)
    indice = -1 
    vaga =listaDeVagas.slice(indice)
    alert(vaga)
    olharVagaSelecionada()
}

    
    

     
}
do{opcaoSelecionada = prompt("Segue a baixo a lista de vagas disponiveis:\n\n" + listaDeVagas + "\n\n1- Criar uma nova vaga.\n2-Visualizar uma vaga.\n3-Inscrever canditado numa vaga.\n4-Exluir uma vaga.\n5-Sair.")

criarNovaVaga()


}while(opcaoSelecionada !== "5")
