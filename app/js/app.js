'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/teste', {templateUrl: 'partials/teste.html', controller: 'TesteCtrl'});
  $routeProvider.when('/teste2', {templateUrl: 'partials/teste2.html', controller: 'TesteCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
