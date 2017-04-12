(function () {
    function RoomCtrl($uibModal, Room, Message, $cookies) {
        this.roomData = Room;

        this.open = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/newroom.html',
                controller: 'NewRoomCtrl',
                controllerAs: 'newRoom',
                backdrop: 'static'
            });
        };

        this.changeRoom = function (roomName, id) {
            this.roomName = roomName;
            this.roomId = id;
        };

        this.changeMessages = function (roomId) {
            this.roomMessages = Message.getByRoomId(roomId);
        };

        this.addMessages = function () {
            var newMessage = {
                content: this.newRoomMessage,
                roomId: this.roomId,
                sentAt: Date(),
                username: $cookies.get('username')
            };

            Message.send(newMessage);
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', 'Message', '$cookies', RoomCtrl]);
})();
