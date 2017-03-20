// depend_on_asset "view.html"

(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('home', home);

    home.$$inject = [];

    function home() {
        // Usage:
        //     <home></home>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'directives/home.template.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    
})();