//se agrega para al hacer res. me salga las sugerencias
const { response,request } = require('express');
const bcryptjs = require('bcryptjs');

//estandar de poner la U en mayuscula para luego crear instancias del modelo
const Usuario = require('../models/usuario');

//se agrega el igual a response por lo escrito arriba aunque quede redundante
const usuariosGet = (req = request, res = response) => {
    //con query desectructuro lo que mando en la url /api/resource?p1=v1&p2=v2
    // con body desectructuro parte del cuerpo de jsom
    const {q,nombre = 'No name',apikey,page= 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
}


const usuariosPost = async(req, res = response) => {

    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});

    //Verificar si el correo existe

    //Encriptar la contraseña

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password,salt);

    //Guardar en DB


    await usuario.save();

    res.status(201).json({
        msg: 'post API - controlador ',
        usuario
    });
}

const usuariosPath = (req, res = response) => {
    res.json({
        msg: 'get Path - controlador'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

//mando un objeto a ser varias funciones las que se tiene que exportar
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPath,
    usuariosDelete

}