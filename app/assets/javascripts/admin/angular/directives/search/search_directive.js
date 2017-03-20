(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('search', search);

    search.$$inject = ['MovieService'];

    function search(MovieService) {
        // Usage:
        //     <search></search>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'directives/search.template.html'
        };
        return directive;

        function link(scope, element, attrs) { }
    }

})();