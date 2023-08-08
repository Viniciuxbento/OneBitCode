let pilhaDeCartas = [" "]
let menuDeOpcoes = "0"



while(menuDeOpcoes != "4"){

    let menuDeOpcoes = prompt("Bem vindo ao seu baralho:\n\n 1- Adcionar carta ao baralho.\n 2- Pegar carta do baralho. \n 3- Mostrar cartas do baralho \n 4- Sair" )

    switch(menuDeOpcoes){

        case "1": let cartaAdcionada = prompt("Qual carta você quer adcionar?")
        if(cartaAdcionada !== 0){
            pilhaDeCartas.unshift(cartaAdcionada) 
        }else(alert("Essa carta não existe"))
        
        ;break;

        case "2": let cartaRemovida = pilhaDeCartas.shift() 
        if(pilhaDeCartas.length > 0){
            alert(" A carta removida foi: " + cartaRemovida )
        }else(alert("Não tem mais cartas"))
        ;break;
        
        case "3": alert(pilhaDeCartas);break;

        case "4": alert("Encerrando...");break;

        default: alert("Opção inválida!");

    }




}