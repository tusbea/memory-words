angular.module('mw.users.service')
    .factory('Auth', Auth);

Auth.$inject = ['$http'];

function Auth($http) {
    var Auth = {
        register: register,
        username_exists: username_exists
    };

    return Auth;

    function register(username, password) {
        return $http.post('/api/users/', {
            username: username,
            password: password,
        });
    }

    function username_exists(username) {
        return $http.get('/api/users/' + username);
    }
}