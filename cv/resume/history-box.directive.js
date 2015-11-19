(function() {
    'use strict';

    angular
        .module('cv')
        .directive('historyBox', historyBox);

    ////

    function historyBox() {
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: './resume/history-box.directive.html',
            transclude: true,
            controller: HistoryBoxController,
            controllerAs: 'ctrl'
        };
        return directive;

        ///

    };

    function HistoryBoxController () {
        var self = this;
        self.jobs = [
            {officeName: "123", 
             jobDate: "2014 Dec - Now", //"2014 Dec - Now"
             jobPosition: "Backend Web Developer",
             description: "Sed in viverra felis, semper laoreet eros. Nunc urna diam, lacinia \
                           sed varius vitae, posuere eu nunc. Vestibulum a turpis vulputate, \
                           volutpat mauris nec."}
        ];
        self.educations = [
            {schoolName: "National United University", 
             schoolDate: "2010 - 2014", 
             department: "Electronic Engineering",
             description: "temp"}
        ]

    }

})();
