(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('castBubble', castBubble);

    castBubble.$$inject = ['CastMemberService'];

    function castBubble(CastMemberService) {
        // Usage:
        //     <cast-bubble></cast-bubble>
        // Creates:
        //
        var directive = {
            restrict: 'EA',
            templateUrl: 'directives/castbubble.template.html',
            scope: {
                castMember: '='
            }
        };
        return directive;
    }
})();