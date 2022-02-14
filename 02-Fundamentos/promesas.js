const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {
//la promesa es una funcion
    const promesa = new Promise ((resolve,reject) => {
        //funcion de busqueda en el arreglo , busco el nombre
        const empleado = empleados.find( e => e.id === id )?.nombre;
        
        if ( empleado ) {
            resolve(empleado);
        }
        else{
            reject(`No existe empleado con id ${id}`)
        }
    });
     return promesa;
}

const getSalario = (id) => {

    const promesa = new Promise((resolve,reject) =>{
        
        const salario = salarios.find(s => s.id === id)?.salario;

        if(salario){
            resolve(salario);
        }
        else{
            reject(`No existe el salario con id ${id}`)
        }
    });
    return promesa;
}


const id = 3;
/*
//el then ejecuta la funcion que quiero utilizar cuando se 
//resuelve correctamente

//empleado es lo que el resolve esta contemplando
//necesito agregar el catch para manejar el error y no rompa
getEmpleado(id)
    .then (empleado => console.log(empleado))
    .catch(error => console.error(error));


getSalario(id)
    .then (salario => console.log(salario))
    .catch(error => console.log(error));
    */

 //la forma para unirlo todo y quede como el codigo del ejercicio
 //anterior pero aun se puede mejorar con otro metodo 
 /*forma incorrecta de hacer una promosa en cadena
getEmpleado(id)
    .then ( empleado => {

        getSalario(id)
            .then( salario => {
                console.log('El emppleado',empleado,'tiene un salario de:',salario);
            })
            .catch(error => console.error(error));

    })
    .catch(error => console.error(error));
*/

//uso una variable nombre para luego utilizarla debajo para la funcion de flecha
let nombre;

getEmpleado(id)
    .then(empleado =>  {
        nombre = empleado;
        return getSalario(id) 
        //necesito agregar el return para poder concatenar debajo el then
    })
    .then(salario => console.log('El empleado:',nombre,'tiene un salario',salario) )
    .catch(error => console.log(error));
    //uso el catch de forma global
    