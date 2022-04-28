 //localizar controller
(function(angular) {
    'use strict';

        angular.module('listaTelefonica')
        .controller('novoContatoCtrl', NovoContatosController);

    NovoContatosController.$inject = ['contatosApi','serialGenerator','$location','operadoras'];
    
    function NovoContatosController(contatosApi,serialGenerator,$location,operadoras) {
        var vm = this;
        
        vm.addContato = addContato;

        vm.operadoras = operadoras.data;        

        function addContato(contato){

            contato.serial = serialGenerator.generate();

            contatosApi.saveContato(contato).then(function(data){
                delete vm.contato;
                vm.contatoForm.$setPristine();
                $location.path("/contatos");
            });
            
        }
    }
})(angular);