//nodemailer library para enviar correos de forma sencilla. npm install nodemailer
const nodemailer = require('nodemailer');
const config = require('../../config');
const path = require('path');
//NPM INSTALL googleapis por si se necesita renovar el access token, pero no es necesario en este caso.

// const { google } = require('googleapis');

// const oAuth2Client = new google.auth.OAuth2(config.clientId,config.clientSecret,'https://developers.google.com/oauthplayground');
// oAuth2Client.setCredentials({
//   refresh_token: config.refreshToken
// });

// const accessToken = await oAuth2Client.getAccessToken();

class SendMail{


    constructor() { 
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.user,
                pass: config.pass,
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                refreshToken: config.refreshToken
            },
        });
    }
    async sendMailToTwo(to,subject,text,name,tel,comment,html) {
        
 
        
            //para el usuario
            const toUser= {
                from: config.user,
                to: to,
                subject: subject,
                text: text,
                html: html
                // html: `<h1>GRACIAS POR TU MENSAJE!</h1>\n\n <p>Estamos agradecidos por tu motivación, nos pondremos en contacto contigo para contarte un poco mas del proyecto. Ahora eres parte del equipo, juntos haremos de este viaje una hazaña y una experiencia excepcional.</p> \n\n<img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo_U.T.P.png" alt="Imagen1" style="width:100px"/><img src="https://i.imgur.com/8JdjDb8.png" alt="Imagen2"  style="width:100px"/>`,
            }
            
           
            const toAdmin= {
                from: config.user,
                to: "sebastianvasqz12@gmail.com",
                subject: 'UN NUEVO CONTACTO CON TU WEB.',
                text: `HOLA! Te habla tu aplicacion. Has recibido un mensaje.\n ${name} ha hecho contacto con tu equipo!...\n Esto es lo que recibiste:\n correo: ${to}\n tel: ${tel} \n mensaje: ${comment}`
        }
        
            const toWife= {
                    from: config.user,
                    to: "j.duarte@utp.edu.co",
                    subject: 'UN NUEVO CONTACTO CON TU WEB.',
                    text: `HOLA! Te habla tu aplicacion. Has recibido un mensaje.\n ${name} ha hecho contacto con tu equipo!...\n Esto es lo que recibiste:\n correo: ${to}\n tel: ${tel} \n mensaje: ${comment}`
                }
        
        try { 
            await this.transporter.sendMail(toUser);
            await this.transporter.sendMail(toWife);
            return await this.transporter.sendMail(toAdmin);
            
        }
        catch (error) { throw new Error('Error al enviar el correo: ' + error.message); }
    }
}

const sendmail = new SendMail();

module.exports = sendmail;
