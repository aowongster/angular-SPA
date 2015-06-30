var app = angular.module('myApp', ['ngRoute', 'firstDirective']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'views/main.html'
    })
    .when('/:id',{
      controller: 'SecondController',
      templateUrl: 'views/view2.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});