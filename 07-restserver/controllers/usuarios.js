//se agrega para al hacer res. me salga las sugerencias
const { response} = require ('express');
 
//se agrega el igual a response por lo escrito arriba aunque quede redundante
 const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'put API - controlador'
    });
}


const usuariosPost = (req, res = response ) => {
    res.status(201).json({
        msg: 'post API - controlador '
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