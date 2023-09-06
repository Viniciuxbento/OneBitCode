class dataUser {
    constructor(fullName, email, senha) {
        this.fullName = fullName
        this.email = email
        this.senha = senha
    }

}

const vinicius = new dataUser("Vinicius Bento", "vinicius@hotmail.com", "1234")

function infoUser(emailLogin, senhaLogin) {

    
    if (emailLogin == vinicius.email && senhaLogin == vinicius.senha) {
        console.log(`Parabéns ${vinicius.fullName}, você entrou na sua conta`)

    } else {
        console.log(`Senha ou email incorretos`)
    }

}



console.log(infoUser("vinicius@hotmail.com", "1234"))

class product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
        
    }
    addToStock(inStock){
        this.inStock += inStock

    }

    calculateDesconto(valorDesconto){
        let desconto = valorDesconto * this.price / 100
        this.price = this.price - desconto
       
       
    }
    
}

const notebook = new product("Notebook intel core 8gb", "8gb RAM, Placa de video integrada, 1tb memória", 2379)
notebook.calculateDesconto(15)
notebook.addToStock(12)
console.log(notebook)