    
    angular
    .module("listaTelefonica")
    .run(function($templateCache){
        $templateCache.put("view/alertado.html",'<div ng-show = "mostrar" class="ui-alert">'+
                                                    '<div class="ui-alert-title">'+
                                                      '{{title}}'+
                                                     '</div>'+
                                                     '<div class="ui-alert-message">'
                                                        +'{{message}}'+
                                                     '</div>'+
                                                '</div>')
    })    
    
    angular
        .module("listaTelefonica")
        .directive("uiAlert",function () {
            return {
                templateUrl: "view/alertado.html",
                replace: true,
                restrict: "AE",
                scope:{
                    title: "@",
                    message: "=",
                    mostrar: "="
                }
            };
        });

      /**  angular
        .module("listaTelefonica")
        .directive("uiAlert",function () {
            return {
                templateUrl: "view/alert.html",
                replace: true,
                restrict: "AE",
                scope:{
                    title: "@"
                },
                transclude: true
            };
        });*/