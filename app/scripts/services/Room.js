(function () {
    function Room($firebaseArray) {
        var Room = {};

        var ref = firebase.database().ref().child('rooms');/* global firebase */
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.addRoom = function (roomName) {
            rooms.$add(roomName);
        };

        return Room;
    }

    angular /* global angular */
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
