(function(angular) {
    'use strict';
angular
.module("listaTelefonica")
.config(function(serialGeneratorProvider){
    serialGeneratorProvider.setLenght(5);
});
})(angular);