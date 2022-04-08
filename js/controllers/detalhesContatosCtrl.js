
angular
.module('listaTelefonica')
.controller('detalhesContatoCtrl', function ($scope,$routeParams,contato) {
    console.log("detalhes"+$routeParams.id);
    $scope.contato = contato.data;
 
});
