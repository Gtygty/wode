var myApp = angular.module('myModule', ['ngAnimate'])
// .controller('myController', ['$scope', '$interval', function($scope, $interval) {
// 				$scope.number = 0;
// 				$interval(function() {
// 					$scope.number++;
// 				}, 1000);
//  var colors = ['red','blue','green','yellow','orange'];
//  $scope.colorClass = function(number) {
//    return colors[number % colors.length];
//  };
// }])
.animation('.fade', fade)
.controller('testCtrl',testCtrl);
     function fade() {
         return {
             enter: function (element, done) {
                 element.css('display', 'none');
                 $(element).fadeIn(1000, function () {
                 	console.log('EnterDone')
                     done();
                 });
             },
             leave: function (element, done) {
                 $(element).fadeOut(1000, function () {
                 	console.log('leaveDone')
                     done();
                 });
             },
             move: function (element, done) {
                 element.css('display', 'none');
                 $(element).slideDown(500, function () {
                 	console.log('moveDone')
                     done();
                 });
             }
         }
     }
   
     function testCtrl() {
        this.items = [
           { value: "AAAAA" },
           { value: "BBBBB" },
           { value: "CCCCC" },
           { value: "DDDDD" },
           { value: "EEEEE" }
        ];
        this.addItem = function () {
            this.items.push(this.item);
            this.item = {};
        };
        this.removeItem = function (index) {
            this.items.splice(index, 1);
        };
        this.bottomToTop = function () {
            this.items.unshift(this.items.pop());
        };
     }