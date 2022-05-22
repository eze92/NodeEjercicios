const express = require('express')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares : Funciones que siempre se ejecutan al levantar el servidor
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //use palabra clave para decir que es un middlewares
        //Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                msg : 'get API'
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;