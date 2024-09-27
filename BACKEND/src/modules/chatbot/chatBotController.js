
const express = require('express');
const response = require('../../network/red');
const chatBotService = require('./chatBotService');
const router = express.Router();

class chatBotController{
    constructor(service){this.service = service;}

    async chatBot(req, res){
        try
        {
            const resp = await this.service.makeQuestion(req.body);
            response.reply(req, res, resp, 200);

        }
        catch (error)
        {
            response.error(req, res, "error interno del servidor"+error.message, error.status);
        }
    }

}

const chatbotcontroller = new chatBotController(chatBotService);

router.get("/", (req, res) => { response.success(req, res, ' API chatBot is Running OK...', 200) });
router.post("/ask", (req, res) => { chatbotcontroller.chatBot(req, res); });


module.exports = router;

