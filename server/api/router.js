var express = require('express');
var router = express.Router();

var articlesController = require('./controllers/articles');

router.route('/articles')
  .post(articlesController.postArticle)
  .get(articlesController.getArticles);

router.route('/articles/:article_id')
  .get(articlesController.getArticle)
  .put(articlesController.putArticle)
  .delete(articlesController.deleteArticle);

module.exports = router;
