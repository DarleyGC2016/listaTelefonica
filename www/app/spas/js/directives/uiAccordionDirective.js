angular
.module("listaTelefonica")
.directive("uiAccordions",function () {
    return {
        controller: function () {
            var accordions = [];

            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            }

            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                })
            }
        }
    };
});


angular
.module("listaTelefonica")
.directive("uiAccordion",function () {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope:{
            title: "@"
        },
        require: "^uiAccordions",
        link: function (scope,element,atrrs,ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function(){
                ctrl.closeAll();
                scope.isOpened = true;
            }
        }
    };
});