(function () {
    function UserNameCtrl($uibModalInstance, $cookies) {
        this.submit = function () {
            $cookies.put('username', this.username);
            $uibModalInstance.dismiss('Submit Username');
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('UserNameCtrl', ['$uibModalInstance', '$cookies', UserNameCtrl]);
})();
