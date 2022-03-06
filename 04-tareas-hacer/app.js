require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes')


console.clear();

//creo una funcion main como lo haria en java y invocarla debajo
const main = async () => {
    console.log('hola');

    mostrarMenu();
    pausa();

    let opt = '';

    //agrego el do - while para que se ejecute al menos 1 vez y luego 
    //evalua la condicion, si la condicion del while el true vuelve a ejeutar 
    //el ciclo
    do{
        //para que se espere a que termine de resolver el menu en caso de ser 0 sale de la app
        opt = await mostrarMenu();
        
        if(opt !== '0') {
            await pausa();
        }
    }
    while (opt != '0');


}
//uso el main para ejecutar todo el codigo
main();

