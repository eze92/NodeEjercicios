require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes')


console.clear();

//creo una funcion main como lo haria en java
const main = async () => {
    console.log('hola');

    mostrarMenu();
    pausa();


}

main();

