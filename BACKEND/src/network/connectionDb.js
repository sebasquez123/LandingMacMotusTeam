

const mongose = require('mongoose');
const config = require('../config');
var url = config.url;

mongose.promise = global.Promise;

async function connect() {
    try {
        await mongose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conectado a la base de datos exitosamente!');
    } catch (error) {
        console.error('Error al conectarse a la base de datos: ', error.message);
        setTimeout(connect, 300);
    }
}

mongose.connection.on('disconnected', () => {
    console.warn('conexion perdida, reconectando...');
    setTimeout(connect, 300);
});

mongose.connection.on('error', (error) => { 
    console.error('Error de conexion: ', error.message);
    if (error.message.includes('failed to connect to server')) {
        console.log('Intentando reconectar a la base de datos...');
        setTimeout(connect, 300); // Reintentar la conexión después de 300 ms
    } else {
        throw error; // Lanzar el error si no es un error de conexión
    }
});


module.exports = connect;