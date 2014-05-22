var shopApp = angular.module('crudCartApp')
	.controller ('BaubCtrl', ['$scope', '$routeParams', '$location', 'ShopService', function($scope, $routeParams, $location, ShopService){

			$scope.posts = ShopService.getAllThings();
			$scope.addPost = function(){
				$location.path('/new');
			};
			$scope.createThing = function(thing) {
				ShopService.createThing(thing);
				$location.path('/cart');
			};
	}]);