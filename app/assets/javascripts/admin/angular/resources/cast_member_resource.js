(function(){
    'use strict';

    angular
        .module('app')
        .service('CastMemberService', CastMemberService)
    CastMemberService.$$inject = ['$resource'];
    
    function CastMemberService($resource) {
        var resource = $resource('/movies/:movieId/cast_members.json', {
            movieId:'@movieId'
        });

        resource.getCastMembers = function (movieId) {
            return this.query({
                movieId: movieId
            });
        }

        resource.getProfileImgUrl = function (cast, size) {
            //hardcoding, bad, probably want this from a config in a real app
            return 'http://image.tmdb.org/t/p/' + size + cast.profile_path;
        }

        return resource;
    }

}());