const jwt = require('jsonwebtoken');

//uid : identificador unico de usuario
const generarJWT = (uid = '') =>{

    return new Promise ((resolve, reject) =>{


        //uid:identificado unico del usuario
        const payload = {uid};
        
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY,{
            expiresIn: '4h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token')
            }else{
                resolve(token);
            }
        })
    })
}


module.exports = {
    generarJWT
}