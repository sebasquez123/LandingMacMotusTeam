const app = require('./middleware');
const conecttodb = require('./network/connectionDb');

conecttodb(); // Conectar a la base de datos

app.listen(app.get('port'), () => { 
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 
