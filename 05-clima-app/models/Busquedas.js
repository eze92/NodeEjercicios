const axios = require('axios');

class Busquedas {

    historial = ['Buenos Aires','La Plata','San Luis'];

    constructor() {
        //Leer DB si existe
    }

    //returno un objeto
    get paramsMapBox() {
        return {
            'access_token': 'pk.eyJ1IjoicGVwZTE5OTIiLCJhIjoiY2wxamR3Y3ZqMXFydjNqcDhiMmVxbWk3YSJ9.ksvvk12OOoodL7GUb9WtAw',
            'limit':5,
            'lenguaje': 'es'
        }
    }

    //metodo asincrono porque va a realizar una peticion http
    async ciudad (lugar = ''){
        
        try{
        //peticion http
        const instance = axios.create({
           

            baseURL:` https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            //son todos aquellos que vienen despues del signo de pregunta
            params: this.paramsMapBox
            
        });

        const resp = await instance.get();

        //console.log(lugar);
        // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/buenos%20aires.json?limit=5&proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoicGVwZTE5OTIiLCJhIjoiY2wxamR3Y3ZqMXFydjNqcDhiMmVxbWk3YSJ9.ksvvk12OOoodL7GUb9WtAw');
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
