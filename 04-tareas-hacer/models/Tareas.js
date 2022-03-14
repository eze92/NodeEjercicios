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

    borrarTarea (id = ''){
        //si existe el id
        if (this._listado [id]){
            delete this._listado[id]; //elimino la propiedad del objeto
        }
    }


    crearTarea( descripcion = ''){
        //creo una instancia de la tarea 
        const tarea = new Tarea( descripcion);
 
        //para agregar nuevas tareas al objeto _listado
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray (tareas = [] ) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea ;
        });
    }
    
    listadoCompleto() {
        //llamo a la funcion de arriba get para reutilizarla
        //el segundo argumento del forEach es el indice
        console.log();
        this.listadoArray.forEach((tarea, id) =>{

            const indice = `${id + 1 }`.green ;
            const {descripcion,completadoEn} = tarea; //se iguala asi porque la descricion y completado viene de la tarea
           
            const estado = (completadoEn) ? 'Completada'.green :  'Pendiente'.red;
            

            console.log(`${indice} ${descripcion} :: ${estado}` );


        });      
    }

    listarPendientesCompletadas(completadas = true){

        console.log();
        let contador = 0;
        this.listadoArray.forEach(tarea =>{

            const {descripcion,completadoEn} = tarea; //se iguala asi porque la descricion y completado viene de la tarea
           
            const estado = (completadoEn) ? 'Completada'.green :  'Pendiente'.red;
            
            if (completadas){
                //mostrar completadas
                if (completadoEn){
                    contador += 1;
                    console.log(`${ (contador + '.').toString().green} ${descripcion} :: ${completadoEn.green}` );
                }
            }else{
                //mostrar pendientes
                if (!completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').toString().green} ${descripcion} :: ${estado}` );
                }
            }

        });        

    }
    toogleCompletadas(ids = [] ){
        ids.forEach ( id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })
    }


}

module.exports = Tareas;