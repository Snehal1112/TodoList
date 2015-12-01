var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller : 'TaskController',
		templateUrl : 'views/todolist.html'
	})
	.when('/task/addtask',{
		controller : 'TaskController',
		templateUrl : 'views/addtask.html'
	})
	.when('/task/details/:id',{
		controller : 'TaskController',
		templateUrl : 'views/task_details.html'
	});
})