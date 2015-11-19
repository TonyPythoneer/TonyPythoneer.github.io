/*
<visible-tab-header attr-tab-color-class="red" attr-icon-class="profile">
</visible-tab-header>
 */
(function() {
    'use strict';

    angular
        .module('cv')
        .directive('resumeTab', c2resumeTab);

    ////

    function c2resumeTab() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './resume/resume-tab.directive.html',
            transclude: true
        };
        return directive;
    };

})();
