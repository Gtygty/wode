var myModule = angular.module('myModule', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when("/home", {
				templateUrl: "Templates/18/home.html",
				controller: "homeController"
			})
			.when("/courses", {
				templateUrl: "Templates/18/courses.html",
				controller: "coursesController"
			})
			.when("/employees", {
				templateUrl: "Templates/18/employees.html",
				controller: "employeesController"
			})
	})
	.controller('homeController', function($scope) {
		$scope.message = "Home page";
	})
	.controller('coursesController', function($scope) {
		$scope.courses = ["Android", "Ios", "Html5", "Java"];
	})
	.controller('employeesController', function($scope, $http) {
		$http.get('/api/employees_1').then(function(response) {
			$scope.employees = response.data.rows;
		})
	})