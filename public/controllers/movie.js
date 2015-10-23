angular.module('movie')
	.controller('MovieCtrl', function($scope, $stateParams, Movie){
		$scope.movie=Movie.get({id:$stateParams.id});
	});