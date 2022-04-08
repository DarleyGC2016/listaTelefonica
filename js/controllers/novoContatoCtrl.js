 //localizar controller
angular
.module("listaTelefonica")
.controller("novoContatoCtrl", function ($scope,contatosApi,serialGenerator,$location,operadoras) {
        

            $scope.operadoras = operadoras.data;
            
            $scope.addContato = function(contato){

                contato.serial = serialGenerator.generate();

                contatosApi.saveContato(contato).then(function(data){
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    $location.path("/contatos");
                });
                
            }
                        
});