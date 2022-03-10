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
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completas tarea(s)'
            },
            {
                value: '6',
                name: '6. Borar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
            
        ]

    }
];


const inquirerMenu = async()=>{

  //  console.clear();
    console.log('======================='.green);
    console.log('Seleccione una opcion'.green);
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
                if(value.lenght === 0){
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

//exporto como objeto
module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}