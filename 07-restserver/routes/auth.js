//desectructuro para separar las rutas del server.js
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

//endpoints
// leer read 
router.get('/login', login);    

//create
router.post('/login', [
    //valido el campo correo
    check('correo','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validarCampos      
],login); 

module.exports = router;