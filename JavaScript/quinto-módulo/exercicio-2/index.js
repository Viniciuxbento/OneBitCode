
function imc(peso,altura){

    return new Promise( (resolve, reject) =>{
        
        
        if(typeof peso === 'number' && typeof altura === 'number'){
            resolve(peso/(altura**2))
            setTimeout(()=>{
                console.log("IMC calculado com sucesso")
            }, 2000)
        }else{
            reject("Caracter invalido")
        }


    })
}


imc(90,1.76).then((imc)=>{
    if(imc < 18.5){
        console.log(`Seu IMC é de ${imc.toFixed(2)} , portanto está com IMC magresa`)
    }else if(imc >= 18.5 & imc < 24.9){
        console.log(`Seu IMC é de ${imc.toFixed(2)} , portanto está com IMC normal`)
    }else if(imc >=24.9 & imc < 29.9){
        console.log(`Seu IMC é de ${imc.toFixed(2)} , portanto está com IMC sobrepeso`)
    }else if(imc >=30 & imc <39.9){
        console.log(`Seu IMC é de ${imc.toFixed(2)} , portanto está com IMC obesidade`)
    }else{
        console.log(`Seu IMC é de ${imc.toFixed(2)} , portanto está com IMC obesidade grave`)
    }
}).catch((err)=>{
   console.log("Houve um erro: " + err)
})


