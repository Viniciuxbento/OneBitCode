let opcaoSelecionada = ""

do{ opcaoSelecionada = prompt("Bem-vindo à calculadora Geométrica!\n\nDigite a baixo a opção de calculo desejada:\n\n1-Área do triângulo.\n2-Área do retângulo.\n3-Área do quadrado.\n4-Área do trapézio.\n5-Área do círculo.\n\n6-Sair.")

switch(opcaoSelecionada){
    case "1":baseTriangulo = prompt("Qual tamanho da base do triangulo?")
            alturaTriangulo = prompt("Qual altura do triangulo?")
        function calculoTriangulo(base,altura){
            base = baseTriangulo
            altura = alturaTriangulo
            resultadoTriangulo = (base * altura) / 2
            return resultadoTriangulo

        }
        alert("O resultado da área do seu triangulo é:\n\n" + resultadoTriangulo)
        ; break
    case "2":; break
    case "3":; break
    case "4":; break
    case "5":; break
    case "6":; break
    default: alert("Opção inválida!")



}

}while(opcaoSelecionada !== "6")