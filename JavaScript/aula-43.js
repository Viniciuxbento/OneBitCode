function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media // é muito importante não se esquecer do return 
}

const resultado = calcularMedia(7, 2)
console.log(resultado) // como o resultado da funcao foi adcionada na variavel resultato, então pode ser chamada pela variavel 

//-------------------------------------------------------------
function criarProduto(nome, preco) {
const produto = {
    nome,
    preco,
    estoque: 1
}
return produto 
}

console.log(criarProduto("Notebook intel 8gb", "R$2600"))

//------------------------------------------------------------

function areaRetangular(base, altura){
    return base* altura
}

console.log(areaRetangular(7,2))

//--------------------------------------------------------------

function areaQuadrada(lado){
    return areaRetangular(lado,lado) // executou outra função dentro dessam transformando (base, altura) em (lado, lado)
}

console.log(areaQuadrada(8))// como virou lado lado apenas um parametro serve 

//---------------------------------------------------------------
function ola(){
    let texto = "..."
    return texto // return só pode ser chamado uma vez, sendo assim, ele sempre deve ficar na ultima posição
    texto = "Ola,mundo!"// o VScode deixa apagado pra mostrar que tem algo de errado 
    console.log(texto)
}

//---------------------------------------------------------------
function maioridade(idade){
    if(idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}

console.log(maioridade(29))
console.log(maioridade(13))