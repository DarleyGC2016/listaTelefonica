(function(angular) {
    'use strict';
    angular
    .module('serialGenerator')
    .provider("serialGenerator", function(){
        var _lenght;
        this.getLenght = function () {
            return _lenght;
        }

        this.setLenght = function (lenght) {
            _lenght = lenght;
        }

        this.$get = function () {
            return {
                generate: function(){
                    var serial = "";
                    while (serial.length < _lenght) {
                        serial+= String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                    }
                    console.log(serial);
                    return serial;
                }
            }
        }
    });
})(angular);