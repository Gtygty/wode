var myApp = angular.module('myModule', []);

myApp.controller('myController', function($scope, $anchorScroll, $location, $http) {
	$http.get('/api/province').then(function(response) {
		$scope.provinces = 	response.data;
	})

	$scope.scrollTo = function(provinceName) {
		$location.hash(provinceName);
		$anchorScroll.yOffset = 20;
		$anchorScroll();
	}
})