(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages'); /* global firebase */
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function (id) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(id));
            },
            send: function (newMessage) {
                messages.$add(newMessage);
            }
        };
    }

    angular /* global angular */
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
