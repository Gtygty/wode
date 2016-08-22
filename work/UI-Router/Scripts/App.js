var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/PageTab");

     $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            views: {
                "1": {
                    templateUrl: 'PageTab.html'
                },
                "zong": {
                    template: "<h1>HELLO!</h1>"
                }
            }
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            views: {
                "2": {
                    templateUrl: "Page1.html",
                },
            },
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            views: {
                "2": {
                    templateUrl: "Page2.html"
                },
            }
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            views: {
                "2": {
                    templateUrl: "Page3.html"
                },
            }
        })
        // 第三级view Page1
        .state("PageTab.Page1.Page11", {
            url:"/Page1",
            views: {
                "2": {
                    templateUrl: "Page1.html"
                },
                "one": {
                    template: "<h1>Page-1-1</h1>"
                },
            }
        })
        .state("PageTab.Page1.Page12", {
            url:"/Page1",
            views: {
                "one": {
                    template: "<h1>Page-1-2</h1>"
                },
            }
        })
       .state("PageTab.Page1.Page13", {
            url:"/Page1",
            views: {
                "one": {
                    template: "<h1>Page-1-3</h1>"
                },
            }
        })
       // 第三级view Page2
        .state("PageTab.Page2.Page21", {
            url:"/Page2",
            views: {
                "one": {
                    template: "<h1>Page-2-1</h1>"
                },
            }
        })
        .state("PageTab.Page2.Page22", {
            url:"/Page2",
            views: {
                "one": {
                    template: "<h1>Page-2-2</h1>"
                },
            }
        })
       .state("PageTab.Page2.Page23", {
            url:"/Page2",
            views: {
                "one": {
                    template: "<h1>Page-2-3</h1>"
                },
            }
        })
       // 第三级view Page3
        .state("PageTab.Page3.Page31", {
            url:"/Page3",
            views: {
                "one": {
                    template: "<h1>Page-3-1</h1>"
                },
            }
        })
        .state("PageTab.Page3.Page32", {
            url:"/Page3",
            views: {
                "one": {
                    template: "<h1>Page-3-2</h1>"
                },
            }
        })
       .state("PageTab.Page3.Page33", {
            url:"/Page3",
            views: {
                "one": {
                    template: "<h1>Page-3-3</h1>"
                },
            }
        })
});

