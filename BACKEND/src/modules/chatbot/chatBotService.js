const IAService = require('./Hugging_face_api');
const { NotFoundException, BadRequestException } = require('../../network/typeError');
const model = require('../../models/landing_page/Db');
const tabla = model['chatbotinf'];


class ChatBotService { 

    constructor(models ) { this.model = models; }
    async makeQuestion(data) {
        try {
            if (!data.pregunta) { throw new BadRequestException('Missing question'); }
            if (Object.keys(data).length > 1) { throw new BadRequestException('Bad Request'); }
            console.log(data.pregunta);
            const info = await this.model.find({}).sort("-fecha").exec();
            if (!info || info.length === 0) { throw new NotFoundException('No records in database'); }
            var contexto;
            for (const data of info) {
                if (data.activo === true) {
                    contexto = data.informacion_marca;
                    break;
                }
            }
            if (!contexto) { throw new NotFoundException('No active record in database'); }
            const iaresponse = await IAService(data.pregunta,contexto);
            return iaresponse;
         }
        catch (error) { throw new Error(`Error querying the chatBotService: ${error.message}`);}
    }
}

const chatbotservice = new ChatBotService(tabla);

module.exports = chatbotservice;