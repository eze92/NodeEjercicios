
//exporto la funcion crear archivo desde multiplocar 
//const { argv } = require('process');

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

                 
console.clear();

//para ver como funciona yars
//console.log(argv);

console.log('base:yargs',argv.b);
  

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(error => console.log(error));

