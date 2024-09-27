'use strict'

const mongose = require('mongoose');
var Schema = mongose.Schema;


const identidades = Schema({
    header: [
        {
            titulo1: { type: String, maxlength: 40, default: 'Sin asignar' },
            titulo2: { type: String, maxlength: 40, default: 'Sin asignar' },
            titulo3: { type: String, maxlength: 40, default: 'Sin asignar' },
        }
    ],

    informacion: [{
        nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
        objetivo: { type: String, maxlength: 500 ,default: 'Sin asignar'},
        mision: { type: String, maxlength: 500 ,default: 'Sin asignar'},
        vision: { type: String, maxlength: 500, default: 'Sin asignar' },
        logo: {  type: String, maxlength: 500, default: 'Sin asignar' },
        slogan: {  type: String, maxlength: 500, default: 'Sin asignar'},
    }],
    
    
    integrantes: [{
        integrante1: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante2: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante3: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante4: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante5: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante6: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante7: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante8: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante9: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante10: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }],
        integrante11: [{
            nombre: { type: String, maxlength: 40, default: 'Sin asignar' },
            perfil: { type: String, maxlength: 40, default: 'Sin asignar' },
            cargo: { type: String, maxlength: 40, default: 'Sin asignar' },
        }]
        }],
        
    

    competencia: [{
            
        titulo1: [{
                titulo: { type: String, maxlength: 40, default: 'Sin asignar' },
                texto: { type: String, maxlength: 500, default: 'Sin asignar' },
            }],
        titulo2: [{
                titulo: { type: String, maxlength: 40, default: 'Sin asignar' },
                texto: { type: String, maxlength: 500, default: 'Sin asignar' },
            }],
        titulo3: [{
                titulo: { type: String, maxlength: 40, default: 'Sin asignar' },
                texto: { type: String, maxlength: 500, default: 'Sin asignar' },
        }],
        titulo4: [{ 
                titulo: { type: String, maxlength: 40, default: 'Sin asignar' },
                texto: { type: String, maxlength: 500, default: 'Sin asignar' },
        }],
    }],

    avances: [
        {
            titulo1: [{
                titulo: { type: String, maxlength: 40, default: 'Sin asignar' },
                texto: { type: String, maxlength: 500, default: 'Sin asignar' },
            }],
            titulo2: [{
                titulo: { type: String, maxlength: 40, default: 'Sin asignar' },
                texto: { type: String, maxlength: 500, default: 'Sin asignar' },
            }],
            titulo3: [{
                titulo: { type: String, maxlength: 40, default: 'Sin asignar' },
                texto: { type: String, maxlength: 500, default: 'Sin asignar' },
            }],
        }
    ],

    sabiasque: [
        {
            titulo1: [{
                pregunta: { type: String, maxlength: 100, default: 'Sin asignar' },
                respuesta: { type: String, maxlength: 300, default: 'Sin asignar' },
            }],
            titulo2: [{
                pregunta: { type: String, maxlength: 100, default: 'Sin asignar' },
                respuesta: { type: String, maxlength: 300, default: 'Sin asignar' },
            }],
            titulo3: [{
                pregunta: { type: String, maxlength: 100, default: 'Sin asignar' },
                respuesta: { type: String, maxlength: 300, default: 'Sin asignar' },
            }]
        }
    ],
    colores: [{
        color1: { type: String, default: 'Sin asignar' },
        color2: { type: String, default: 'Sin asignar' },
        color3: { type: String, default: 'Sin asignar' },
        color4: { type: String, default: 'Sin asignar' },
    }],
    
    contacto: [{
        direccion: { type: String, maxlength: 50, default: 'Sin asignar' },
        telefono: { type: String, maxlength: 50, default: 'Sin asignar' },
        correo: { type: String, match: /.+\@.+\..+/, default: 'Sin asignar' },
        facebookurl: { type: String, default: 'Sin asignar' },
        instagramurl: { type: String, default: 'Sin asignar' },
        whatsappurl: { type: String, default: 'Sin asignar' },
    }],

    html: { type: String, default: 'Sin esquema de correo' },
    activo: { type: Boolean, default: true },
    fecha: { type: Date, default: Date.now }
})


const imagenes = Schema({
    header: [{
        logo: { type: String, default: 'Sin asignar' },
        titulo: { type: String, default: 'Sin asignar' },
        inicio: { type: String, default: 'Sin asignar' }, 
        video: { type: String, default: 'Sin asignar' },
    }],
    
    
    introduccion: [{
        imagen1: { type: String, default: 'Sin asignar' },
        imagen2: { type: String, default: 'Sin asignar' },
    }],
    informacion: [{
        objetivos: { type: String, default: 'Sin asignar' },
        mision: { type: String, default: 'Sin asignar' },
        vision: { type: String, default: 'Sin asignar' },
        logo: { type: String, default: 'Sin asignar' },
        slogan: { type: String, default: 'Sin asignar' },
    }],

    integrantes: [{
        integrante1: { type: String, default: 'Sin asignar' },
        integrante2: { type: String, default: 'Sin asignar' },
        integrante3: { type: String, default: 'Sin asignar' },
        integrante4: { type: String, default: 'Sin asignar' },
        integrante5: { type: String, default: 'Sin asignar' },
        integrante6: { type: String, default: 'Sin asignar' },
        integrante7: { type: String, default: 'Sin asignar' },
        integrante8: { type: String, default: 'Sin asignar' },
        integrante9: { type: String, default: 'Sin asignar' },
        integrante10: { type: String, default: 'Sin asignar' },
        integrante11: { type: String, default: 'Sin asignar' },
        
    }],

    competencia: [{
        imagen1: { type: String, default: 'Sin asignar' },
    }],

    avances: [{
        imagen1: { type: String, default: 'Sin asignar' },
        imagen2: { type: String, default: 'Sin asignar' },
        imagen3: { type: String, default: 'Sin asignar' },
    }],
    sabiasque: [{
        
        imagen1: { type: String, default: 'Sin asignar' },
        imagen2: { type: String, default: 'Sin asignar' },
        imagen3: { type: String, default: 'Sin asignar' },
        imagen4: { type: String, default: 'Sin asignar' },
    }],
   
    propuesta: [{
        imagen1: { type: String, default: 'Sin asignar' },
        imagen2: { type: String, default: 'Sin asignar' },
    }],
    activo: { type: Boolean, default: true },
    fecha: { type: Date, default: Date.now }
})

const donaciones = Schema({
    nombre: { type: String, required: true ,trim: true ,immutable: true },
    correo: { type: String, match: /.+\@.+\..+/, required: true,trim: true , unique: false },
    telefono: { type: String, required: true,trim: true ,unique: false},
    comentario: { type: String, default: 'Sin comentarios' },
    fecha: { type: Date, default: Date.now }
})


const chatbotinf = Schema({
    informacion_marca: { type: String, maxlength: 1000, default: 'Sin asignar' },
    activo: { type: Boolean, default: true },
    fecha: { type: Date, default: Date.now }
})

module.exports = {
    identidades: mongose.model('identidades', identidades),
    imagenes: mongose.model('imagenes', imagenes),
    donaciones: mongose.model('donaciones', donaciones),
    chatbotinf: mongose.model('chatbotinf', chatbotinf),
}
// const InformacionGeneralSchema = Schema({
//     url_inicio_image: String,
//     url_logo_image: String,
//     url_ubicacion_image: String,
//     como_comprar: String,
//     telefono: String,
//     direccion: String,
//     correo: String,
// })

// const PreguntasfrecuentesSchema = Schema({
//     pregunta: String,
//     respuesta: String,
//     activo: Boolean,
//     fecha: { type: Date, default: Date.now }
// })

// const EmpresaSchema = Schema({
//     descripcion_empresa: String,
//     mision: String,
//     vision: String,
//     politica_envios: String,
//     politica_devoluciones: String,
//     politica_privacidad: String,
//     politica_garantia: String,
// })


// //TABLAS PARA EL PROCESO DE COMPRA E INTERACCIÓN CON EL CLIENTE
// const CategoriaSchema = Schema({
//     nombre: String,
//     descripcion: String,
//     activo: Boolean,
//     fecha: { type: Date, default: Date.now }
// })

// const MarcaCocheSchema = Schema({
//     nombre: String,
//     url_image: String,
//     activo: Boolean,
// })

// const MarcaProveedorSchema = Schema({
//     nombre: String,
//     descripcion: String,
//     activo: Boolean,
//     fecha: { type: Date, default: Date.now }
// })

// const UsuarioSchema = Schema({
//     nombre: String,
//     apellido: String,
//     correo: String,
//     contraseña: String,
//     telefono: String,
//     activo: Boolean,
//     fecha: { type: Date, default: Date.now }
// })

// const ModeloAñoSchema = Schema({
//     marca_coche_id: { type: Schema.ObjectId, ref: 'marca_coche' },
//     nombre: String,
//     año: Number,
//     activo: Boolean,
//     fecha: { type: Date, default: Date.now }
// })

// const ProductoSchema = Schema({
//     categoria_id: { type: Schema.ObjectId, ref: 'categoria' },
//     modelo_año_id: { type: Schema.ObjectId, ref: 'modelo_año' },
//     marca_proveedor_id: { type: Schema.ObjectId, ref: 'marca_proveedor' },
//     nombre: String,
//     descripcion_producto: String,
//     precio: Number,
//     stock: Number,
//     url_image1: String,
//     url_image2: String,
//     url_image3: String,
//     url_image4: String,
//     url_image5: String,
//     activo: Boolean,
//     fecha: { type: Date, default: Date.now }
// })

// const CarritoSchema = Schema({
//     usuario_id: { type: Schema.ObjectId, ref: 'usuario' },
//     producto_id: { type: Schema.ObjectId, ref: 'producto' },
//     cantidad: Number,
//     fecha: { type: Date, default: Date.now }
// })

// const VentaSchema = Schema({
//     usuario_id: { type: Schema.ObjectId, ref: 'usuario' },
//     producto_id: { type: Schema.ObjectId, ref: 'producto' },
//     transaccion_id: String,
//     titulo: String,
//     cantidad: Number,
//     precio: Number,
//     direccion: String,
//     ciudad: String,
//     tipo_envio: String,
//     fecha: { type: Date, default: Date.now }
// })


 