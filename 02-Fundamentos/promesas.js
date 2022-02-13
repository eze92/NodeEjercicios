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

    const promesa = new Promise ((resolve,reject) => {
        //funcion de busqueda en el arreglo
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

const id = 4;
//el then ejecuta la funcion que quiero utilizar cuando se 
//resuelve correctamente

//empleado es lo que el resolve esta contemplando
//necesito agregar el catch para manejar el error y no rompa
getEmpleado(id)
    .then (empleado => console.log(empleado))
    .catch(error => console.error(error));