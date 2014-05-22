var shopApp = angular.module('crudCartApp')
	.controller ('BaubCtrl', ['$scope', '$routeParams', '$location', 'PostShop', function($scope, $routeParams, $location, PostShop){

			$scope.posts = ShopService.getAllThings();
			$scope.addPost = function(){
				$location.path('/new');
			};
			$scope.createThing = function(thing) {
				PostShop.createNewThing(thing);
				$location.path('/cart');
			};
	}]);