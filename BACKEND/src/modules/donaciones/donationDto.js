const validator = require('validator');
const { BadRequestException } = require('../../network/typeError');
class DonationDto{
    async validateNombre(nombre) { 
        if (validator.isEmpty(nombre) || !validator.isLength(nombre, { min: 3 })) {
                throw new BadRequestException("El nombre es requerido y debe tener al menos 3 caracteres");
        }
        return true;

    }
    async validateCorreo(correo) {

            if (validator.isEmpty(correo) || !validator.isEmail(correo)) {
            throw new BadRequestException("El correo es requerido y debe ser un correo valido");}
            return true;
        

    }
    async validateTelefono(telefono) {

            if (validator.isEmpty(telefono) || !validator.isMobilePhone(telefono, 'any')) {
                throw new BadRequestException("El telefono es requerido y debe ser un telefono valido");
            }
            return true;
    }
    
}

module.exports = DonationDto;