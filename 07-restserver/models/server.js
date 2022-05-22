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
        // leer read 
        this.app.get('/api', (req, res) => {
            res.json({
                msg : 'get API'
            });
        });
        //actualizar update 
        this.app.put('/api', (req, res) => {
            res.json({
                msg : 'put API'
            });
        });
        // crear nuevo recurso create
        this.app.post('/api', (req, res) => {
            res.json({
                msg : 'post API'
            });
        });
        //borrar pero no necesariamente de la db , delete
        this.app.delete('/api', (req, res) => {
            res.json({
                msg : 'delete API'
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