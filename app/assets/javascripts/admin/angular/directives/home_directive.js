// depend_on_asset "view.html"

(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('home', home);

    home.$$inject = ['MovieBrowserService'];
    function home(MovieBrowserService) {
        // Usage:
        //     <home></home>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'directives/home.template.html',
            scope: {}
        };
        
        return directive;

        function link (scope, element, attrs) {
            scope.isMovieSelected = false;
            MovieBrowserService.getSubject().subscribe(function (movie) {
                scope.isMovieSelected = true;
            });
        }
    }
    
})();
