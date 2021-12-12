const { Router } = require('express');
const app = require('../server');

const usuariosController =  require('./userControllers');

const routes = Router();

routes.use('/usuarios', usuariosController);

module.exports = routes;