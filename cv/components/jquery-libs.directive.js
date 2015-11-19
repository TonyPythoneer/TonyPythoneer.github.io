/*
<visible-tab-header attr-tab-color-class="red" attr-icon-class="profile">
</visible-tab-header>
 */
(function() {
    'use strict';

    angular
        .module('cv')
        .directive('jqueryLibs', jqueryLibs);

    ////

    function jqueryLibs() {
        var directive = {
            restrict: 'E',
            scope:{},
            //templateUrl: './components/jquery-libs.directive.html',
            transclude: true,
            compile: function compile( tElement, tAttributes) {


                return {
                  pre: function(scope, iElem, iAttrs){
                    console.log('jqueryLibs' + ': pre link');
                  },
                  post: function(scope, iElem, iAttrs){
                    var libs = [
                        '<script src="js/jquery.min.js"></script>',
                        '<script src="js/jquery.isotope.min.js" type="text/javascript"></script>',
                        '<script src="js/jquery.knob.js" type="text/javascript"></script>',
                        '<script src="fancybox/jquery.fancybox.pack.js" type="text/javascript"></script>',
                        '<script src="js/script.js" type="text/javascript"></script>'
                    ];
                    for (var i = 0; i < libs.length; i++) iElem.append(libs[i]);
                    console.log('jqueryLibs' + ': post link');                   
                  }
                }
            }
        };
        return directive;
    };
    
})();
