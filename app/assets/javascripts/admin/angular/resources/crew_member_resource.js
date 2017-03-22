(function(){
    'use strict';

    angular
        .module('app')
        .service('CrewMemberService', CrewMemberService)

    CrewMemberService.$$inject = ['$resource'];

    function CrewMemberService($resource) {
        var resource = $resource('/movies/:movieId/crew_members.json', {
            movieId:'@movieId'
        });

        resource.getCrewMembers = function (movieId) {
            return this.query({
                movieId: movieId
            });
        }

        return resource;
    }
})();