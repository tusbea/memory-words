angular.module('mw.routes')
    .config(config);
config.$inject = ['$routeProvider'];
function config($routeProvider) {
    $routeProvider.when('/register', {
        controller: 'RegisterController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/users/register.html'
    });
}