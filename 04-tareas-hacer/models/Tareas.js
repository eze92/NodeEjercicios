/*
* _listado:
    { 'uuid-123445-123345-2: { id:12 , descripcion: asd ,completadoEn:8848 }}
*/

class Tareas{

//voy a crar un objeto de tareas listado en vez de un arreglo para mejor manejo
    _listado = {} 

    constructor(){
        this._listado = {};
    }

}

module.exports = Tareas;