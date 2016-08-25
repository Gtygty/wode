var app = angular.module('FEERule', ['ui.router','app.controllers' 'app.services']);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {//路由设置

  $urlRouterProvider.otherwise('/index');

  $stateProvider
    .state('index', {
        url: '/index',
        templateUrl:'tpls/'
    })

}]);