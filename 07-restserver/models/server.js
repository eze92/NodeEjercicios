const express = require('express')
const cors = require ('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.autPath = '/api/auth';

        // Conectar a base de datos
        this.conectarDb();

        //Middlewares : Funciones que siempre se ejecutan al levantar el servidor
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    async conectarDb(){
        await dbConnection();
    }

    middlewares(){
        // "use" palabra clave para decir que es un middlewares

        //CORS
        this.app.use(cors());

        //Lectura y Paseo del body

        this.app.use(express.json());
    
        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use( this.autPath,require('../routes/auth'));
        this.app.use(this.usuariosPath,require('../routes/usuarios'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;