(function(){
    'use strict';

    angular
        .module('app')
        .controller('OverviewController', OverviewController)

    OverviewController.$$inject = ['CrewMemberService', 'CastMemberService', 'MovieService', 'MovieBrowserService'];

    function OverviewController(CrewMemberService, CastMemberService, MovieService, MovieBrowserService) {
        /* jshint validthis:true */
        var vm = this;
        vm.movie = null;
        vm.movieSelected = false;
        vm.onMovieSelected = onMovieSelected;
        vm.getMovieCastAndCrew = getMovieCastAndCrew;
        vm.getMoviePosterUrl = getMoviePosterUrl;
        vm.isMovieSelected = false;
        vm.topCast = [];
        vm.featuredCrew = [];

        activate();

        function activate() {
            MovieBrowserService.getSubject().subscribe( function(movie) {
                vm.onMovieSelected(movie)
            });
        }

        function getMovieCastAndCrew(movie) {
            let featuredCrew = [];
            CrewMemberService.getCrewMembers(movie.id)
                .$promise.then(function (crew) {
                    featuredCrew = crew.splice(0, 3);
                    return CastMemberService.getCastMembers(movie.id).$promise;
                }).then(function (cast) {
                    vm.movie = movie;
                    vm.topCast = cast.slice(0, 3);
                    vm.featuredCrew = featuredCrew;
                    vm.movieSelected = true;
                });
        }

        function getMoviePosterUrl(size) {
            return MovieService.getPosterUrl(size, vm.movie.poster_path);
        }

        function onMovieSelected(movie) {
            vm.movieSelected = false;
            vm.getMovieCastAndCrew(movie);
        }
    }
})();