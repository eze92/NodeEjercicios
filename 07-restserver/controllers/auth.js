const { response, request, json } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');
const { googleVerify } = require('../helpers/google-Verify');

const login = async (req, res = response) => {

    const { correo, password } = req.body;

    try {

        //Verificar si el email existe

        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }


        // Si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        })

    } catch (error) {
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

const googleSingIn = async (req, res = response) => {

    const { id_token } = req.body;

    try {

        const { nombre, img, correo ,rol} = await googleVerify(id_token);

        let usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            //Tengo que crearlo

            const data = {
                nombre,
                correo,
                password: '123456',
                img,
                rol: 'USER_ROLE',
                google: true
            };
            usuario = new Usuario(data);
            await usuario.save();
        }
        //Si el usuario en DB 
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            });
        }
        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
           // ok: false,
            msg: 'El Token no se pudo verificar'
        })
    }


}

module.exports = {
    login,
    googleSingIn
}