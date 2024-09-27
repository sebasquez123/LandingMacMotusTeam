const config = require('../../config');
const axios = require('axios');

async function respuesta (pregunta,contexto)
    {
        const dialogo = ( `Informacion: ${contexto}\n\nNo puedes responder preguntas que no sean sobre la marca o se salgan de contexto. Si alguien hace una pregunta fuera de estos temas, responde: "Lo siento, solo puedo responder preguntas relacionadas con MACMOTUS. Si no tienes suficiente informacion para responder una pregunta, responde: "Lo siento, no tengo esa informacion por el momento." \n\nPregunta: ¿${pregunta.trim()}?`);
        
        try {
            const response = await axios({
            method: 'POST',
            url: 'https://api-inference.huggingface.co/models/google/flan-t5-large',
            headers: {
                'Authorization': `Bearer ${config.openAiApiKey}`,
                "Content-Type": "application/json",
                },
            data: {
                inputs: dialogo,

                parameters: {
                    max_length: 500,  // Ajusta según tus necesidades
                    temperature: 0.7,
                    // top_k: 50,
                    // top_p: 0.9
                }
                }
        });

            // console.log(response.data);
            return response.data;
        //    return 'completado';
        }
        
        catch (error){ 
            throw new Error(`Error generating response from openIa: ${error.message}`);
        }
    }




module.exports = respuesta;