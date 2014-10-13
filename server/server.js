var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var api = express();


api.use(morgan('combined'));
api.use(cors());

require('./config');

var router = require('./api/router');

api.use('/api', router);

module.exports = api;
