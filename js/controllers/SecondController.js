app.controller('SecondController', ['$scope', '$routeParams', 'firstService', function($scope, $routeParams, firstService) {
  return firstService.success(function(data){
    $scope.specificData = data[$routeParams.id];
  });
}]);