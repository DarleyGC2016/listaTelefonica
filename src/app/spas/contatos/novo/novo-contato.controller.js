 //localizar controller
(function(angular) {
    'use strict';

        angular.module('listaTelefonica')
        .controller('novoContatoCtrl', NovoContatosController);

    NovoContatosController.$inject = ['contatosApi','serialGenerator','$location','operadoras'];
    
    function NovoContatosController(contatosApi,serialGenerator,$location,operadoras) {
        var vm = this;
        
        vm.addContato = addContato;
        vm.textoNome=textoNome;
        vm.minNome=minNome;
        vm.max = 50;
        vm.texto = 'O Darley é lindo!';
       console.log(vm.texto);
        

        vm.operadoras = operadoras.data;   
   
        
        function textoNome() {
            
           if(vm.contato.nome.length>0){
                 console.log(vm.max - vm.contato.nome.length);
                 return vm.max - vm.contato.nome.length;
           }
        }

        function minNome() {
            console.log("minNome(): "+vm.contato.nome.length + 4);
            return vm.contato.nome.length + 4;
        }

        function addContato(contato){
        
            contato.serial = serialGenerator.generate();

            contatosApi.saveContato(contato)
                .then(function(response){
                delete vm.contato;
                vm.contatoForm.$setPristine();
                $location.path("/contatos");
            });
            
        }
    }
})(angular);