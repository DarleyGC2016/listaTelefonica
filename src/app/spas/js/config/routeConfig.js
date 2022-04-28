(function(angular) {
    'use strict';

    angular
        .module("listaTelefonica")
        .config(Rotas);

        Rotas.$inject = ['$routeProvider'];
        
    function Rotas($routeProvider) {
        $routeProvider.when("/contatos",{
            templateUrl: "view/contatos.html",
            controller: "ContatosController",
            controllerAs: "vm",
            resolve: {
                contatos: function (contatosApi) {
                            return contatosApi.getContatos();
                },
                operadoras: function (operadoraAPI) {
                                return operadoraAPI.getOperadoras();
                }           
            }
        });
        $routeProvider.when("/novoContato",{
            templateUrl: "view/novoContato.html",
            controller: "novoContatoCtrl",
            controllerAs: "vm",
            resolve: {
                operadoras: function (operadoraAPI) {
                                return operadoraAPI.getOperadoras();
                }           
            }
        });
    
        $routeProvider.when("/detalhesContato/:id",{
            templateUrl: "view/detalhesContatos.html",
            controller: "detalhesContatoCtrl",
            resolve: {
                contato: function (contatosApi,$route) {
                                return contatosApi.getContato($route.current.params.id);
                }           
            }
        });
    
        $routeProvider.when("/error",{
            templateUrl: "view/error.html"
        });
    
        $routeProvider.otherwise({redirectTo:"/contatos"});
    }
})(angular);