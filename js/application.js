angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl:'home.html'})
    .when('/page1', {templateUrl:'page1.html'})
    .when('/page2', {templateUrl:'page2.html'})
    .otherwise({redirectTo:'/'});
});
