const axios = require('axios');

class Busquedas {

    historial = [];

    constructor() {
        //Leer DB si existe
    }

    //returno un objeto
    get paramsMapBox() {
        return {
            //los nombres provienen de 'https://api.mapbox.com/geocoding/v5/mapbox.places/buenos%20aires.json?limit=5&proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1IjoicGVwZTE5OTIiLCJhIjoiY2wxamR3Y3ZqMXFydjNqcDhiMmVxbWk3YSJ9.ksvvk12OOoodL7GUb9WtAw'
            'access_token': process.env.MAPBOX_KEY,
            'limit':5,
            'lenguaje': 'es'
        }
    }
    //retorno objeto para datos de clima
    get paramsOpenWeather() {
        return {
            //los nombres provienen de 'https://api.openweathermap.org/data/2.5/weather?lat=9.93333&lon=-84.08333&appid=72a76b93d642985cf53433234958ef79&units=metric&lang=es'
            'appid': process.env.OPENWEATHER_KEY,
            'limit':5,
            'units' : 'metric',
            'lang': 'es'
        }
    }

    //metodo asincrono porque va a realizar una peticion http para obtener el lugar
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
        //console.log(resp.data);
        return resp.data.features.map( lugar =>({
            //returno un objeto de forma inmplicita
            id : lugar.id,
            nombre : lugar.place_name,
            lat : lugar.center[1],
            lng : lugar.center[0]
        }));

           // return []; //retorar los lugares
        }
        catch (error){
            return []; 
        }
    }

    
    //metodo asincrono porque va a realizar una peticion http para clima del lugar
    async climaLugar(lat, lon){
        try{
            const instance =  axios.create ({
                baseURL : `https://api.openweathermap.org/data/2.5/weather`,
                //desectructuro para poder usar la latitus y long como parametro
                // ... son parametros de descanso
                params: {...this.paramsOpenWeather,lat,lon }
            });

            const resp2 = await instance.get();
            //desectruturo para tomar los datos del clima
            const {weather, main} = resp2.data;
            //resp.data
            return {
                desc: weather[0].description,
                min: main.temp_min, 
                max: main.temp_max,
                temp: main.temp 
            }
        }
        catch(error){
            console.log(error);
        }
    }

    agregarHistorial (lugar = ''){
        //TODO: prevenir duplicados
        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return;
        } //agrega las ciudades al arreglo
        this.historial.unshift(lugar.toLocaleLowerCase());

        //Grabar en DB
    }

    

}

//si tengo modelo o clase es la exportacion por defecto
module.exports = Busquedas;
