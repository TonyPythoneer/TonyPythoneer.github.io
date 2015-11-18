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
            controller: MainMenuConteroller,
            controllerAs: 'ctrl',
            compile: function compile( tElement, tAttributes) {
                console.log('mainMenu' + 'compile');
                return {
                  pre: function(scope, iElem, iAttrs){
                    console.log('mainMenu' + ': pre link');
                  },
                  post: function(scope, iElem, iAttrs){
                    console.log('mainMenu' + ': post link');                   
                  }
                }
            }
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
})();
