// public/js/appRoutes.js

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'MainController'
    })
        .when('/film', {
            templateUrl : 'views/film.html',
            controller : 'MainController'
    })
        .when('/users', {
            templateUrl : 'views/users.html',
            controller : 'UserController'
    });
    
    
    $locationProvider.html5Mode(true);
}]);