(function() {
    'use strict';

    angular
        .module('cv')
        .directive('profileTab', profileTab);

    ////

    function profileTab() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './profile/profile-tab.directive.html',
            transclude: true
        };
        return directive;
    };

})();
