const veiculo_a= prompt("Informe o nome do seu carro: ")
const velocidade_a =  prompt ("Informe a velocidade maxima do seu carro: ")

const veiculo_b= prompt("Informe o nome do seu carro: ")
const velocidade_b =  prompt ("Informe a velocidade maxima do seu carro: ")

if (velocidade_a > velocidade_b){
    alert (`E o vencedor foi ${veiculo_a}!`)
}else if (velocidade_b > velocidade_a){
    alert (`E o vencedor foi ${veiculo_b}!`)}
    else {
        alert (`E o resultado foi EMPATE!`)}
    
