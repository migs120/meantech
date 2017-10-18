///*
// ======express module======
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//process.env.NODE_ENV = process.env.MONGOLAB_URI || process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose'),
    express = require('./config/express');
    passport = require('./config/passport');


var db = mongoose();
var app = express(db);
var passport = passport();



app.listen( process.env.PORT, process.env.IP);
console.log('Server running at http://0.0.0.0:3000/');

module.exports = app;
