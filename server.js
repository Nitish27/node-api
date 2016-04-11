'use strict';

var Hapi = require('hapi');
//Internal Dependencies
var Config = require('./Config');
var Good = require('good');
var Routes = require('./Routes');
// var mongoOp = require("./Models");

// create server with a host and port
var server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000
});

// Default Route
server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
        res.view('index');
    }
})

//API Routes
server.route(Routes);

// Add the route
// server.route({
// 	method: 'GET',
// 	path: '/hello',
// 	handler: function(request, reply) {
// 		return reply('hello world');
// 	}
// });

// server.route({
// 	method: 'GET',
// 	path: '/{name}',
// 	handler: function(request, reply) {
// 		return reply('hello,' + encodeURIComponent(request.params.name) + '!');
// 	}
// });

// server.route({
// 	method: 'GET',
// 	path: '/hello/{user*2}',
// 	handler: function(request, reply){
// 		const userParts = request.params.user.split('/');
// 		reply('Hello ' + encodeURIComponent(userParts[0]) + '' + encodeURIComponent(userParts[1]) + '!');
// 	}
// })

server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                response: '*',
                log: '*'
            }
        }]
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
           throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});