var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");
    $stateProvider.state("home", {
            url: "/home",
            views: {
                "": {
                    templateUrl: 'PageTab.html'
                },
                "chart": {
                    templateUrl: 'Page1.html'
                },
                "data": {
                    templateUrl: 'Page2.html'
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