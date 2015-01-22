app = angular.module('repeatex', []);

app.controller('MainController', function($scope, $http) {
  $scope.updateOutput = function() {
    $http.get('http://repeatex.herokuapp.com/?description=' + $scope.description).then(function (response) {
      $scope.output = response.data;
    });
    $scope.issueTitle = 'Parse Issue: "' + $scope.description + '"';
    $scope.issueBody = "The description \"" + $scope.description + "\" was supposed to be parsed properly, but wasn't. Thanks for your assistance with working on this issue.";
  };
});
