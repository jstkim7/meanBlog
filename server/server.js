var express = require('express');
var api = express();

var router = require('./api/router');

api.use('/api', router);

module.exports = api;
