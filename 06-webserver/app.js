const express = require('express')
const app = express()
const port = 8080;

//Servir contenido estatico

app.use( express.static('public'));

/* esta parte no se ejecuta al estar el contenido estatico
app.get('/', (req, res) => {
  res.send('Home Page')
})*/

//send es lo que devuelve la ruta
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
  })

  //el asterisco es para cualquier ruta
app.get('*', (req, res) =>{
  //res.send('404 | Page not found')
  //debo construir la ruta y uso sendFile para que tome el html
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`La app esta escuchando el puerto ${port}`)
})

