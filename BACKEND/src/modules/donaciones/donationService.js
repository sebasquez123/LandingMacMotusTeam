
const model = require('../../models/landing_page/Db');
const { NotFoundException } = require('../../network/typeError');
const sendmail = require('../correo/mailSend'); // servicio de envio de email
const tabla1 = model['donaciones']; //servicio de modelo Bd
const tabla2 = model['identidades'];


class DonationService{
    constructor(models, mailservice, identidadmodel) { this.model = models; this.mailService = mailservice; this.identidad = identidadmodel; }
    
    async getAll(){
        try {
            const modelo = await this.model.find({}).sort('-fecha').exec();
            if (!modelo || modelo.length === 0) { throw new NotFoundException('No records in database'); }
            return modelo;
        }
        catch (error) { throw new Error(`Error quering the database: ${error.message}`); }
    }
    async create(data) {
        try {
            const fila_identidad = await this.identidad.findOne({}).exec();
            const html = fila_identidad.html;

            const modelo = new this.model(data);
            const donacion = await modelo.save();
            console.log(data);
            await this.mailService.sendMailToTwo(data.correo, 'AERO TEAM MACMOTUS',
                'Recibimos tu mensaje, nos orgullece porder contar contigo, agradecemos tu apoyo!',
                data.nombre,
                data.telefono,
                data.comentario,
                html);
            console.log('Correo enviado con exito');
            return donacion;  
        } 
        catch (error) { throw new Error('Error creating service'+ error.message); }
    }
}

const donationservice = new DonationService(tabla1,sendmail,tabla2);
module.exports = donationservice;