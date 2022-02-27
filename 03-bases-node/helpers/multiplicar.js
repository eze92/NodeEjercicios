const fs = require ('fs');
const colors = require('colors');


//si no mando la base por parametro por defecto es 5
const crearArchivo = async(base = 5 , listar= false, hasta = 10) =>{

    try{

        let salida = '';
        let consola = '';

        for ( let i = 1 ; i <= hasta ; i++  ){
            // console.log(`${base} x ${i} = ${base *  i}`);
            //el dato de la salida sin colores para que se guarde bien el txt
             salida += `${base} x ${i} =  ${base *  i} \n`;
            //a imprimer por consola con los colores
             consola += `${base} ${'x'.green} ${i} ${'='.green} ${base *  i} \n`;
        }

        //toma true por defecto
        if(listar){
            console.log('==================='.cyan);
            console.log('Tabla del :' ,(`${base}`).yellow);
            console.log('==================='.cyan);

            console.log(consola);
        }
    
            //se cambio el writeFile por writeFileSync misma funcion pero necesito
            //atrapar el error con try an catch
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida) ;

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