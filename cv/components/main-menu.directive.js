(function() {
    'use strict';

    angular
        .module('cv')
        .directive('mainMenu', mainMenu);

    ////

    function mainMenu() {
        var directive = {
            restrict: 'E',
            scope:{},
            transclude: true,
            templateUrl: './components/main-menu.directive.html',
            controller: MainMenuController,
            controllerAs: 'ctrl'
        };
        return directive;

        ///

        function MainMenuController() {
            var self = this;
            self.menuItems = [
                {href: "#*",
                 iconType: "menu",
                 color: "black"},
                {href: "#profile-tab",
                 iconType: "profile",
                 color: "red"},
                {href: "#resume-tab",
                 iconType: "resume",
                 color: "keppel"},
                {href: "#portfolio-tab",
                 iconType: "portfolio",
                 color: "yellow"},
                {href: "#contact-tab",
                 iconType: "contact",
                 color: "blue"}
            ];
            self.getIconClass = getIconClass;
            self.getMenuColorClass = getMenuColorClass;

            ////

            function getIconClass(iconType){
                var classes = {
                    icon: true,
                    sprite: true
                };
                classes[iconType] = true;
                return classes;
            };

            function getMenuColorClass(color){
                var classes = {
                    "menu-item": true,
                };
                classes["menu-" + color] = true;
                return classes;
            };
        };

    };

})();
