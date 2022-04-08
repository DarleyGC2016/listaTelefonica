//localizar controller
angular
.module("listaTelefonica")
.controller("contatosCtrl", function ($scope,contatos,operadoras,serialGenerator) {
    $scope.app = "Lista Telefônica"
    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;
    
    var init = function(){
        calcularImpostos($scope.contatos);
        generateSerial($scope.contatos);
    }

    var generateSerial = function(contatos){
            contatos.forEach(contato => {
                contato.serial = serialGenerator.generate();
            });  
    }
                
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(
            function (contato) {
                if(!contato.selecionado) return contato;
            }
        );
        $scope.verificarSelecionado(contatos);
    }

    $scope.verificarSelecionado = function (contatos) {
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
            return contato.selecionado;
        });
    }

    $scope.ordenarPor = function(campo){
            $scope.ordenar = campo;
            $scope.sentido = !$scope.sentido;
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

    
    init();
});
/**(function(angular) {
    'use strict';

    angular
        .module('listaTelefonica')
        .controller('contatosCtrl', ContatosController);

    ContatosController.$inject = ['$scope','contatos','operadoras','serialGenerato'];
    function ContatosController($scope,contatos,operadoras,serialGenerator) {
        var vm = this;
        

        var app = "Lista Telefônica"
        $scope.contatos = contatos.data;
        $scope.operadoras = operadoras.data;
        
        var init = function(){
            calcularImpostos($scope.contatos);
            generateSerial($scope.contatos);
        }
    
        var generateSerial = function(contatos){
                contatos.forEach(contato => {
                    contato.serial = serialGenerator.generate();
                });  
        }
                    
        $scope.apagarContatos = function (contatos) {
            $scope.contatos = contatos.filter(
                function (contato) {
                    if(!contato.selecionado) return contato;
                }
            );
            $scope.verificarSelecionado(contatos);
        }
    
        $scope.verificarSelecionado = function (contatos) {
            $scope.hasContatoSelecionado = contatos.some(function (contato) {
                return contato.selecionado;
            });
        }
    
        $scope.ordenarPor = function(campo){
                $scope.ordenar = campo;
                $scope.sentido = !$scope.sentido;
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
    
        
        init();
    }
})(angular);
*/