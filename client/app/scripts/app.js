angular.module('meanBlog', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'views/articles/articles.html'
    });
  }]);