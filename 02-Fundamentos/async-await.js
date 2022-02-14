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

//funcion asincrona
//transforma mi funcion en una funcion asincrona para
//retornar una promesa
const getInfoUsuario = async(id) => {

    try{
    //el await siempre va dentro del async
    // el await permite usar la promesa de arriba sin usar el .then

    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado ${empleado} es de ${salario}`;
    //return 'Hola Mundo';
    }catch(error){
        //return error;
        throw error;
        // al usar el throw estoy tomando el mensaje del catch del reject 
        //de la funcion getInfoUsuario de abajo TODO MAL
    }


}
const id = 1;

//llamo a la funcion de arriba
getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN')
        console.log(msg)
    } )

    .catch(error => {
        console.log('TODO MAL')
        console.log(error)
    });
        
       

