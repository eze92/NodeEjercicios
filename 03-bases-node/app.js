
//exporto la funcion crear archivo desde multiplocar 
//const { argv } = require('process');

const{crearArchivo} = require('./helpers/multiplicar');
//como importar esta en la documentacion
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check((argv, options) => {
                    if(isNaN (argv.b)) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })      
                .argv;

                 
console.clear();

console.log(argv);

console.log('base:yargs',argv.b);
  

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(error => console.log(error));

    