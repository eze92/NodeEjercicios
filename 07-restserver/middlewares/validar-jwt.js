const { response,request } = require('express');
const jwt = require( 'jsonwebtoken' );

const validarJWT = (req = request, res = response,next) =>{

    //la forma en el que frontend leera la request en el header
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msj: 'No hay token en la peticion'
        });
    }
    //verifica si el json jwt es valido
    try{
        const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY);

        req.uni = uid;

        next();
    }
    catch(error){
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
