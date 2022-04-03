require('dotenv').config()
const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
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
                const lugar =  await leerInput('Ciudad:');
                await busquedas.ciudad ( lugar);

                //Buscar los lugares 

                /// Seleccionar el lugar 

                //Clima 

                //Mostrar resultados

                console.log('\n Informacion de la ciudad \n'.green);
                console.log('Ciudad:',);
                console.log('Latitud:',);
                console.log('Longitud:',);
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