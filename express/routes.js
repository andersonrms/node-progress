const express = require('express');
const route = express.Router()
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contatoController')
const paramsController = require('./controllers/paramsController')
const queryController = require('./controllers/queryController')

route.get('/', homeController.home)
route.post('/', homeController.homePost)
route.get('/contato', contactController.contactHome)
route.get('/1param/:id?', paramsController.param1)
route.get('/2param/:id?/:id_prod?', paramsController.param2)
route.get('/query', queryController.query)

module.exports = route;
