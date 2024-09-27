const models = require('../../models/landing_page/Db');
const { NotFoundException } = require('../../network/typeError');
const tabla = models['imagenes'];

class ImageService { 
    constructor(model) { this.modelo = model; }

    async getOneById(id) {
        try {
            const modelo = await this.modelo.findById(id);
            if (!modelo) { throw new NotFoundException(`doesn't exist record ${id}`); }
            return modelo;
        }
        catch (error) { throw new Error(`Error quering the database: ${error.message}`) }
    }

}

const imageService = new ImageService(tabla);

module.exports = imageService;