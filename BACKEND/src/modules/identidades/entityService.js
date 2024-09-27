const models = require('../../models/landing_page/Db');
const { NotFoundException } = require('../../network/typeError');

const tabla = models['identidades'];

class EntityService{

    constructor(model) { this.modelo = model;  }
    
    async getAll() {
        try { 
        const modelo = await this.modelo.find({}).sort("-fecha").exec();
        if (!modelo || modelo.length === 0) { throw new NotFoundException(`No records available in current table`);}
        return modelo;
        }
        catch (error) { throw new Error(`Error quering the database: ${error.message}`) }
    }

    async getOneById(id) {
        try {
         const modelo = await this.modelo.findById( id );
        if (!modelo) { throw new NotFoundException(`doesn't exist record ${id}`); }
        return modelo;
        }
        catch (error) { throw new Error(`Error quering the database: ${error.message}`) }
        
    }
}

const entityService = new EntityService(tabla);
 

module.exports = entityService;





//ENFOQUE DE PROGRAMACION MODULAR Y ESCALABLE, UTILIZANDO PATRON DE DISEÑO POR INYECCION DE DEPENDENCIAS O REPOSITORIO,
// CODIGO REUTILIZABLE, APROVECHANDO HERENCIAS Y ABSTRACCION.





// function save(tabla, body) {
//     return new Promise((resolve, reject) => { 
//         const modelo = models[tabla];
//         if (!modelo) return reject(new Error(`No existe la tabla ${tabla}`));
//         const tablita = new modelo(body);
//         tablita.save()
//             .then(result => resolve(result))
//             .catch(err => reject(err))    
//     })
// }

// function getAll(tabla) {
//     return new Promise((resolve, reject) => { 
//         const modelo = models[tabla];
//         if (!modelo) return reject(new Error(`No existe la tabla ${tabla}`));
        
//         modelo.find({}).sort("-fecha").exec()
//             .then(result => resolve(result))
//             .catch(err => reject(err))
//     })
// }
// function getOne(tabla, id) {
//     return new Promise((resolve, reject) => {
//         const modelo = models[tabla];
//         if (!modelo) return reject(new Error(`No existe la tabla ${tabla}`));
        
//         modelo.findById(id)
//             .then((result) => {
//                 if(result == null) reject(new Error(`No existe el registro con el id ${id}`));
//                 resolve(result);
//             })
//             .catch(err => reject(err))
//      })
// }
// function ddelete(tabla, id) {
//      return new Promise((resolve, reject) => {
//         const modelo = models[tabla];
//         if (!modelo) return reject(new Error(`No existe la tabla ${tabla}`));

//         modelo.findByIdAndDelete(id)
//             .then((result) => {
//                 if(result == null) reject(new Error(`No existe el registro con el id ${id}`));
//                 resolve(result);
//             })
//             .catch(err => reject(err))
//      })
// }
// function update(tabla, id, body) {
//     return new Promise((resolve, reject) => { 
//         const modelo = models[tabla];
//         if (!modelo) return reject(new Error(`No existe la tabla ${tabla}`));
//         modelo.findByIdAndUpdate(id, body, { new: true })
//             .then((result) => {
//                 if(result == null) reject(new Error(`No existe el registro con el id ${id}`));
//                 resolve(result);
//             })
//             .catch(err => reject(err))  
//     })
// }

// module.exports = {
//     save,
//     getAll,
//     getOne,
//     ddelete,
//     update
// }