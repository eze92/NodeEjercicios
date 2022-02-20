const fs = require ('fs');

//si no mando la base por parametro por defecto es 5
const crearArchivo = async(base = 5) =>{

    try{
        console.log('===================');
        console.log(`Tabla del : ${base}`);
        console.log('===================');

        let salida = '';

        for ( let i = 1 ; i <= 10 ; i++  ){
            // console.log(`${base} x ${i} = ${base *  i}`);
            //el dato de la salida
             salida += `${base} x ${i} = ${base *  i}\n`;
        }
        console.log(salida);
         
            //se cambio el writeFile por writeFileSync misma funcion pero necesito
            //atrapar el error con try an catch
        fs.writeFileSync(`tabla-${base}.txt`, salida) ;
        
        return `tabla-${base} creada con exito`;
    }catch(error){
        throw error;

    }    

 }
//exporto el objeto a utilizar en app.js
    module.exports = {
        crearArchivo
    }