//desectructuro para separar las rutas del server.js
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { login, googleSingIn } = require('../controllers/auth');



const router = Router();

//endpoints
// leer read 
//router.get('/login', login);

//create
router.post('/login', [
    //valido el campo correo
    check('correo','El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],  login);

router.post('/google', [
    //valido el campo correo
    check('id_token','El id_token es necesario').not().isEmpty(),
    validarCampos
],  googleSingIn);

module.exports = router;