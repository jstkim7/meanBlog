angular.module('meanBlog', ['ngRoute'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'views/articles/articles.html'
    });

    $locationProvider.html5Mode(true);
  }]);

