'use strict';
// var mongoose = require("mongoose");
// var assert = require('assert');
// var url = 'mongodb://localhost:27017/test';

var mongo = {
    URI: process.env.MONGO_URI || 'mongodb://localhost:27017/test',
    port: 27017
};

module.exports = {
    mongo: mongo
};


// mongoose.connect(url, function(err, db) {
//   	assert.equal(null, err);
//   	console.log(err);
//   	console.log(db);
// 	db.open(function(err, url){
//     url.createCollection("docs", function(err, col) {
//          url.collection("docs", function(err, col) {
//              for (var i = 0; i < 100; i++) {
//                  col.insert({c:i}, function() {});
//              }
//          });
//     });
// });
  	// console.log("Connected correctly to server.");
  	// db.close();
// });