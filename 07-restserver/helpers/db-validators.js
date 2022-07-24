const Role = require('../models/role');


const esRoleValido = async(rol = '') =>{
    const existeRol = await Role.findOne({rol});
    if( !existeRol){
        throw new Error(`El rol ${rol} no es valido por no estar registrado en la base de datos`)
    }
}

module.exports = { esRoleValido}
