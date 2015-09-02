angular.module('mw.users.controller')
    .controller('RegisterController', RegisterController);

RegisterController.$inject = ['$location', '$scope', 'Auth'];

function RegisterController($location, $scope, Auth) {
    var vm = this;

    vm.register = function () {
        if (vm.username == "" || vm.password == "" || vm.confirm_password == "") {
            vm.username_req_err = vm.username == "" ? true : false;
            vm.password_req_err = vm.password == "" ? true : false;
            vm.confirm_password_req_err = vm.confirm_password == "" ? true : false;

            return;
        }

        Auth.username_exists(vm.username).then(
            function(response) {
                vm.username_dup_err = true;
            },
            function(response) {
                Auth.register(vm.username, vm.password);
            }
        )
    }

    vm.username = "";
    vm.password = "";
    vm.confirm_password="";

    vm.username_dup_err = false;
    vm.username_req_err = false;
    vm.password_req_err = false;
    vm.confirm_password_req_err = false;

    vm.password_match = function () {
        if (vm.confirm_password != "" && vm.password != vm.confirm_password) {
            return true;
        }
        return false;
    }
}