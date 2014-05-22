var shopApp = angular.module('crudCartApp')
	.controller ('BaubCtrl', ['$scope', '$routeParams', '$location', 'ShopService', function($scope, $routeParams, $location, ShopService){

			$scope.posts = ShopService.getAllThings();
			$scope.addPost = function(){
				$location.path('/new');
			};
			$scope.createThing = function(thing) {
				PostShop.createNewThing(thing);
				$location.path('/cart');
			};
	}]);