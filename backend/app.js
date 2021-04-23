'use strict'

// Cargar modulos de node.js para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar Express (http)
var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/article');

// Middlewares
app.use(bodyParser.urlencoded({extended:false})); // Carga el bodyParser
app.use(bodyParser.json()); // Convertir las peticiones en un json

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); // permite pasar del middleware a lo siguiente
});


// Añadir prefijos a rutas / cargar rutas
app.use('/api', article_routes);

// Exportar el modulo (fichero actual)
module.exports = app;