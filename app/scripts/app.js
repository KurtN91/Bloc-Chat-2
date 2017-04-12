(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
         .html5Mode({
             'enabled': true,
             'requireBase': false
         });

        $stateProvider
         .state('room', {
             'controller': 'RoomCtrl as homeRoom',
             'templateUrl': '/templates/room.html',
             'url': '/'
         });
    }
    angular /* global angular*/
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'ngCookies', 'firebase'])
        .config(config);
})();
