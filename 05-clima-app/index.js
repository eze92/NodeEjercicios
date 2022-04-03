require('dotenv').config()
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/Busquedas");


const main = async() => {

    //creo instancia de la clase 
    const busquedas = new Busquedas();


    let opt = 0;

    do{
        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                //Mostrar mensaje 
                const termino =  await leerInput('Ciudad:');
               
                //Buscar los lugares 
                const lugares = await busquedas.ciudad ( termino);

                /// Seleccionar el lugar 
                const id = await listarLugares(lugares);
                const lugarSeleccionado = lugares.find(l => l.id === id);
               // console.log(lugarSeleccionado);

                //Clima 

                //Mostrar resultados

                console.log('\n Informacion de la ciudad \n'.green);
                console.log('Ciudad:', lugarSeleccionado.nombre);
                console.log('Latitud:', lugarSeleccionado.lat);
                console.log('Longitud:',lugarSeleccionado.lng);
                console.log('Mínima:',);
                console.log('Máxima:',);


            break;

            case 2:
                
            break;

            case 0:
                
            break;
        }

        if (opt !==0)
        await pausa();

        
    }
    while ( opt != 0);
}

main();