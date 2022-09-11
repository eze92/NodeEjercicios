const { response, request } = require('express');
const jwt = require('jsonwebtoken');

//interaccion con db
const Usuario = require('../models/usuario');

const validarJWT = async (req = request, res = response, next) => {

    //la forma en el que frontend leera la request en el header
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msj: 'No hay token en la peticion'
        });
    }
    //verifica si el json jwt es valido
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        //leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                msj: 'Token no valido - usuario no existe en DB'
            })
        }

        //Verificar si el uid tiene estado en true, no borrado
        if (!usuario.estado) {
            return res.status(401).json({
                msj: 'Token no valido - usuario con estado: false'
            })
        }

        req.usuario = usuario;

        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msj: 'Token no es valido'
        });
    }

    console.log(token);

}

module.exports = {
    validarJWT
}
