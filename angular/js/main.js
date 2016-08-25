angular.module('ngRouteExample', ['ngRoute'])
.controller('HomeController', function ($scope) { $scope.$route = $route;})
.controller('AboutController', function ($scope) { $scope.$route = $route;})
.config(function ($routeProvider) {
    $routeProvider.
    when('UI5.0', {
        templateUrl: '2.html',
        controller: 'U5Controller'
    }).
    when('UI6.0', {
        templateUrl: '3.html',
        controller: 'U6Controller'
    }).
    otherwise({
        redirectTo: 'UI5.0'
    });
});