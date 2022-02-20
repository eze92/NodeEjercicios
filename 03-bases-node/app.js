
//exporto la funcion crear archivo desde multiplocar 
const{crearArchivo} = require('./helpers/multiplicar');

 
console.clear();


const  base = 2 ;
  

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(error => console.log(error));