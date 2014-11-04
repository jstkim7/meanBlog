angular.module('meanBlog')

.controller('AuthController', ['$scope',
  function($scope) {
    $scope.admin;

    $scope.signIn = function() {
      console.log($scope.admin);
    }
  }]);