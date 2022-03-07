require('colors');

//funcion para mostrar el menu
const mostrarMenu = () =>{

    return new Promise ((resolve) =>{

        
    console.clear();
    console.log('======================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('=======================\n'.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completas tarea(s)`);
    console.log(`${'6.'.green} Borar tarea`);
    console.log(`${'0.'.green} Salir \n`);

    //para mostrar y leer informacion por consola uso una constante

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    //question muestra la informacion al usuario con la pregunta, el callback es la respuesta
    //a la pregunta
    readline.question('Seleccione una opción: ', (opt) => {
        readline.close();
        resolve(opt);
    })

    });
}


//funcion para pausar la consola e ingresar ENTER para continuar
const pausa = () => {

    return new Promise ((resolve) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {
            readline.close();
            resolve();// no necesito resoltar nada por eso solo resolve
        })
        
    });


}

module.exports = {
    mostrarMenu,
    pausa
    
}