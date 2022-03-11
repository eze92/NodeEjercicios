const fs = require('fs');
const archivo = './db/data.json';

const guardarDB = (data) =>{
    //convierto la data que viene como arreglo a un string
    //el objeto a su version valida como json
    fs.writeFileSync(archivo,JSON.stringify(data) );
}

const leerDB = () =>{
    
    //verifico si existe o no el archivo
    if(!fs.existsSync(archivo)){
        return null ;
    }
    //si existe leo el archivo
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
   //convierto el string a objeto json
    const data = JSON.parse(info);

    console.log(data);

    return null;


}

module.exports = {
    guardarDB, leerDB
}