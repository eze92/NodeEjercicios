class Busquedas {

    historial = ['Buenos Aires','La Plata','San Luis'];

    constructor(){
        //Leer DB si existe
    }

    //metodo asincrono porque va a realizar una peticion http
    async ciudad (lugar = ''){
        //peticion http

        console.log(lugar);

        return this.historial; //retorar los lugares

    }

    

}

//si tengo modelo o clase es la exportacion por defecto
module.exports = Busquedas;
