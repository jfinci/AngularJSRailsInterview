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
            restrict: 'EA',
            templateUrl: 'directives/search.template.html',
            controller: 'SearchController',
            controllerAs: 'vm',
            scope: {}
        };
        return directive;
    }

})();