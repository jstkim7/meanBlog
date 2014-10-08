var express = require('express');
var api = express();

require('./config');

var router = require('./api/router');

api.use('/api', router);

module.exports = api;
