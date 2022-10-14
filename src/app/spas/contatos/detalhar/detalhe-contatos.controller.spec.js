describe('detalheContato()',function () {

   beforeEach(angular.mock.module('listaTelefonica'));
   var contato = {}

    it("detalhesContatoCtrl()",function(){
        spyOnProperty(contato,"contato");
    });
})