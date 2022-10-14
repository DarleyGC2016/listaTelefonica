(function(angular) {
    'use strict';

    angular
        .module("listaTelefonica")
        .config(Rotas);

        Rotas.$inject = ['$routeProvider'];
        
    function Rotas($routeProvider) {
        $routeProvider.when("/contatos",{
            templateUrl: "app/spas/contatos/listar/contatos.html",
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
            templateUrl: "app/spas/contatos/novo/novo-contato.html",
            controller: "novoContatoCtrl",
            controllerAs: "vm",
            resolve: {
                operadoras: function (operadoraAPI) {
                                return operadoraAPI.getOperadoras();
                }           
            }
        });
    
        $routeProvider.when("/detalhesContato/:id",{
            templateUrl: "app/spas/contatos/detalhar/detalhe-contato.html",
            controller: "detalhesContatoCtrl",
            controllerAs: "vm",
            resolve: {
                contato: function (contatosApi,$route) {
                                return contatosApi.getContato($route.current.params.id);
                }           
            }
        });
    
        $routeProvider.when("/error",{
            templateUrl: "app/spas/view/error.html"
        });
    
        $routeProvider.otherwise({redirectTo:"/contatos"});
    }
})(angular);