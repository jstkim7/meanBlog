var express = require('express');
var server = express();

server.get('/', function(req, res) {
  res.sendFile(__dirname + "/app/index.html");
});

module.exports = server;
