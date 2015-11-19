/*
<visible-tab-header attr-tab-color-class="red" attr-icon-class="profile">
</visible-tab-header>
 */
(function() {
    'use strict';

    angular
        .module('cv')
        .directive('container', container);

    ////

    function container() {
        var directive = {
            restrict: 'E',
            scope:{},
            templateUrl: './container/container.directive.html',
            transclude: true,
            compile: function ( tElement, tAttributes) {
                console.log('container' + ': compile');

                return {
                  pre: function(scope, iElem, iAttrs){
                    console.log('container' + ': pre link');
                  },
                  post: function(scope, iElem, iAttrs){
                    console.log('container' + ': post link');                   
                  }
                }
            }
        };
        return directive;
    };
    
})();
