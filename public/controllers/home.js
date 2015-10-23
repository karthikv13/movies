angular.module('movie')
	.controller('HomeCtrl', function($scope, Movie){
		$scope.movies=Movie.query();
		$scope.update=function(category){
			$scope.movies=Movie.query({'category':'category'});
		}
	});