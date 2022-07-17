//desectructuro para separar las rutas del server.js
const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPath } = require('../controllers/usuarios');

const router = Router();

//endpoints
// leer read 
router.get('/', usuariosGet);

//actualizar update 
// si le agrego el id tengo que escribir uno en la url
router.put('/:id', usuariosPut);

// crear nuevo recurso create
router.post('/', [
    //se agrega validacion de correo por express-validator
    check('correo', 'El correo no es valido').isEmail(),
],
usuariosPost);

//borrar pero no necesariamente de la db , delete
router.delete('/', usuariosDelete);

//para actualizacion parcial
router.patch('/', usuariosPath);










module.exports = router;