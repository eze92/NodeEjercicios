/*
* _listado:
    { 'uuid-123445-123345-2: { id:12 , descripcion: asd ,completadoEn:8848 }}
*/

const Tarea = require("./tarea");

class Tareas{

//voy a crear un objeto de tareas listado en vez de un arreglo para mejor manejo
    _listado = {};

    //funcion para pasar objeto a arreglo
    get listadoArray(){

        const listado = [];
        //me devuelve un arreglo de todas las llaves funcion java script puro
        //el foreach lo uso para recorrer todas las claves
        Object.keys(this._listado).forEach(key => {
            //inserto el listado en el arreglo 
            const tarea = this._listado[key];
            listado.push (tarea);
           
        }); 

        return listado;

    }

    constructor(){
        this._listado = {};
    }

    crearTarea( descripcion = ''){
        //creo una instancia de la tarea 
        const tarea = new Tarea( descripcion);
 
        //para agregar nuevas tareas al objeto _listado
        this._listado[tarea.id] = tarea;

    }

}

module.exports = Tareas;