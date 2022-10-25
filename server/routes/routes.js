
const express= require('express');
const route= express.Router();
const render= require('../render/render')

const controller = require('../controller/controller');

// routes to the page
route.get('/',render.index);
route.get('/home',render.home);
route.get('/addUser',render.addUser);
route.get('/updateUser',render.updateUser);


// API for add update delete and show operation
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.delete('/api/users/:id', controller.delete);

module.exports= route
