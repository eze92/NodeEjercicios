const axios = require('axios');

class Busquedas {

    historial = ['Buenos Aires','La Plata','San Luis'];

    constructor(){
        //Leer DB si existe
    }

    //metodo asincrono porque va a realizar una peticion http
    async ciudad (lugar = ''){
        
        try{
        //peticion http

        //console.log(lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

             return []; //retorar los lugares
        }
        catch (error){
            return []; 
        }
       
    }

    

}

//si tengo modelo o clase es la exportacion por defecto
module.exports = Busquedas;
