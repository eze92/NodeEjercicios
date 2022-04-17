const http = require('http');

// crea el servidor
http.createServer( (req, res) => {

    res.write('hola mundo');
    res.end();
})

.listen( 8080 );

console.log('Escuchando el puerto', 8080);