angular.module('meanBlog', ['ngRoute'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'views/articles/articles.html'
    })

    .when('/articles/:article_id', {
      templateUrl: 'views/articles/article.html'
    })

    .when('/articles/new', {
      templateUrl: 'views/articles/articleForm.html'
    })

    .when('/articles/edit', {
      templateUrl: 'views/articles/articleForm.html'
    })

    $locationProvider.html5Mode(true);
  }]);

