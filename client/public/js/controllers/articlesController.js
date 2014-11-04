angular.module('meanBlog')

.controller('ArticlesController', ['$scope', 'Article',
  function($scope, Article) {

    $scope.articles = Article.query();

  }])

.controller('ArticleController', ['$scope', '$routeParams', 'Article',
  function($scope, $routeParams, Article) {

    $scope.article = Article.get({ article_id: $routeParams.article_id });

  }])

.controller('NewArticleController', ['$scope', '$location', 'Article',
  function($scope, $location, Article) {

    $scope.article;

    $scope.submitForm = function() {
      var newArticle = new Article({
        title: $scope.article.title,
        content: $scope.article.content
      });
      newArticle.$save(function() {
        $location.path("/articles/" + newArticle._id);
      });
    }

  }])

.controller('EditArticleController', ['$scope', '$location', '$routeParams', 'Article',
  function($scope, $location, $routeParams, Article) {

    $scope.article = Article.get({ article_id: $routeParams.article_id });

    $scope.submitForm = function() {
      $scope.article.$update(function() {
        $location.path("/articles/" + $scope.article._id);
      });
    };

    $scope.delete = function() {
      $scope.article.$delete(function() {
        $location.path("/");
      });
    }

  }]);