angular.module('meanBlog')

.factory('Article', ['$resource',
  function($resource) {
    return $resource('http://localhost:5000/api/articles/:id');
  }]);
