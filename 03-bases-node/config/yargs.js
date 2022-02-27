//como importar esta en la documentacion , en este caso importo el paquete yargs
const argv = require('yargs')
//opciones que va tener para ingresar por consola
        .option('b',{
             alias: 'base',
             type: 'number',
             demandOption: true,
             describe : 'Es la base de la tabla de multiplicar'
            })
        .option('l',{
             alias: 'listar',
             type: 'boolean',
          //   demandOption: true,
             default: false,
             describe : 'Lista la tabla de multiplicar en consola'
            })
        .check((argv, options) => {
             if(isNaN (argv.b)) {
                throw 'La base tiene que ser un numero'
             }
            return true;
            })      
        .argv;

module.exports = argv;