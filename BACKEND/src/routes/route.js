'use strict'

//npm install express-rate-limit para limitar las peticiones

const express = require('express');
const entitiesController = require('../modules/identidades/entityController');
const imagesController = require('../modules/imagenes/imageController');
const donationsController = require('../modules/donaciones/donationController');
const chatBotController = require('../modules/chatbot/chatBotController');
const response = require('../network/red');

const router = express.Router();




router.get('/', (req, res) => { response.success(req, res, ' API root is Running OK...', 200)});

router.use('/entity', entitiesController);
router.use('/images', imagesController);
router.use('/donations', donationsController);
router.use('/chatbot', chatBotController);

module.exports = router;


