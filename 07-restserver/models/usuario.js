const { Schema, model } = require('mongoose');

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

//Usuario pase a ser el nombre del modelo
module.exports = model('Usuario',UsuarioSchema);