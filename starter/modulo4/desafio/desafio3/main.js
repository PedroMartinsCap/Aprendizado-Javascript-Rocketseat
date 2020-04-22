var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

//Criar a <ul> na DOM
var bodyElement = document.querySelector('body');
var ulElement = document.createElement('ul');
bodyElement.appendChild(ulElement);

searchRepositories = function(){
    ulElement.innerHTML = '';
    
    var liElement = document.createElement('li');
    var textElement = document.createTextNode("carregando...");

    ulElement.appendChild(liElement);
    liElement.appendChild(textElement);
    
    axios.get('https://api.github.com/users/'+inputElement.value+'/repos')
        .then(function(response){
            renderRepositories(response.data);
        })
        .catch(function(error){
            alert('Usuário Inexistente');
            ulElement.innerHTML = '';
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
