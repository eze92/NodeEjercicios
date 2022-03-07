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
            
        ]

    }
];


const inquirerMenu = async()=>{

    console.clear();
    console.log('======================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('=======================\n'.green);

    //uso el await porque este trabaja con promesas y le paso el arreglo
    const opt = await inquirer.prompt(preguntas); 

    return opt;
}

//exporto como objeto
module.exports = {
    inquirerMenu
}