angular.module('crudCartApp')
	.factory('ShopService', function($resource){
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/crudCart', {},
			{
				getAllThings: {
					method: 'GET',
					isArray: true
				},
				createNewItem: {
					method: 'POST'
				}
			});
	});