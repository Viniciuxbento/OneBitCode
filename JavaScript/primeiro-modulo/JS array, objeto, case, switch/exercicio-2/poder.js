const Nome1 = prompt("Informe o nome do personagem 1: ")
const Atk = parseFloat(prompt("Informe a quantidade de ATK do seu personagem: "))

const Nome2 = prompt("Informe o nome do personagem 2: ")
const Def = parseFloat(prompt("Informe a quantidade de DEF do seu personagem: "))
const Vida = parseFloat(prompt("Informe a quantidade de VIDA do seu personagem: "))
const Escudo = confirm("Seu personagem possui escudo?")

const danoRecebido = Atk - Def
const danoRecebidoEscudo = danoRecebido / 2
const danoTotal = Vida - danoRecebido
const danoTotalEsc = Vida - danoRecebidoEscudo


if (Atk > Def && Escudo == false) { 
 alert (`O dano recevido foi ${danoRecebido} e sua vida ficou = ${danoTotal}`)
}
else if(Atk > Def && Escudo == true){
    alert(`O dano recevido foi ${danoRecebidoEscudo} e sua vida ficou = ${danoTotalEsc} `)

}else if(Atk < Def){
    alert ("Você recebeu 0 de dano")

}else {
    alert ("algo deu errado ")
}

















// nome e poder de atk

// nome // vida // def // possui escudo

// atk > def !escudo ==   dano = atk != def

// atk > def  + escudo ==  metade dano = atk != def

//atk < def dano 0 