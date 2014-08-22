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
  $routeProvider.when('/home', {templateUrl: 'partials/partial1.html', controller: 'HomeCtrl'});
  $routeProvider.when('/teste', {templateUrl: 'partials/partial2.html', controller: 'TesteCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
