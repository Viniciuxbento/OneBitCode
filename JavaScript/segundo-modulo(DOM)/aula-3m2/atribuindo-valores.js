function addInput() {
    const ul = document.getElementById('inputs')
    //pegando a ul cujo o id é inputs
  
    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Novo input: '
    //creat element serve para criar um elemento no HTML, basta passar a tag do elemento desejado
    //className = para adcionar o nome da classe que o elemento vai obter
    //innerText = para adcionar ou substituir um texto que vai conter no elemento 
  
    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
    //criando outro elemento, no caso um input
    //type = serve para dizer qual o tipo do input (text, tel, email)
    //name= serve para dar o nome ao name ( que é como se fosse uma classe)
  
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
    //appenChild aplicar filho, no caso ele vai atribuir newLi dentro da ul e o mesmo com o input
  }