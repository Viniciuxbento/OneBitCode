const arr = ["Frodo","Sam","Merry","Pippin","Gandalf"]
console.log(arr)

//Adcionar elementos 

//Modo PUSH (COLOCA O ELEMENTO ADCIONADO NA ULTIMA POSIÇÃO)

arr.push("Boromir")
console.log(arr)

//Unshift (COLOCA ELEMENTO ADCIONADO NA PRIMEIRA POSIÇÃO)

arr.unshift("Boromir2")
console.log(arr)

//Remover elementos 

const ultimoArray = arr.pop() // pop tira o ultimo da lista , e da pra quardar em outra variavel o valor retirado

//shift 

arr.shift()
console.log(arr) // vai remover o primeiro item da array 

        // pesquisar por um elemento 

const inclui = arr.includes("Gandalf")//Vai retornar true se tiver essa string na array e false se não tiver

const indice = arr.indexOf("Gandalf")//Vai retornar qual o indeice dessa string na array 

//COMO CORTAR & CONCATENAR ARRAY 
    //SLICE
const hobbits = arr.slice(0,4)// vai cortar os itens de indice 0 até 4 e colocar na variavel 

const outros = arr.slice(-4) // o sinal negativo faz contar do lado contrario, no sentido inverso da array ((PORÉM)) o contador não começa do indice 0 e sim do indice-1

                    //CONCAT

const sociedade = hobbits.concat(outros, "Boromir")
// aqui eu adciono os itens que estão em "outros" com a string hibbits e em sequencia separado pela virgula, eu adciono apenas um item na concatenação "Boromir"

                //SUBSTITUIÇÃO DE ELEMENTOS

                //SPLICE((NÃO É SLICE))


const elementosRemovidos = sociedade.splice(-2,1,"Gandalf,o cinzento")
//ele pega o indice do item que quer ser substituido, seguinte ele diz quantos itens seguintes desses devem ser substituidos também, ( nesse caso 1 ou seja, só o gandalf mesmo), e por ultimo o item que vai substiruir o que foi excluido 
console.log(sociedade)
console.log(elementosRemovidos)
