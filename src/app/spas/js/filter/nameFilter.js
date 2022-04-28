angular
.module("listaTelefonica")
.filter("name",function () {
    return function (input) {
        var nomes = input.split(" ");
        var nomesFormatados =nomes.map(function (nome) {
            
            if(/(DA|da|de|De|DE)/.test(nome)) return nome.toLowerCase();
            
             return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });

        return nomesFormatados.join(" ");
    }
})