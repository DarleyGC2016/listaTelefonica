angular.module('listaTelefonica')
    .directive('telefoniaPessoa', TelefoniaPessoa);

    TelefoniaPessoa.$inject = [];

    function TelefoniaPessoa() {
        return {
            restrict: 'E',
            replace: true,
            scope:{
                nome: '=?textoNome',
                data: '=?dataNascimento',
                telefone: '=?telefonePessoal'
              
            },
            bindToController: true,
            controller: 'PessoaController',
            controllerAs: 'vm',
            templateUrl: 'app/spas/component/pessoa/pessoa.html'
        };
    }