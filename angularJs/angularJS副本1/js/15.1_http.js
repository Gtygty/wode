var myApp = angular.module('myModule', []);

myApp.controller("myController", function($scope,$http) {
	$http.get('/api/employees_1')
	.then(function(response){
		$scope.employees = response.data.rows;
	},function(error){
		console.log(error);
	})
	
});