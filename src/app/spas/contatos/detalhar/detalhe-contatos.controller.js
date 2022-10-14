(function(angular) {
    'use strict';

    angular
        .module('listaTelefonica')
        .controller('detalhesContatoCtrl', DetalhesContatoCtrl);

        DetalhesContatoCtrl.$inject = ['contato'];

    function DetalhesContatoCtrl(contato) {
        var vm = this;
        vm.contato = contato.data;
    }
})(angular)
