const http = require('http');

// crea el servidor
http.createServer( (req, res) => {

    //res.writeHead(200,{'Content-Type': 'text/plain'})
    //res.writeHead(200,{'Content-Type': 'application/json'})
    //res.setHeader(200,{'Content-Disposition': 'attachment; filename=lista.csv'});
    //res.writeHead(200,{'Content-Type': 'application/csv'})

    res.write('hola mundo');
    res.end();
})

.listen( 8080 );

console.log('Escuchando el puerto', 8080);