(function(angular) {
    'use strict';

    angular
        .module('listaTelefonica')
        .controller('ContatosController', ContatosController);

    ContatosController.$inject = ['contatos','operadoras','serialGenerator'];

    function ContatosController(contatos,operadoras,serialGenerator) {

        var vm = this;
        vm.app = 'Lista Telefônica';
        vm.contatos = contatos.data;
        vm.operadoras = operadoras.data;
        vm.selecionado = false;

        vm.apagarContatos = apagarContatos;
        
        vm.init = function(){
            calcularImpostos(vm.contatos);
            generateSerial(vm.contatos);
           
        }
    
        var generateSerial = function(contatos){
                contatos.forEach(contato => {
                    contato.serial = serialGenerator.generate();
                });  
        }
              
        vm.addSelecionado = function(contato){
           
                vm.flag = vm.contatos.some(function(contato){    
                   if(contato.selecionado===true){
                        console.log("add: "+contato.selecionado);  
                        return !contato;  
                    }
                });
                console.log("flag: "+vm.flag);
        }
        var isSelecionado = function(contato){
            if(contato ===  undefined){
                contato = true;
                console.log(contato);
                return contato;
            }
        }

        function apagarContatos (contatos) {
            vm.contatos = contatos.filter(
                function (contato) {
                    if(!contato.selecionado){
                        console.log('Apagar: '+contato);
                         return contato;
                    }
                }
            );
        }

        vm.verificarSelecionado = function (contatos) {
           return contatos.some(function (contato) {
                    return contato.selecionado;
            });
           
        }
        
        vm.ordenarPor = function(campo){
                vm.ordenar = campo;
                vm.sentido = !vm.sentido;
        }
    
        var calcularImpostos = function (contatos) {
            contatos.forEach(function (contato) {
                contato.operadora.precoImposto = calcularImposto(contato.operadora.preco);
            })
        }
    
        var calcularImposto = function (preco) {
            var imposto = 1.2;
            return preco * imposto;
        }
    
        
        
    }
})(angular);
