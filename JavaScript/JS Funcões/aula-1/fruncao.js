function criarUsuario(nome, tipo="admin",email, senha, ){
    const usuario = {
        nome,
        email, // a virgula age da mesma forma que email: email (apenas quando o nome é igual)
        senha,
        tipo
        
    }
    console.log(usuario)
}

criarUsuario("vinicius", "vinicius@aa.com","1234") // sempre colocar os parametros que contém padrões no final, caso contrário, ele não irá funcionar 
