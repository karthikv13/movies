angular.module('movie')
	.controller('NewMovieCtrl', function($scope, $state, Movie){
		$scope.add=function(){
			Movie.save(
			{
				'name': $scope.name,
				'image': $scope.image,
				'category': $scope.category,
				'description': $scope.description
			});
			$state.go('home');
		}
	});
