angular.module('meanBlog')

.factory('Article', ['$resource',
  function($resource) {
    return $resource(
      'http://localhost:5000/api/articles/:article_id', 
      { article_id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
  }]);
