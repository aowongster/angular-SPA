app.controller('MainController', ['$scope', 'firstService', function($scope, firstService) {
  return firstService.success(function(data){
    $scope.data = data;
  });
}]);