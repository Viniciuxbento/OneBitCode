let visitouOuNao = true
let nomeCidade = ""
let quantidadeCidades = 0

while (visitouOuNao == true) {
    visitouOuNao = confirm("Você visitou alguma outra nova cidade?")
    if (visitouOuNao == true) {
        nomeCidade += "- " + prompt("Qual nome da cidade?") + "\n"
        quantidadeCidades++
    } else {
        alert(`Você visitou no total ${quantidadeCidades} cidades!\n E as cidades visitadas foram :\n ${nomeCidade}`)

    }

}

