let pessoa = {
    nome: "Vinicius",
    idade:23,
    dizerOla(){//aqui não precisa usar a palavra reservada (function)
        console.log("Ola mundo, meu nome é "+ this.nome)
    }
}
// metodos, nada mais é doque atribuir uma função dentro de um objeto (no caso pessoa)
console.log(pessoa)// chamando no console o objeto apenas
pessoa.dizerOla()//chamando a função dizerOla (que ja possui dentro dela mesma, um console.log)