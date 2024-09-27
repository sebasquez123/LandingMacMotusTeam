const entityService = require('./entityService');
const express = require('express');
const response = require('../../network/red');
const router = express.Router();

class EntityController{

     constructor(entityService){this.service = entityService;}

    async entityServiceGetAll(req,res)
    {
        try {
            const resp = await this.service.getAll();
            response.success(req, res, resp, 200);
         
        }
        catch (error) {
            response.error(req, res, 'Error interno del servidor: '+error, 500);
        }
    }
    async entityServiceGetOne(req, res)
    {
        try {
            const resp = await this.service.getOneById(req.params.id);
            response.success(req, res, resp, 200);
        }
        catch (error) {
            response.error(req, res, 'Error interno del servidor '+error, 500);
        }
    }

}


const entitycontroller = new EntityController(entityService); // instancio mi clase inyectada con el servicio.
// lo hago asi por si el sistema crece y necesito inyectar mas servicios a mi controlador.

router.get('/', (req , res) => { response.success(req, res, 'API entity controller is running OK...', 200)});
router.get('/getEntity', (req,res) => entitycontroller.entityServiceGetAll(req,res));
router.get('/getEntity/:id', (req,res) => entitycontroller.entityServiceGetOne(req,res));

module.exports = router;