(function(){
    'use strict';

    angular
        .module('app')
        .service('MovieBrowserService', MovieBrowserService)

    MovieBrowserService.$$inject = [];

    function MovieBrowserService() {
        var _selectedMovie = {};
        
        _selectedMovie.subject = new Rx.Subject();

        _selectedMovie.getSubject = function () {
            return this.subject;
        }

        _selectedMovie.onNext = function (movie) {
            this.subject.onNext(movie);
        }

        return _selectedMovie;
    }
})();