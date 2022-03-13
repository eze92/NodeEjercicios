//v4 crea el id segun la documentacion
const {v4: uuidv4} = require('uuid');

class Tarea {

    id = '';
    descripcion = '';
    completadoEn = null

    constructor( descripcion){

        this.id = uuidv4(); //crea el id de forma asincrona
        this.descripcion = descripcion;
        this.completadoEn = null;

    }
}


//no uso llave porque si no voy a tener que desectructurar mi modelo de tarea
module.exports = Tarea;