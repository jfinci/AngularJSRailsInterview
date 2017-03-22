(function(){
    'use strict';

    angular
        .module('app')
        .service('MovieService', MovieService)

    MovieService.$$inject = ['$resource'];

    function MovieService($resource) {
        var resource = $resource('/movies.json?q[title_cont]=:searchTerm', {
            searchTerm:'@searchTerm'
        });

        resource.findInTitle = function (input) {
            return this.query({ 
                searchTerm: input
            });
        }

        resource.getPosterUrl = function (size, path) {
            return 'http://image.tmdb.org/t/p/' + size + '/' + path;
        }

        return resource;
    }
})();