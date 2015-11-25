(function() {
    'use strict';

    angular
        .module('cv')
        .directive('contactTab', contactTab);

    ////

    function contactTab() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './contact/contact-tab.directive.html',
            transclude: true
        };
        return directive;
    };

})();
