app.directive('firstDirective', function(){
  return {
    restrict : 'E',
    scope: {
      info : '='
    },
    templateUrl : 'js/directives/firstDirective.html'
  };

});
