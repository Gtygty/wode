var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "PageTab.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "Page1.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "Page2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "Page3.html"
        });

});
var myApp1 = angular.module("myApp1", ['ui.router']);

myApp1.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab2");

     $stateProvider
        .state("PageTab2", {
            abstract: true,
            url: "/PageTab2",
            templateUrl: "PageTab2.html"
        })
        .state("PageTab2.Page", {
            url:"/Page",
            templateUrl: "Page.html"
        })
});
