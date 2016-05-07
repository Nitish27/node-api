'use strict';

const Hapi = require('hapi');
//Internal Dependencies
const Config = require('./Config');
const Good = require('good');
const Routes = require('./Routes');
const Plugins = require('./Plugins/index.js');
// const mongoOp = require("./Models");

// create server with a host and port
const server = new Hapi.Server();
// server.connection({
// 	host: 'localhost',
// 	port: 8000
// });

server.connection(Config.Base.connection);

server.register(Plugins, function(error) {
    error?(server.log(['error'], 'Plugins loading error')):(server.log(['start'], 'Plugins loaded'));
});

Routes.forEach(function(route) {
    server.route(route);
});
// Default Route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        return reply('Hello World!!');
    },
    config: {
        tags: ['api'],
        description: 'Hello World',
        notes: 'Get Greeted'
    }
})

//API Routes
//server.route(Routes);

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