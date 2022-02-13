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


const getEmpleado = ( id, callback ) => {

    //find 
    const empleado = empleados.find( e => e.id === id )?.nombre;

    if ( empleado ) {
        //null es considerado como false en javascript 
        callback( null, empleado );
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
}

const getSalario = (id, callback) =>{
    //le agrego ? para cuando viene null ejecuta lo que sigue
    //null check operator
    const salario = salarios.find(s => s.id == id)?.salario;

    if (salario){
        callback(null, salario);
    }else{
        callback(`El Salario con id ${id} no existe`);
    }
}


const id = 1;

getEmpleado( id, ( error, empleado ) => {

    if ( error ) {
        console.log('ERROR!');
        return console.log(error);
    }
    //console.log('Empleado Existe');
    //console.log(empleado.nombre);

    getSalario(id ,(error, salario) =>{
        if(error){
          //  console.log('ERROR!');
            return console.log(error);
        }
        //console.log('Salario Existe');
        //puedo concatener tambien con comas
        console.log('El empleado:',empleado,'tiene un salario de:',salario);
    })
    


})


