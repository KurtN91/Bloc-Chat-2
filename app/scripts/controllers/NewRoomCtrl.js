(function () {
    function NewRoomCtrl($uibModalInstance, Room) {
        var allRooms = Room.all;

        this.getById = function () {
            Room.addRoom(this.name);
            $uibModalInstance.close();
        };
        this.cancel = function () {
            $uibModalInstance.dismiss('Cancel');
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('NewRoomCtrl', ['$uibModalInstance', 'Room', NewRoomCtrl]);
})();
