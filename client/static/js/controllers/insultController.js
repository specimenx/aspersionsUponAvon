app.controller('insultController', function($scope, insultFactory, $location){
  $scope.insult = {};

  $scope.makeInsult = function(){
    console.log("we clicked a button!");
    loginFactory.getInsult(function(data){
      console.log(data);
      $scope.insult = data;
    });
  };
});
