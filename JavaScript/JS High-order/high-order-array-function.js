const personagens = [
{nivel: 42, nome:"Thrall" , raca:"Orc" , classe:"Xamã" },
{nivel: 38, nome:"Garrosh" , raca:"Orc" , classe:"Guerreiro" },
{nivel: 35, nome:"Varok" , raca:"Orc" , classe:"Guerreiro" },
{nivel: 35, nome:"Uther" , raca:"Humano" , classe:"Paladino" },
{nivel: 26, nome:"Jaina" , raca:"Humano" , classe:"Maga" },
{nivel: 39, nome:"Tyrande" , raca:"Elfo Noturno" , classe:"Sacerdotisa" },
{nivel: 29, nome:"Muradin" , raca:"Anão" , classe:"Guerreiro" }


]

//const nomes = []

//for (i=0; i < personagens.length; i++){
   //nomes.push(personagens[i].nome)
//}

//console.log(nomes) // essa extrutura faz a função do mapeamento de uma forma mais bruta

//Com o map--------------------------------------

const nomes = personagens.map(function(personagem){ // chama a função map, e faz uma função criando uma variavel personagem, que vai tirar tudo de dentro do array de cima
    return personagem.nome // aqui eu retorno personagem, que tem todas as infos, mas peço pra retornar somente os nomes
})

console.log(nomes)


//Filter

//const orcs =[]

//for (let i = 0; i < personagens.length; i++) {
  ///  if(personagens[i].raca === "Orc"){
      //  orcs.push(personagens[i])
    
   // }
    
    
//}

//console.log(orcs)

//filter ded verdade

const orcs = personagens.filter(function(personagem){
    return personagens.raca ==="Orc"
})

///A PRINCIPAL DIFERENÇA ENTRE E FILTER E MAP, É QUE FILTER CRIA UMA ARRAY NOVA E MAP APENAS SERVE PARA FILTRAR A ARRAY EXISTNTE??????

const nivelTotal  = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    }else{
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
},{})

console.log(racas)