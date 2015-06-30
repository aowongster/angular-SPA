app.controller('MainController', ['$scope', 'firstService', function($scope, firstService) {
  firstService.success(function(data){
    $scope.data = data;
  });
}]);