var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'views/view1.html'
    })
    .when('/:id',{
      controller: 'SecondController',
      templateUrl: 'views/view2.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});