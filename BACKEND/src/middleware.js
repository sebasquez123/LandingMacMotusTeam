'use strict'
const config = require('./config'); // parametros
const express = require('express');
const app = express(); //instancia de express
const bodyParser = require('body-parser'); //parsea las peticiones
const rutas = require('./routes/route');
const ratelimit = require('express-rate-limit');

const limiter = ratelimit({
    windowMs: 15 * 60 * 1000, // cada 15 minutos
    max: 100 // 100 peticiones 
});

app.use(limiter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    
});

app.set('port', config.puerto);
app.use('/api/v1', rutas);

module.exports = app;


