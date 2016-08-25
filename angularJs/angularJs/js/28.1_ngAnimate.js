var myApp = angular.module('myModule', ['ngAnimate']).
controller("myController",function($scope,$timeout){
	$scope.bool = false;
	$timeout(function(){
		$scope.bool = true;
	},3000)
});
