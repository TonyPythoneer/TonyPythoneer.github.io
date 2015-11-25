(function() {
    'use strict';

    angular
        .module('cv')
        .directive('profileBox', profileBox);

    ////

    function profileBox() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './profile/profile-box.directive.html',
            transclude: true
        };
        return directive;
    };

})();
