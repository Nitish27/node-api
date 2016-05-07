const jwt = require('jsonwebtoken');

const Config = require('../Config/index.js');
const Mongoose = require('../Models/mongo.js');
const Schema = require('../Models/schema.js');

var Users = Mongoose.model('users', Schema.register);
var user_controller = {
    user_login: function (request, reply) {
        var payload = {
            issuer: request.payload.username,
            expiresIn: Config.Base.token.expire
        };
        var token = jwt.sign(payload, Config.Base.token.secret , function(error) {
            if(error)
                console.log(Config.Message.token.create.error);
            else
                console.log(Config.Message.token.create.success);
        });
        token = {
            'accesstoken': token 
        }
        return reply(token);
    },
    user_register: function(request, reply){
        var users = new Users(request.payload);
        users.save(function(error) {
            if(error)
                console.log(Config.Database.entry.error + 'Email already registered!!');
            else
                console.log(Config.Database.entry.success);
        });
        return reply(request.payload);
    },
    user_list: function(request, reply){
        
        Users.find({}, function (error, data) {
            if (error) {
                reply({
                    statusCode: 503,
                    message: 'Failed to get data',
                    data: error
                });
            } else {
                reply({
                    statusCode: 200,
                    message: 'User Data Successfully Fetched',
                    data: data
                });
            }
        });
    }
}

module.exports = user_controller;