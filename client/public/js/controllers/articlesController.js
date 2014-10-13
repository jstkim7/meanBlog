angular.module('meanBlog')

.controller('ArticleController', ['$scope', 'Article',
  function($scope, Article) {
    var article = Article.get({ id: $scope.id }, function() {
      console.log(article);
    });

    var articles = Article.query(function() {
      console.log(articles);
    });

    $scope.article = new Article();
    console.log('hihihihihihihi');
    console.log($scope.article);

    $scope.article.title = 'Second Post';
    $scope.article.content = 'Second Content Praise God';

    Article.save($scope.article, function() {
      console.log('data saved');
    });
  }]);

/*
.controller('ArticleController', function($scope, Article) {
  var article = Article.get({ id: $scope.id }, function() {
    console.log(article);
  });

  var articles = Article.query(function() {
    console.log(articles);
  });

  $scope.article = new Article();

  $scope.article.data = 'some data';

})

.controller('ArticlesCtrl', ['$scope',
  function($scope) {
    $scope.articles = [
      {
        title: 'A blog post',
        content: 'I Am a content'
      },
      {
        title: 'A blog post',
        content: 'I Am a content'
      },
      {
        title: 'A blog post',
        content: 'I Am a content'
      }
    ]
  }])

.controller('ArticleCtrl', ['$scope',
  function($scope) {
    $scope.article = {
        title: 'A blog post',
        content: 'I Am a content'
      }
  }])

.controller('NewArticleCtrl', ['$scope',
  function($scope) {
    $scope.article = {
      }
  }]);*/