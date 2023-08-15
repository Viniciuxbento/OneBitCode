function somar(a, b) {
    return a + b
}

const operacao = somar

console.log(operacao(2,7))


const subtracao = function (a,b){//como é uma função anonima, não foi necessario declarar um nome pra ela, apenas lhe armazenei na variavel 
    return a - b 
}

console.log(subtracao(33,12))

//----------------------------------------------------------------
function somar(a, b) {
    return a + b
}

let operacoes = somar 

console.log(operacoes(2,7))


operacoes = function (a,b){ // nesse caso, a variavel foi alterada com essa outra função, fazendo outro papel , de subtração
    return a - b 
}

console.log(operacoes(33,12))


//----------------------------------------------------------
OlaMundo()
OiMundo()

function OlaMundo(){
    console.log("Ola Mundo")// a function declarada "solta", tem a mesma função do var, que é IR DIRETO PRO TOPO pra ser executada
}

const OiMundo = function (){//ela armazenada numa const, não vai funcionar, pois não é lida antes de ser chamada, só se a chamada dele estivesse EM BAIXO 
console.log("Oi mundo")
}

