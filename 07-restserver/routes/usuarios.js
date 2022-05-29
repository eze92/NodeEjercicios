//desectructuro para separar las rutas del server.js
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPath } = require('../controllers/usuarios');

const router = Router();

//endpoints
// leer read 
router.get('/', usuariosGet);
//actualizar update 
router.put('/', usuariosPut);
// crear nuevo recurso create
router.post('/', usuariosPost);
//borrar pero no necesariamente de la db , delete
router.delete('/', usuariosDelete);

//para actualizacion parcial
router.patch('/', usuariosPath);










module.exports = router;