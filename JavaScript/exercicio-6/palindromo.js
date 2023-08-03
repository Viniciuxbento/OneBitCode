let palavraDeEntrada = prompt("Digite a palavra desejada: ")
var palavraAoContrario = ""
var resultado = ""

for(i = palavraDeEntrada.length -1; i >= 0; i--){
   palavraAoContrario += palavraDeEntrada[i] 


}
if (palavraDeEntrada == palavraAoContrario){
    resultado = "essa palavra é um palindromo"
}else{
    resultado = "essa palavra não é um palindromo"
}

alert(`A palavra de entrada foi:\n 
${palavraDeEntrada}\n
Esssa palavra ao contrario fica:\n
${palavraAoContrario}\n
\nPortando, ${resultado}.
`)
