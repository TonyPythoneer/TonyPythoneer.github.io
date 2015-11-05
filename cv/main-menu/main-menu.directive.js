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
            templateUrl: './main-menu/main-menu.directive.html',
            controller: MainMenuConteroller,
            controllerAs: 'ctrl'
        };
        return directive;
    };

    function MainMenuConteroller() {
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
        self.getMenuItemIcon = getMenuItemIcon;
        self.getMenuItemColor = getMenuItemColor;

        ////

        function getMenuItemIcon(iconType){
            var class_ = {
                icon: true,
                sprite: true
            };
            class_[iconType] = true;
            return class_;
        };

        function getMenuItemColor(color){
            var class_ = {
                "menu-item": true,
            };
            class_["menu-" + color] = true;
            return class_;
        };

    };
})();
