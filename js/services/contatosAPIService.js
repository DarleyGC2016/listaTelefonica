angular
.module('listaTelefonica')
.factory('contatosApi', function($http,config){
    var _getContatos = function(){
       return $http.get(config.BASE_URL + "/contatos");
    }; 

        var _getContato = function(id){
            return $http.get(config.BASE_URL + "/contatos/" + id);
        }; 

     var _saveContato = function (contato) {
         return  $http.post(config.BASE_URL + "/contatos",contato);
    };   

    return {
        getContatos : _getContatos,
        getContato : _getContato,
        saveContato : _saveContato        
    }
});

