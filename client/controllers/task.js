var myApp = angular.module('myApp');

myApp.controller('TaskController',['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
	$scope.getTasks = function(){
		$http.get('/api/tasklist').success(function(response){
			$scope.tasks = response;
		});
	}

	$scope.addTasks = function(){
		$http.post('/api/tasklist', $scope.task).success(function(response){
			window.location.href = '/';
		});
	}

	$scope.getTask = function(){
		var id = $routeParams.id;
		$http.get('/api/tasklist/'+id).success(function(response){
			$scope.task = response;
		});
	}

	$scope.removeTask = function(id){
		$http.delete('/api/tasklist/'+id, $scope.task).success(function(response){
			window.location.href = '/';
		});
	}
}]);