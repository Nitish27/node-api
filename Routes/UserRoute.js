const Joi = require('joi');
const Controllers = require('../Controllers/index.js');

var user_routes = [
	{
		method: 'POST',
		path: '/user/login',
		config: {
			tags: ['api'],
			description: 'user login',
			notes: 'User login by email and password.',
			validate: {
				payload: {
					username: Joi.string().email().required(),
					password: Joi.string().min(8).required()
				}
			}
		},
		handler: Controllers.user_login
	},
	{
		method: 'POST',
		path: '/user/register',
		config: {
			tags: ['api'],
			description: 'user register',
			notes: 'user register by email and password',
			validate: {
				payload:{
					first_name: Joi.string().required(),
					last_name: Joi.string().required(),
					email: Joi.string().email().required(),
					mobile: Joi.string().min(10).max(10).required(),
					password: Joi.string().min(8).required()
				}
			}
		},
		handler: Controllers.user_register
	},
	{
		method: 'GET',
		path: '/user/list',
		config: {
			tags: ['api'],
			description: 'User List',
			notes: 'user List'
		},
		handler: Controllers.user_list
	},
	{
		method: 'GET',
		path: '/user/{id}',
		config: {
			tags: ['api'],
			description: 'User Info',
			notes: 'user info',
			validate: {
				params: {
					id: Joi.string().required()
				}
			}
		},
		handler: Controllers.get_user
	},
	{
		method: 'PUT',
		path: '/user/changepassword/{id}',
		config: {
			tags: ['api'],
			description: 'Change User Paasword',
			notes: 'user password',
			validate: {
				params: {
	                id: Joi.string().required()
	            },
				payload:{
					oldPassword: Joi.string().min(8).required(),
					password: Joi.string().min(8).required()
				}
			}
		},
		handler: Controllers.change_password
	}
];

module.exports = user_routes;
