require("dotenv").config();

if (!process.env.PORT) {throw new Error('La variable de entorno PORT es requerida.');}
if (!process.env.DIR_DB_NAME) {throw new Error('La variable de entorno DIR_DB_NAME es requerida.');}
if (!process.env.PASS) { throw new Error('La variable de entorno PASS es requerida.'); }
if (!process.env.DIR_MAIN_MAIL) { throw new Error('La variable de entorno DIR_MAIN_MAIL es requerida.'); }
if (!process.env.OAUTH_CLIENTID || !process.env.OAUTH_CLIENT_SECRET || !process.env.OAUTH_REFRESH_TOKEN || !process.env.OAUTH_ACCESS_TOKEN) { throw new Error('La variable de entorno OAUTH_CLIENTID,OAUTH_REFRESH_TOKEN,OAUTH_CLIENT_SECRET,OAUTH_ACCESS_TOKEN es requerida para autenticar el uso del correo.'); }
module.exports = {

    puerto: process.env.PORT || 3004,

    url: process.env.DIR_DB_NAME,

    pass: process.env.PASS,

    user: process.env.DIR_MAIN_MAIL,

    clientId: process.env.OAUTH_CLIENTID,

    clientSecret: process.env.OAUTH_CLIENT_SECRET,

    refreshToken: process.env.OAUTH_REFRESH_TOKEN,

    accessToken: process.env.OAUTH_ACCESS_TOKEN,

    openAiApiKey: process.env.API_KEY,
    
    openiaorganization: process.env.OPEN_AI_ORGANIZATION_ID
};