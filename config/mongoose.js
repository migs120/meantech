var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  //var db = mongoose.connect(config.db);
  var db = mongoose.connect(MONGOLAB_URI);
  require('../app/models/user.server.model');
  require('../app/models/article.server.model');
  return db;
};