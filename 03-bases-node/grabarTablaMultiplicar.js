//importo la libreria de file system

const fs = require ('fs');

//const multiplicar = () => {
    
console.clear();
console.log('===================');
console.log('Tabla del 5');
console.log('===================');

    const  base = 5 ;
    let salida = '';
  
    for ( let i = 1 ; i <= 10 ; i++  ){
   // console.log(`${base} x ${i} = ${base *  i}`);
   //el dato de la salida
    salida += `${base} x ${i} = ${base *  i}\n`;
    }
    console.log(salida);

    //el callback lo saco de la documentacion del servicio para cuando hay error
    //archivo a crear, salida , error
    fs.writeFile(`tabla-${base}.txt`, salida,(err)=> {
        if (err) throw err;
        console.log(`tabla-${base} creada con exito`);

    //tambien puedo usar el fs.writefileasyc (`tabla-${base}.txt`, salida,) lo que cambia es que si sucede un error necesito 
    //atraparlo con un try and catch   
    });
//}
