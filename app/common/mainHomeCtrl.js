app.controller("mainHomeCtrl", ['$state',
    function ($state) {
        var vm = this;
        vm.fnGotoDashboard = function () {
            $state.go('app.dashboard');
        }
    }
]);