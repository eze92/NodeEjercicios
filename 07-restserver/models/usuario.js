const { Schema, model } = require('mongoose');

//modelo a grabar en db
const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required : [true,'El nombre es obligatorio']
    },
    correo:{
        type: String,
        required : [true,'El correo es obligatorio'],
        unique : true //para que no haya correos duplicados
    },
    password:{
        type: String,
        required : [true,'La contraseña es obligatoria']
    },
    img:{
        type: String
    },
    rol:{
        type: String,
        required:true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default:false
    }
});

//Para sacar el password y la version mostrada en postman - pantalla
UsuarioSchema.methods.toJSON = function(){
    //los valores que saco son los dos primeros argumentos y los almaceno en el tercero
    const{ __v, password, ...usuario  } = this.toObject();
    return usuario;
}

//Usuario pasa a ser el nombre del modelo
module.exports = model('Usuario',UsuarioSchema);