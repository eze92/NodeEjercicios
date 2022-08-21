const jwt = require('jsonwebtoken');

//uid : identificador unico de usuario
const generarJWT = (uid = '') =>{

    return new Promise ((resolve, reject) =>{

        const payload = (payload, process.env.SECRETORPRIVATEKEY,{
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