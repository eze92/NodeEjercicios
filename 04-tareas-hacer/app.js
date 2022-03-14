//primero las importaciones despues la locales que uno hace

require('colors');

const { guardarDB ,leerDB } = require('./helpers/guardarArchivos');
const { inquirerMenu,pausa,leerInput,listadoTareasBorrar,confirmar } = require('./helpers/inquirer');
const Tareas = require('./models/Tareas');

//const { mostrarMenu, pausa } = require('./helpers/mensajes')


//console.clear();

//creo una funcion main como lo haria en java y invocarla debajo
const main = async () => {
  //  console.log('hola');

    //mostrarMenu();
   // pausa();

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){ //cargas tareas
      tareas.cargarTareasFromArray(tareasDB);

    }

   // await pausa();



    //agrego el do - while para que se ejecute al menos 1 vez y luego 
    //evalua la condicion, si la condicion del while el true vuelve a ejeutar 
    //el ciclo
    do{
    //para que se espere a que termine de resolver el menu en caso de ser 0 sale de la app
    //imprime el menu
       opt = await inquirerMenu();
        
      /*  if(opt !== '0') {
            await pausa();
        }*/
        switch (opt) {
          //los cases son la opciones
          case '1':
            //crear opcion
              const descripcion = await leerInput('Descripcion: ');
              tareas.crearTarea( descripcion);
            break;

          case '2':
              tareas.listadoCompleto();
            break;

          case '3':
              tareas.listarPendientesCompletadas(true);
            break;

          case '4':
              tareas.listarPendientesCompletadas(false);
            break;

           case '5':
              
            break;    

          case '6':
            const id = await listadoTareasBorrar(tareas.listadoArray);    
            const ok = await confirmar('¿Esta Seguro?');


           break;   
        
         
        }  
        //tengo que cometar el comando para no perder lo guardado en la db
        guardarDB(tareas.listadoArray)

        await pausa();

    }
    while (opt != '0');

  
}
//uso el main para ejecutar todo el codigo
main();

