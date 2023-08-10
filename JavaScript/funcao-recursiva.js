function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {// dentro da função difidir, tem esse if. Dentro desse if tem um call PRA MESMA FUNÇÃO, ou seja "tem ela dentro dela"
        dividir(num / 2)
    } else {
        return num
    }
    //isso se chama função recursiva
}

//dividir(20)
//--------------------------------------------------------------


function dobrar(num) {
    console.log(num)// O console.log vem aquui, pra mostrar primeiro o numero adcionado na chamada da função e depois os respectivos resultados da multiplicação
    dobrar(num * 2)
}//porem, se eu chamar a função principal ( no caso não a de dentro) vai ficar em looping infinito pois não foi colocado um parametro de medida pra finalizar a função de multiplicar