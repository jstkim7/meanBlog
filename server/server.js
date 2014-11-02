var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var api = express();
var bodyParser = require('body-parser');

api.use(bodyParser.urlencoded({
  extended: true
}));
api.use(bodyParser.json());
api.use(morgan('combined'));
api.use(cors());

require('./config');

var router = require('./api/router');

api.use('/api', router);

module.exports = api;
