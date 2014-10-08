var mongoose = require('mongoose');
var databaseUrl = require('./db');

var env = process.env.NODE_ENV;

console.log("Environment: " + env);

mongoose.connect(databaseUrl[env]);

console.log("Database connected to: " + databaseUrl[env]);
