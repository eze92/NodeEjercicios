require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');




//Servir contenido estatico todo lo de la carpeta public

app.use( express.static('public'));


app.get('/', (req, res) => {
  res.render('home',{
    nombre : 'Fernando Herrera',
    titulo: 'Curso de Node'
  }); 
});


/* esta parte no se ejecuta al estar el contenido estatico
app.get('/', (req, res) => {
  res.send('Home Page')
})*/

//send es lo que devuelve la ruta
  /*app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
  })*/
app.get('/generic', (req, res) => {
   // res.sendFile(__dirname + '/public/generic.html');
   res.render('generic',{
    nombre : 'Fernando Herrera',
    titulo: 'Curso de Node'
  }); 
  })

app.get('/elements', (req, res) => {
   // res.sendFile(__dirname + '/public/elements.html');
   res.render('elements',{
    nombre : 'Fernando Herrera',
    titulo: 'Curso de Node'
  }); 
  })


  //el asterisco es para cualquier ruta
app.get('*', (req, res) =>{
  //res.send('404 | Page not found')
  //debo construir la ruta con el __dirname y uso sendFile para que tome el html
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`La app esta escuchando el puerto ${port}`)
})

