'use strict';

var Controller = require('../Controllers');

module.exports = [
	{
		method: 'POST',
		path: '/user',
		handler: function(request, reply){
			// console.log('Route Is Working');
			// return reply('coollllllllllllll');
			var payloadData = request.payload;
			Controller.UserController.getuser(payloadData, function(err, data){
				if (err) {
					console.log(err);
				} else{
					console.log(data);
				}
			})
		}	
	},
	{
		method: 'GET',
		path: '/list',
		handler: function(request, reply){
			return reply('hello,' + encodeURIComponent(request.params.username) + '!');
		}

	}
]
