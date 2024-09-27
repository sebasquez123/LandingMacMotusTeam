
const express = require('express');
const DonationService = require('./donationService');
const response = require('../../network/red');
const router = express.Router();
const DonationDto = require('./donationDto');

class DonationController {
    constructor(service) { this.service = service; }

    async donationServiceGetAll(req, res) {
        try {
            const resp = await this.service.getAll();
            response.success(req, res, resp, 200);
         }
        catch (error) { response.error(req, res, "Error interno del servidor: "+error.message, 500); }
    }
    async donationServiceCreate(req, res) {
        try {

            const { nombre, correo, telefono, comentario } = req.body;
            const dto = new DonationDto();
            await dto.validateNombre(nombre);
            await dto.validateCorreo(correo);
            await dto.validateTelefono(telefono);
            const resp = await this.service.create(req.body);
            response.success(req, res, resp, 201);
         }
        catch (error) { 
            response.error(req, res, error.message, error.status || 400);
        }
    }


}

const donationcontroller = new DonationController(DonationService);
router.get("/", (req, res) => { response.success(req, res, ' API donations is Running OK...', 200)});
router.get("/getDonations", (req, res) => { donationcontroller.donationServiceGetAll(req, res); });
router.post("/insertDonations", (req, res) => { donationcontroller.donationServiceCreate(req, res); });

module.exports = router;