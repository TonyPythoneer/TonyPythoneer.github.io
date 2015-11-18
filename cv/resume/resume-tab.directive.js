/*
<visible-tab-header attr-tab-color-class="red" attr-icon-class="profile">
</visible-tab-header>
 */
(function() {
    'use strict';

    angular
        .module('cv')
        .directive('c2resumeTab', c2resumeTab);

    ////

    function c2resumeTab() {
        var directive = {
            restrict: 'E',
            templateUrl: './resume/resume-tab.directive.html',
            transclude: true,
            compile: function ( tElement, tAttributes) {
                console.log('c2resumeTab' + 'compile');
                return {
                  pre: function(scope, iElem, iAttrs){
                    console.log('c2resumeTab' + ': pre link');
                  },
                  post: function(scope, iElem, iAttrs){
                    console.log('c2resumeTab' + ': post link');                   
                  }
                }
            }
        };
        return directive;
    };

})();
