/*
<visible-tab-header attr-tab-color-class="red" attr-icon-class="profile">
</visible-tab-header>
 */
(function() {
    'use strict';

    angular
        .module('cv')
        .directive('visibleTabHeader', visibleTabHeader);

    ////

    function visibleTabHeader() {
        var directive = {
            restrict: 'E',
            scope:{
                attrTabColorClass:'@',
                attrIconClass:'@'
            },
            templateUrl: './components/visible-tab-header.directive.html',
            transclude: true,
            link: link,
            //controller: VisibleTabHeaderConteroller,
            //controllerAs: 'ctrl'
        };
        return directive;

        ///

        function link (scope, element, attrs){
            console.log(scope)
            console.log(element)
        }
    };



    VisibleTabHeaderConteroller.$inject=['$scope'];

    function VisibleTabHeaderConteroller($scope) {
        var self = this;
        self.title = (function(s){return s && s[0].toUpperCase() + s.slice(1);})($scope.attrIconClass)
        self.getIconClass = getIconClass;
        self.getTabColorClass = getTabColorClass;

        ///

        function getIconClass(iconType){
            var classes = {
                icon: true,
                sprite: true
            };
            classes[iconType] = true;
            return classes;
        };

        function getTabColorClass(color){
            var classes = {
                "tab-header": true,
                "tab-trigger": true,
                "alighleft": true
            };
            classes["tab-" + color] = true;
            return classes;
        };

    };
})();
