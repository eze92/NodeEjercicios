const fs = require ('fs');
const colors = require('colors');


//si no mando la base por parametro por defecto es 5
const crearArchivo = async(base = 5 , listar= false) =>{

    try{

        let salida = '';

        for ( let i = 1 ; i <= 10 ; i++  ){
            // console.log(`${base} x ${i} = ${base *  i}`);
            //el dato de la salida
             salida += `${base} ${'x'.green} ${i} ${'='.green} ${base *  i} \n`;
        }

        //toma true por defecto
        if(listar){
            console.log('==================='.cyan);
            console.log('Tabla del :' ,(`${base}`).yellow);
            console.log('==================='.cyan);

            console.log(salida);
        }
    
            //se cambio el writeFile por writeFileSync misma funcion pero necesito
            //atrapar el error con try an catch
        fs.writeFileSync(`tabla-${base}.txt`, salida) ;

        //debo retornar siempre lo de la funcion 
        return `tabla-${base} creada con exito`;
    }catch(error){
        throw error;

    }    

 }
//exporto el objeto a utilizar en app.js
    module.exports = {
        crearArchivo
    }