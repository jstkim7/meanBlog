var Article = require('../models/article');

exports.getArticles = function(req, res) {
  Article.find(function(err, articles) {
    if (err) return res.send(err);

    res.json(articles);
  });
};

exports.getArticle = function(req, res) {
  Article.findById(req.params.article_id, function(err, article) {
    if (err) return res.send(err);

    res.json(article);
  });
};

exports.postArticle = function(req, res) {
  var article = new Article();

  article.title = req.body.title;
  article.content = req.body.content;

  article.save(function(err) {
    if (err) return res.send(err);

    res.json(article);
  });
};

exports.putArticle = function(req, res) {
  Article.findById(req.params.article_id, function(err, article) {
    if (err) return res.send(err);

    article.title = req.body.title;
    article.content = req.body.content;

    article.save(function(err) {
      if (err) return res.send(err);

      res.json(article);
    });
  });
};

exports.deleteArticle = function(req, res) {
  Article.findByIdAndRemove(req.params.article_id, function(err) {
    if (err) return res.send(err);

    res.json({ message: "Removed." });
  });
};
