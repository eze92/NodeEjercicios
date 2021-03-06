//se agrega para al hacer res. me salga las sugerencias
const { response,request } = require('express');

//se agrega el igual a response por lo escrito arriba aunque quede redundante
const usuariosGet = (req = request, res = response) => {
    
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


const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API - controlador ',
        nombre,
        edad
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