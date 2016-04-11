'use strict';

var Models = require('../Models');

//Insert User in DB
var createCustomer = function (objToSave, callback) {
    new Models.Customers(objToSave).save(callback);
};

module.exports = {
    createCustomer: createCustomer
};