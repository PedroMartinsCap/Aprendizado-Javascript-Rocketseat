var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

//Criar a <ul> na DOM
var containerElement = document.querySelector('body');

var ulElement = document.createElement('ul');
containerElement.appendChild(ulElement);

//Promise para buscar os valores na API
var promise = function(){
    return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
    
            xhr.open('GET','https://api.github.com/users/' +inputElement.value +'/repos');
            xhr.send(null);

            xhr.onreadystatechange = function(){
    
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject("Erro na requisição")
                    }
                }
            
            }
    });

}

// Função que chama a Promise
function searchRepositories(){
    promise()
        .then(function(response){
            renderRepositories(response);
            console.log("OK");
        })
        .catch(function(error){
            ulElement.innerHTML = '';
            alert("Erro "+ error + " Usuário Inexistente");
        });
}


//Renderiza os repositórios
function renderRepositories(response){
    ulElement.innerHTML = '';

    for(repositorie of response){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(repositorie.name);
        
        ulElement.appendChild(liElement);
        liElement.appendChild(textElement);
    }
}
