
//exporto la funcion crear archivo desde multiplocar 
//const { argv } = require('process');

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


                 
console.clear();

//para ver como funciona yars
//console.log(argv);
//console.log('base:yargs',argv.b);
  

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.red,'creado'.yellow))
    .catch(error => console.log(error));

