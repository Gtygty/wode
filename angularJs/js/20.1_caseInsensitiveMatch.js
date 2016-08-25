var myModule = angular.module('myModule', ['ngRoute'])
	.config(function($routeProvider) {
		
		$routeProvider.caseInsensitiveMatch = true;

		$routeProvider
			.when("/home", {
				template: "<h1>{{homeCtrl.message}} template</h1>",
				controller: "homeController",
				controllerAs:"homeCtrl"
			})
			.when("/courses", {
				templateUrl: "Templates/19.4/courses.html",
				controller: "coursesController",
				controllerAs:"coursesCtrl",
				caseInsensitiveMatch:true
			})
			.when("/employees", {
				templateUrl: "Templates/19.4/employees.html",
				controller: "employeesController",
				controllerAs:"employeesCtrl"
			})
			.when("/employees/:id", {
				templateUrl: "Templates/19.4/employeedetail.html",
				controller: "employeeDetailController",
				controllerAs:"employeeDetailCtrl"
			})
			.otherwise({
				redirectTo: "/home"
			})
	})
	.controller('homeController', function() {
		this.message = "Home page";
	})
	.controller('coursesController', function() {
		this.courses = ["Android", "Ios", "Html5", "Java"];
	})
	.controller('employeesController', function($http) {
		var vm = this;
		$http.get('/api/employees_1').then(function(response) {
			// 注意在http里，我们能够使用this吗？这个this它将指向谁呢？
			// this.employees = response.data.rows;
			vm.employees = response.data.rows;
		})
	})
	.controller('employeeDetailController', function($http, $routeParams) {
		var vm = this;
		$http({
			url: "/api/employee_detail_"+$routeParams.id,
			method: "get"
		}).then(function(response) {
			vm.employee = response.data[0];
		})
	});