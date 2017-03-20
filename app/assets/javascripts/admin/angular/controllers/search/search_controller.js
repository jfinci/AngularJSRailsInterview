(function(){
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController)

    SearchController.$$inject = ['MovieService'];

    function SearchController(MovieService) {
        var vm = this;
        vm.getMoviePosterUrl = getMoviePosterUrl;
        vm.onSearchChange = onSearchChange;
        vm.searchText = '';
        vm.movieResults = [];

        activate();

        $(".search-results").mCustomScrollbar();

        function activate() { }

        // Exports
        function getMoviePosterUrl(path) {
            return 'http://image.tmdb.org/t/p/w92/' + path;
        }

        function onSearchChange () {
            if (vm.searchText.length > 2) {
                vm.movieResults = [];
                MovieService.findInTitle(vm.searchText)
                .$promise.then(function(movies) {
                    console.log(movies);
                    vm.movieResults = movies;
                });
            }
        }
    }
})();