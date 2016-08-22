var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");
    $stateProvider
        .state("home", {
            url: "/home",
            views: {
                "": {
                    template: "<h1>HELLO!</h1>"
                },
                "chart": {
                    template: "chart"
                },
                "data": {
                    template: "data"
                }
            }
        })
        .state("index", {
            url: "/index",
            views: {
                "": {
                    template: "<h1>HELLO!</h1>"
                },
                "data": {
                    template: "data-index"
                }
            }
        })   
});