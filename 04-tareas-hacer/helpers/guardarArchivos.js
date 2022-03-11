const fs = require('fs');

const guardarDB = (data) =>{

    const archivo = './db/data.json';


    //convierto la data que viene como arreglo a un string
    //el objeto a su version valida como json
    fs.writeFileSync(archivo,JSON.stringify(data) );
}

module.exports = {
    guardarDB
}