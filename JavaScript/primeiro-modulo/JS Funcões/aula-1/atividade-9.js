let opcaoSelecionada = ""

do {
    opcaoSelecionada = prompt("Bem-vindo à calculadora Geométrica!\n\nDigite a baixo a opção de calculo desejada:\n\n1-Área do triângulo.\n2-Área do retângulo.\n3-Área do quadrado.\n4-Área do trapézio.\n5-Área do círculo.\n\n6-Sair.")

    switch (opcaoSelecionada) {
        case "1": baseTriangulo = parseFloat(prompt("Qual tamanho da base do triangulo?"))
            alturaTriangulo = parseFloat(prompt("Qual altura do triangulo?"))
            function calculoTriangulo(base, altura) {
                resultadoTriangulo = (base * altura) / 2
                return resultadoTriangulo

            }
            calculoTriangulo(baseTriangulo, alturaTriangulo)

            alert("O resultado da área do seu triangulo é:\n\n" + resultadoTriangulo)
                ; break
        case "2": baseRetangulo = parseFloat(prompt("Qual tamanho da base do retangulo?"))
            alturaRetangulo = parseFloat(prompt("Qual altura do retangulo?"))
            function calculoRetangulo(base, altura) {
                resultadoRetangulo = (base * altura)
                return resultadoRetangulo
            }
            calculoRetangulo(baseRetangulo, alturaRetangulo)
            alert("O resultado da área do retangulo é:\n\n" + resultadoRetangulo)
                ; break
        case "3": ladoQuadrado = parseFloat(prompt("Informe o tamanho do lado do quadrado:"))
            function areaQuadrado(area) {
                resultadoQuadrado = area ** 2
                return resultadoQuadrado
            }
            areaQuadrado(ladoQuadrado)

            alert("O resultado da area do quadrado é:\n\n" + resultadoQuadrado)
                ; break
        case "4": base_maior = parseFloat(prompt("Qual tamanho da base maior do trapezio?"))
            base_menor = parseFloat(prompt("Qual tamanho da base menor do trapezio?"))
            alturaTrapezio = parseFloat(prompt("Qual a altura do trapezio?"))
            function calculoTrapezio(baseMaior, baseMenor, altura) {
                resultadoTrapezio = (baseMaior + baseMenor) * altura / 2
                return resultadoTrapezio
            }
            calculoTrapezio(base_maior, base_menor, alturaTrapezio)

            alert("O resultado da area do trapezio é : \n\n" + resultadoTrapezio)
                ; break
        case "5": pi = 3.14;
            raioCirculo = prompt("Qual o raio do circulo?")
            function calculoCirculo(raio) {
                areaCirculo = pi * (raio ** 2)
                return areaCirculo

            }
            calculoCirculo(raioCirculo)
            alert("O resultado da area do circulo é:\n\n" + areaCirculo)



                ; break
        case "6": alert("Encerrando")

            ; break
        default: alert("Opção inválida!")



    }

} while (opcaoSelecionada !== "6")
// código ficou bagunçado, pois as funções deveriam ficar no começo , não dentro dos cases, e deveria ser feito uma função para o menu