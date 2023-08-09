const comprimento = parseFloat(prompt("Qual a medida total em metros?: "))

const opcaoDeMedida = prompt (`selecione uma unidade de medida \n
milimetro (mm)\n
centimetro(cm)\n
decimetro (dm)\n
decametro (dam)\n
hectometro(hm)\n
quilometro(km)\n
`)

const mm = comprimento * 1000
const cm = comprimento * 100
const dm = comprimento * 10
const dam = comprimento / 10 
const hm = comprimento / 100
const km = comprimento / 1000

switch (opcaoDeMedida){

    case "mm":
        alert (`A quantidade em milimetros é ${mm}mm `)
        break
       
        case "cm":
        alert (`A quantidade em centimetros é ${cm}cm `)
        break
        
             case "dm":
        alert (`A quantidade em decimetros é ${dm}dm `)
        break
        
                case "dam":
        alert (`A quantidade em decamtros é ${dam}dam `)
        break
        
                    case "hm":
        alert (`A quantidade em hectometros é ${hm}hm `)
        break
        
                        case "km":
        alert (`A quantidade em kilometros é ${km}km `)
        break
            default:("Opção inválida!")
        
        


}