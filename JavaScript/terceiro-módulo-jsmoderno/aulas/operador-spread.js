const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']

console.log(towns) // mostra apenas a array criada
console.log(...towns)//ele   separa   os   itens   da    array
console.log(...towns[0])//ele separa    o u l t i m o    item da array 

const townsCopy = towns // criando cópia, ou seja, criada como referência, se alterar a variavel townsCopy, a variavel towns também será alterada

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})

const townsClone = [...towns] // ele clona, fazendo com que quando mecher na variavel townsClone a variavel inicial não será alterada

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone})


const townsObj = {...towns} // transforma em objeto e separa todos os itens como chave e valor
const townsObjClone= {...townsObj} // clonando o de cima

townsObjClone.teste = 'Teste'// atribuindo chave e valor ào objeto para teste para provar que o clone não vai alterar o objeto principal

console.log({townsObj , townsObjClone})

