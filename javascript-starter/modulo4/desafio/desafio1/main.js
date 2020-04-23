function checaIdade(idade) {
    return new Promise(function(resolve, reject){      
        setTimeout(function(){
            if(idade >= 18){
                resolve();
            }else{
                reject();
            }
        },2000);

        //Também pode ser escrito assim... 
        //It can also be written as... 

        /*
        setTimeout(function(){
            return (idade >= 18) ? resolve() : reject()
        }, 2000);
        */

    });
}

checaIdade(21)
    .then(function(response) {
    console.log("Maior que 18");
    })
    .catch(function(error) {
    console.log("Menor que 18");
    });
    
