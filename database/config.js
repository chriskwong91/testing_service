var mongoose = require('mongoose');

// in case machine can't find config.js, then have a config_example.js file for testing

// var db = require('../config/env/config.js').mongo;
// mongoose.connect(db.url); //connect to database
var db = mongoose.connection;
// mongoose.connect('mongodb://heroku_lg728wpm:fsm72ufsoqp0covp5grj305dsj@ds021434.mlab.com:21434/heroku_lg728wpm');
mongoose.connect('mongodb://localhost/codedrop');

db.on('error', console.error);
db.once('open', () => {
  console.log('Connected to Mongoose!');
});

module.exports = db;
