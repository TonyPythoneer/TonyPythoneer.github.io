(function() {
    'use strict';

    angular
        .module('cv')
        .factory('clickTabFactory', [clickTabFactory]);

    function clickTabFactory() {
        var _data = null;
        var factory = {
            clickTab: clickTab,
        };
        return factory;

        ///////////////

        function clickTab(color){
            var targetClass = '.tab-' + color
            var BaseClasses = '.tab-trigger.tab-header.alighleft'
            var mergeClasses = BaseClasses + targetClass
            var wrapper = $(mergeClasses).closest('.tab-wrapper');
            $Dash.toggleTab(wrapper);
            // pull the main content wrapper up when at least one tab is opened
            if ($('.tab-wrapper').hasClass('open')) {
                $(mergeClasses).closest('.main-content > .wrapper').addClass('up');
            } else {
                $(mergeClasses).closest('.main-content > .wrapper').removeClass('up');
            }
        }
    }

})();