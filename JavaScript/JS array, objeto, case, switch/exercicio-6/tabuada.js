let valorDeEntrada = parseInt(prompt("Digite o valor para ser multiplcado pela tabuada de 20: ")
)
let valoresMultiplicados = ""

for (i = 1; i < 20; i++){
    valoresMultiplicados += (`\n${valorDeEntrada} X ${i} = ${valorDeEntrada * i}`)
    
}

alert("Os valores multiplicadpos sâo os seguintes:\n" + valoresMultiplicados)

