//desectructuro para separar las rutas del server.js
const { Router } = require('express');
const { usuariosGet } = require('../controllers/usuarios');

const router = Router();

//endpoints
// leer read 
router.get('/',usuariosGet);
//actualizar update 
router.put('/', (req, res) => {
    res.json({
        msg: 'put API'
    });
});
// crear nuevo recurso create
router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'post API'
    });
});
//borrar pero no necesariamente de la db , delete
router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});










module.exports = router;