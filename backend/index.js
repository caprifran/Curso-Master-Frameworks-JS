'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify',false); //  Desactiva ese metodo antiguo
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true})
    .then(() => {
        console.log('Conexion a la DB con exito...');

        // Crear servidor y ponerme a escuchar peticiones HTTP
        app.listen(port, () => {
            console.log('Servidor corriendo en HTTP//localhost:' + port);
        });
    });