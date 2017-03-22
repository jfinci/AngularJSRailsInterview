(function(){
    'use strict';

    angular
        .module('app')
        .controller('CastBubbleController', CastBubbleController)

    CastBubbleController.$$inject = ['CastMemberService']

    function CastBubbleController(CastMemberService){
        var vm = this;
        
        vm.getProfileImgUrl = function (castMember, size) {
            return CastMemberService.getProfileImgUrl(castMember, size);
        }
    }
}());