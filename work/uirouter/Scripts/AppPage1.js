var myApp1 = angular.module("myApp1", ["ui.router"]);

myApp1.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/page");
    $stateProvider
        .state("PageTab2", {
            url: "/PageTab2",
            templateUrl: "PageTab2.html",
            controller: 'PageCtrl'
        })