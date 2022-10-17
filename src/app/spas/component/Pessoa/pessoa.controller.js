(function (angular) {
    'use strict';

    angular.module('listaTelefonica')
    .controller('PessoaController',PessoaController);

    PessoaController.$inject = [];

    function PessoaController() {
        var vm = this;
        vm.gente = {nome:'Giraia'};
       console.log(vm.gente);
    }

})(angular);