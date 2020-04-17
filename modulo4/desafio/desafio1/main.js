function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        if(idade >= 18){
            setTimeout(2000000000,resolve(idade));
        }else{
            reject(idade);
        }
    });
}

checaIdade(21)
    .then(function(response) {
    console.log("Maior que 18");
    })
    .catch(function(error) {
    console.log("Menor que 18");
    });
    