//se agrega para al hacer res. me salga las sugerencias
const { response} = require ('express');
 
//se agrega el igual a response por lo escrito arriba aunque quede redundante
 const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}



module.exports = {
    usuariosGet
}