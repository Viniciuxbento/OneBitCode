const person = {//declaração de objeto 
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin","Padme"]
}

const name = person.name //não funciona mais 

const {job , parents} = person // jeito moderno de atribuir valor à variavel

console.log(name, job, parents)//o nome da variavel criada é o mesmo nome da chave (key) do objeto 


const [father, mother] = parents // pega o array do objeto e coloca em variaveis (as variaveis sempre serão na mesma ordem dos itens do array)

function creatUser({name , job, parents}){//desestrutura o objeto que vai vir como parametro, isso encurta o return ali em baixo 
    const id = Math.floor(Math.random() * 999)//gerando numero de id aleatório
    return{
        id,
        name,
        job,
        parents
    }
}
const luke = creatUser(person) //criando o usuario com os parametros do objeto persom que foi criado la em cima 
console.log(luke)// chamando


