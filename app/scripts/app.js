'use strict';

angular
  .module('crudCartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/admin.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/create.html',
        controller: 'BaubCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'BaubCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'BaubCtrl'
      })
      .when('/:id/edit', {
        templateUrl: 'views/edit.html',
        controller: 'BaubCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
