function calcular (a , b , operacao){
    console.log("Realizando uma operação")
    let resultadoOperacao = operacao(a , b)
    return resultadoOperacao
}

function soma(x , y){
    console.log("Realizando uma soma")
    return x + y
}

console.log(calcular(3, 5, soma)) // usando a função soma como parametro, para fazer o calculo de soma 

console.log(calcular(5,9,function (c, d){
    return c - d
})) // quando for ultilizazr uma função simples como parametro pode ser usado desse jeito 


///////////////HIGH ORDER -Nada mais é doque uma função que recebe outra função como parametro 

function exibirElemento(elemento , indice , array){
    console.log({
        elemento,//crio uma função com um objeto
        indice,
        array
    })
}

const lista = ["Maçã" , "Banana" , "Laranja" , "Limão"] // crio uma array com o nome dos elementos da lista

for(let i = 0; i < lista.length; i++){//crio o indice
    exibirElemento(lista[i], i , lista)//chamo a função e passo como parametro o elemento(chamado pela posição dele na array), passo o indice e a array completa
}

