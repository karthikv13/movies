angular.module('movie',['ui.router','ngResource'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state(
				'home', {
					url:'/home',
					templateUrl:'views/home.html',
					controller:'HomeCtrl'
				})
			.state(
				'movie', {
					url:'/movie/:id',
					templateUrl:'views/movie.html',
					controller:'MovieCtrl'
				})
			
	});