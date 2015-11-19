(function() {
    'use strict';

    angular
        .module('cv')
        .directive('radialProgressBar', radialProgressBar);

    ////

    function radialProgressBar() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './resume/radial-progress-bar.directive.html',
            transclude: true,
            controller: radialProgressBarController,
            controllerAs: 'ctrl'
        };
        return directive;

        ///

        function radialProgressBarController(){
            var self = this;
            self.progresses = [
                {skillName: "python", percentage: 90, color: "#356FA0"},
                {skillName: "django", percentage: 90, color: "#19BC9B"},
                {skillName: "mysql", percentage: 90, color: "#329ECB"},
                {skillName: "mongodb", percentage: 80, color: "#36A440"},
                {skillName: "javascript", percentage: 70, color: "#FFDA3D"},
                {skillName: "angularjs", percentage: 80, color: "#FD0020"}
                //{skillName: "typescript", percentage: 70, color: "#007ACD"}                
            ]
            self.toTitle = toTitle;

            ///
            
            function toTitle (s){
                return s && s[0].toUpperCase() + s.slice(1);
            }

        }
    };

})();
