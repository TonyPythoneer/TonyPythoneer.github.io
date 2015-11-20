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
                attrIconClass:'@',
                downloadResume:'@'
            },
            templateUrl: './components/visible-tab-header.directive.html',
            transclude: true,
            compile: compile,
            controller: VisibleTabHeaderConteroller,
            controllerAs: 'ctrl'
        };
        return directive;

        ///
        function compile(tElement, tAttrs, transclude) {
            return {
                pre: preLink,
                post: postLink
            }
        }

        function preLink(scope, iElement, iAttrs, controller) {
            if (scope.downloadResume === 'false') {
                $('.download-resume').hide();
            }

        }

        function postLink(scope, iElement, iAttrs, controller) {
            /*
            console.log("postLink")
            var tabColor = '.tab-' + scope.attrTabColorClass
            var query = document.querySelector(".tab-trigger")
            console.log(document.querySelector("i.tab-trigger"));
            //console.log(iElement)
            //iElement.find('a').on('click', clickPrevOrNextBtn);

            //rebinding for inital
            $('.tab-trigger').click(function() {
                var wrapper = $(this).closest('.tab-wrapper');
                $Dash.toggleTab(wrapper);
                // pull the main content wrapper up when at least one tab is opened
                if ($('.tab-wrapper').hasClass('open')) {
                    $(this).closest('.main-content > .wrapper').addClass('up');
                } else {
                    $(this).closest('.main-content > .wrapper').removeClass('up');
                }
            });
            */

        }
    };

    VisibleTabHeaderConteroller.$inject=['$scope','clickTabFactory'];

    function VisibleTabHeaderConteroller($scope,clickTabFactory) {
        var self = this;
        self.title = (function(s){return s && s[0].toUpperCase() + s.slice(1);})($scope.attrIconClass)
        self.getIconClass = getIconClass;
        self.getTabColorClass = getTabColorClass;
        self.clickTab = clickTabFactory.clickTab

        ///

        function getIconClass(iconType){
            var class_ = {};
            class_[iconType] = true;
            return class_;
        };

        function getTabColorClass(color){
            var class_ = {};
            class_["tab-" + color] = true;
            return class_;
        };

    };
})();
