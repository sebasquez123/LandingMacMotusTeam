'use strict'
const { OpenAI }=  require ('openai');
const config = require('../../config');

const openai = new OpenAI({
    apiKey: config.openAiApiKey,
    organization: config.openiaorganization

});

async function respuesta (pregunta,contexto)
    {
        const dialogo = contexto.concat('\n\nEres un asistente especializado en la marca MACMOTUS. Solo debes responder preguntas relacionadas con los la informacion consignada anteriormente a cerca de la marca MACMOTUS. No puedes responder preguntas que no sean sobre la marca o se salgan de contexto. Si alguien hace una pregunta fuera de estos temas, responde: "Lo siento, solo puedo responder preguntas relacionadas con MACMOTUS. Si no tienes suficiente informacion consignada para responder una pregunta en el mismo contexto, responde: "Lo siento, no tengo esa informacion por el momento." \n\nResponde la siguiente Pregunta: ' + pregunta);
        console.log(dialogo);
        try {
            const response = await openai.chat.completions.create({
                model: 'gpt-4o-mini', 
                messages: [
                    { role: "system", content: "cuentame un chiste" },
                    
                ],
                // prompt: "hola como estas?",
                //  max_tokens: 100, 
                // temperature: 0.2,
            });

            console.log(response.data.choices);
            return response.data.choices;
        //    return 'completado';
        }
        
        catch (error){ 
            throw new Error(`Error generating response from openIa: ${error.message}`);
        }
    }




module.exports = respuesta;