
//exporto la funcion crear archivo desde multiplocar 
const{crearArchivo} = require('./helpers/multiplicar');

 
console.clear();

//me dice donde se crea node de modo global y donde se encuentra la app ejecutada
//console.log(process.argv);

const [,,arg3 = 'base=5'] = process.argv;
//el split me divide un string en un  arreglo por lo que arg3 pasa a ser argumento uno y base el 2, en este caso serapa a partir del igual
const [,base=5] = arg3.split('=');


//console.log(base);

//const  base = 2 ;
  

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(error => console.log(error));

    