const { response, request, json } = require('express');
const bcryptjs = require ('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');
const {googleVerify} = require('../helpers/google-Verify');

const login = async(req, res = response) => {

    const {correo,password} = req.body;

    try{

        //Verificar si el email existe

        const usuario = await Usuario.findOne({correo});
        if( !usuario){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }


        // Si el usuario esta activo
        if( !usuario.estado){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);    
        if(!validPassword){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        })

    }catch(error){
        console.log(error)
        //error interno en el log
        return res.status(500).json({
            msj: 'Hable con el administrador'
        })
    }

    res.json({
        msj: 'Login ok'

    })
}

const googleSingIn = async( req, res = response) => {
    
    const {id_token} = req.body;

    try{

        const googleUser = await googleVerify( id_token);
        console.log(googleUser);

        res.json({
            msg: 'Todo bien',
            id_token
        })
    }catch(error){
        json.status(400).json({
            ok: false,
            msg: 'El Token no se pudo verificar'
        })
    }
   

}

module.exports = {
    login,
    googleSingIn
}