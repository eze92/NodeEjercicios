const inquirer = require('inquirer');
require('colors');

//creo un arreglo de opciones en formato json
const preguntas = [
    {
        type: 'list',
        name:'opcion',
        message: '¿Que desea hacer?',
        choices: [
            //convierto en objeto json las opciones del arreglo
            {
                value: 1,
                name: `${'1.'.green} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            }    
        ]

    }
];


const inquirerMenu = async()=>{

  //  console.clear();
    console.log('======================='.green);
    console.log('Seleccione una opcion'.white);
    console.log('=======================\n'.green);

    //uso el await porque este trabaja con promesas y le paso el arreglo
    //desectruturo y tomo la "opcion" nombre que le puse en el json
    const {opcion} = await inquirer.prompt(preguntas); 

    return opcion;
}

const pausa = async()=>{

    const question = [
        {
            type : 'input',
            name: 'enter',
            message: `\nPresione ${ 'ENTER'.green } para continuar\n` 
        }
    ];
    await inquirer.prompt(question); 

}

const leerInput = async (message) => {
    const question = [
        {
            type : 'input',
            name : 'descripcion',
            message , // es redundante si al mandar el parametro con el mismo nombre en em6
            validate ( value) { //para validar que ingrese una opcion
                if(value.length === 0){
                    
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    //uso el question
    // descructuro para tomar como valor la descripcion del objeto
    const {descripcion} = await inquirer.prompt(question);
    return descripcion;
}

const listadoTareasBorrar = async (tareas = []) =>{

//map retorna un nuevo arreglo pero transforma los valores del arreglo actual 
//hijos a lo que yo quiera

    const choices = tareas.map((tarea,id) =>{

        const idx = `${id +1 }`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`
        }
    });
    //para que sea primera opcion del arreglo en la seleccion
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })

    const preguntas = [
        {
            type : 'list',
            name : 'id',
            message: 'Borrar',
            choices
        }
    ]
    //de la misma forma que esta realizado al principio
    const {id} = await inquirer.prompt(preguntas);
    return id;
}
const confirmar = async(message) => {
//en base a la documentacion del inquirer genero pregunta de borrado
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message

        }
    ];
   const {ok} = await inquirer.prompt(question);
   return ok;
    

}


const mostrarListadoCheckList = async (tareas = []) =>{

    //map retorna un nuevo arreglo pero transforma los valores del arreglo actual 
    //hijos a lo que yo quiera
    
        const choices = tareas.map((tarea,id) =>{
    
            const idx = `${id +1 }`.green;
    
            return {
                value: tarea.id,
                name: `${idx} ${tarea.descripcion}`,
                //condicion para que aparezca seleccionado la tarea completada
                checked: (tarea.completadoEn) ? true : false
            }
        });
    
        const pregunta = [
            {
                type : 'checkbox',
                name : 'ids',
                message: 'Selecciones',
                choices
            }
        ]
        //de la misma forma que esta realizado al principio
        const {ids} = await inquirer.prompt(pregunta);
        return ids;
    }

//exporto como objeto
module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
}