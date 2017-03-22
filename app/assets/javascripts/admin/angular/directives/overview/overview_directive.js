(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('overview', overview);

    overview.$$inject = ['MovieBrowserService'];
    function overview(MovieBrowserService) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            controller: 'OverviewController',
            controllerAs: 'vm',
            templateUrl: 'directives/overview.template.html',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();
