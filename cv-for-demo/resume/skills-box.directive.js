(function() {
    'use strict';

    angular
        .module('cv')
        .directive('skillsBox', skillsBox);

    ////

    function skillsBox() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './resume/skills-box.directive.html',
            transclude: true
        };
        return directive;

    };

})();
