
/*setTimeout( function () {
    console.log('Hola Mundo');
},1000 );*/

//si lo quiero hacer con funcion de flecha

/*setTimeout( () =>  {
    console.log('Hola Mundo');
},1000 );
*/

const getUsuarioByID  = (id,callback) =>{

    //creo el objeto usuario
    const user = {
        id,
        nombre : 'Ezequiel'
    }
    //llama a la funcion que paso por argumento que luego la uso en el console log
    setTimeout( () => {
        callback(user)
    },1500)
}

getUsuarioByID(10, (usuario) => {

    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase() );
    
});