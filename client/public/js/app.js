angular.module('meanBlog', ['ngRoute', 'ngResource'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'views/articles/articles.html',
      controller: 'ArticlesController'
    })

    .when('/articles/new', {
      templateUrl: 'views/articles/articleForm.html',
      controller: 'NewArticleController'
    })

    .when('/articles/:article_id', {
      templateUrl: 'views/articles/article.html',
      controller: 'ArticleController'
    })

    .when('/articles/:article_id/edit', {
      templateUrl: 'views/articles/articleForm.html',
      controller: 'EditArticleController'
    });

    $locationProvider.html5Mode(true);
  }]);

