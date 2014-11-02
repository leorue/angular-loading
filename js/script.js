	var mainApp = angular.module('mainApp', ['ngRoute', 'ngResource']);

	mainApp.config(function($routeProvider, $httpProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
	});

	mainApp.controller('mainController', function($scope, $http) {
		$scope.$on('$routeChangeStart', function(scope){
			$scope.loading = '';
		});

		$scope.$on('$routeChangeSuccess', function(scope){
			$scope.title = 'Welcome to the Angular Loader';
			$scope.nav = 'about';
			$http.jsonp('http://www.filltext.com/?rows=10&delay=5&fname={firstName}&callback=JSON_CALLBACK').success(function(data){
				$scope.people = data;
				$scope.loading = 'hidden';
			});
		});
	});

	mainApp.controller('aboutController', function($scope, $http) {
		$scope.$on('$routeChangeStart', function(scope){
			$scope.loading = '';
		});

		$scope.$on('$routeChangeSuccess', function(scope){
			$scope.title = 'This loader is built to work with AngularJS';
			$scope.nav = '';
			$http.jsonp('http://www.filltext.com/?rows=10&delay=5&fname={firstName}&callback=JSON_CALLBACK').success(function(data){
				$scope.people = data;
				$scope.loading = 'hidden';
			});
		});
	});