app.factory('firstService', ['$http', function($http){
  var apiUrl = 'http://data.consumerfinance.gov/api/views.json';
  return $http.get(apiUrl)
    .success(function(data){
      return data;
    })
    .error(function(err){
      return err;
    });
}]);
