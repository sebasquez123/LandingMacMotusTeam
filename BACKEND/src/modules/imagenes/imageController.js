const imageService = require('./imageService');
const express = require('express');
const response = require('../../network/red');
const router = express.Router();


class ImageController {

    constructor(imageService) { this.service = imageService; }
    
    async imageServiceGetOne(req, res) { 
        try { 
            const resp = await this.service.getOneById(req.params.id);
            response.success(req, res, resp, 200);  
        }
        catch (error) { 
            response.error(req,res,'Error interno del servidor: '+error,500);
        }
    }

}

const imagecontroller = new ImageController(imageService);

router.get('/', (req, res) => { response.success(req, res, 'API image controller is running OK...', 200) });
router.get('/getImages/:id', (req, res) => { imagecontroller.imageServiceGetOne(req, res); });

module.exports = router;