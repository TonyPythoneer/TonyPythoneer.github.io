(function() {
    'use strict';

    angular
        .module('cv')
        .directive('protfolioTab', protfolioTab);

    ////

    function profileTab() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './protfolio/protfolio-tab.directive.html',
            transclude: true
        };
        return directive;
    };

})();
