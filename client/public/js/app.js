angular.module('meanBlog', ['ngRoute', 'ngResource'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
      templateUrl: 'views/articles/articles.html',
      controller: 'ArticleController'
    })

    .when('/articles/new', {
      templateUrl: 'views/articles/articleForm.html',
      controller: 'NewArticleCtrl'
    })

    .when('/articles/edit', {
      templateUrl: 'views/articles/articleForm.html',
      controller: 'ArticleCtrl'
    })

    .when('/articles/:article_id', {
      templateUrl: 'views/articles/article.html',
      controller: 'ArticleCtrl'
    });

    $locationProvider.html5Mode(true);
  }]);

