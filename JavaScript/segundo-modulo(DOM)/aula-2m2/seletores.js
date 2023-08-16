function show(){
    const contactList = document.getElementById('contact-list')
    //esse seletor vai puchar o elemento pelo ID
    const listElements= document.getElementsByTagName('li')
    //esse seletor pucha o elemento pela tag(li,p,h1,input)
    const contactInput= document.getElementsByClassName('nomedaclasse')
    //esse seletor vai puchar pelo nome da classe
    const contacts= document.querySelectorAll('#contact > li > label')
    //esse seletor pucha todos os itens acima listados e adiliados
    const contact1= document.querySelector('#contact > li > label')
    //esse seletor pucha apenas o ultimo(o filho)
    const contact2= document.getElementsByName('name')
    //esse seletor pucha apenas pelo 'name' que tem no input por exemplo
    
}