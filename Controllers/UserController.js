'use strict';
var Service = require('../Services');

var getuser = function(payloadData, callback){
	var customerData = null;
	console.log('sending',payloadData)
	var dataToSave = payloadData;
	Service.CustomerService.createCustomer(dataToSave, function (err, customerDataFromDB) {
                if (err) {
                    console.log('Error aa gya'+err);
                } else {
                    customerData = customerDataFromDB;
                    
                }
            })
}

module.exports = {
	getuser: getuser
}