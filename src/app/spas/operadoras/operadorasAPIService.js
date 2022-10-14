(function(angular) {
            'use strict';
        
            angular
                .module('listaTelefonica')
                .service('operadoraAPI', OperadoraService);
        
            OperadoraService.$inject = ['$http','config'];

            function OperadoraService ($http,config) {

                this.getOperadoras = function () {
                       return $http.get(config.BASE_URL + "/operadoras");
                };
            }
})(angular);