const person = {//declaração de objeto 
    name: "Luke",
    job: "Farmer",
    parents: ["Abakin","Padme"]
}

const name = person.name //não funciona mais 

const {job , parents} = person // jeito moderno de atribuir valor à variavel

console.log(name, job, parents)//o nome da variavel criada é o mesmo nome da chave (key) do objeto 


