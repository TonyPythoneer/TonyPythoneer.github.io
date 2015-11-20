(function() {
    'use strict';

    angular
        .module('cv')
        .directive('arrowDown', arrowDown);

    ////

    function arrowDown() {
        var directive = {
            restrict: 'E',
            scope:{
                attrTabColorClass:'@',
            },
            templateUrl: './components/arrow-down.directive.html',
            transclude: true,
            controller: ArrowDownConteroller,
            controllerAs: 'ctrl'
        };
        return directive;

    };

    ArrowDownConteroller.$inject=['clickTabFactory'];

    function ArrowDownConteroller(clickTabFactory) {
        var self = this;
        self.clickTab = clickTabFactory.clickTab;
    };
})();
