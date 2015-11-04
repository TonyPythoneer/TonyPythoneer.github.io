(function() {
    'use strict';

    angular
        .module('cv')
        .directive('mainMenu', mainMenu);

    function mainMenu() {
        var directive = {
            restrict: 'E',
            scope:{},
            transclude: true,
            templateUrl: './main-menu/main-menu.directive.html',
            controller: MainMenuConteroller,
            controllerAs: 'ctrl'
        };
        return directive;
    };

    function MainMenuConteroller() {
        var self = this;
        self.menuItems = [
            {href: "#*"},
            {href: "#profile-tab"},
            {href: "#resume-tab"},
            {href: "#portfolio-tab"}
        ];
    };

})();
