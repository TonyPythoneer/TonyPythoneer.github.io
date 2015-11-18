/*
<visible-tab-header attr-tab-color-class="red" attr-icon-class="profile">
</visible-tab-header>
 */
(function() {
    'use strict';

    angular
        .module('cv')
        .directive('linearProgressBar', linearProgressBar);

    ////

    function linearProgressBar() {
        var directive = {
            restrict: 'E',
            templateUrl: './resume/linear-progress-bar.directive.html',
            transclude: true,
            controller: linearProgressBarController,
            controllerAs: 'ctrl'
        };
        return directive;

        function linearProgressBarController(){
            var self = this;
            self.progresses = [
                {skillName: "Backend Web Development", percentage: 90, color: "red"},
                             //Adobe After Effects
                {skillName: "Front-end Web Development", percentage: 70, color: "blue"},
                {skillName: "Database", percentage: 80, color: "green"}
            ]
            self.getProgressColorClass = getProgressColorClass;

            ///
            
            function getProgressColorClass(color){
                var class_ = {};
                class_[color] = true
                return class_
            }
        }
    };

})();
