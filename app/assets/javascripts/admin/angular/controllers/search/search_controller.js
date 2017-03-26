(function(){
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController)

    SearchController.$$inject = ['MovieService', 'MovieBrowserService'];

    function SearchController(MovieService, MovieBrowserService) {
        var vm = this;
        vm.getMoviePosterUrl = getMoviePosterUrl;
        vm.onSearchChange = onSearchChange;
        vm.onMovieSelect = onMovieSelect;

        vm.movieResults = [];
        vm.searchText = '';
        vm.selectedMovie = null;

        function getMoviePosterUrl(size, path) {
            return MovieService.getPosterUrl(size, path);
        }

        function onSearchChange() {
            if (vm.searchText.length > 2) {
                vm.movieResults = [];
                MovieService.findInTitle(vm.searchText)
                .$promise.then(function(movies) {
                    vm.movieResults = movies;
                });
            }
        }

        function onMovieSelect(movie) {
            if (movie !== vm.selectedMovie) {
                vm.selectedMovie = movie;
                MovieBrowserService.onNext(movie);
            }
        }
    }
})();