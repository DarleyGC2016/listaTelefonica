angular
.module("listaTelefonica")
.config(function($routeProvider){
    $routeProvider.when("/contatos",{
        templateUrl: "view/contatos.html",
        controller: "contatosCtrl",
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
});