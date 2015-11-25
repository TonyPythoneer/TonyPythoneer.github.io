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
            {officeName: "ThroughTek Co., Ltd.",
             jobDate: "2014 Dec - Now", //"2014 Dec - Now"
             jobPosition: "Backend Web Developer",
             description: "In charge of making the server, application, and database communicate \
                           with each other. Establish RESTful APIs about account and device managements \
                           as cloud infrastructure service for IOT/ M2M business requirement."}
        ];
        self.educations = [
            {schoolName: "National United University",
             schoolDate: "2010 - 2014",
             department: "Electronic Engineering",
             description: "Devoting to depolying backend web service as cloud Infrastructure Service \
                           and design front-end web server as WebUI. Initiating a smart house as IOT \
                           (internet of thing) prototype to solve real-world problems."}
        ]

    }

})();
