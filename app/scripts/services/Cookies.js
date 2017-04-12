(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/username.html',
                controller: 'UserNameCtrl',
                controllerAs: 'userName',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }

    angular /* global angular */
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
