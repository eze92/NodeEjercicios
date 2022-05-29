const express = require('express')
const cors = require ('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares : Funciones que siempre se ejecutan al levantar el servidor
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        // "use" palabra clave para decir que es un middlewares

        //CORS
        this.app.use(cors());
    
        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {

        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;