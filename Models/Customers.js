'use strict';
var mongoose = require('mongoose');
var Schema =   mongoose.Schema;


var Customers  = new Schema({
    email: {type: String},
    password: {type: String}
});

module.exports = mongoose.model('Customers', Customers);