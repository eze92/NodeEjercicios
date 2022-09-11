//desectructuro para separar las rutas del server.js
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');
const Role = require('../models/role');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPath } = require('../controllers/usuarios');



const router = Router();

//endpoints
// leer read 
router.get('/', usuariosGet);

//actualizar update 
// si le agrego el id tengo que escribir uno en la url
router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
]
    , usuariosPut);

// crear nuevo recurso create
router.post('/', [
    //se agrega validacion de correo por express-validator
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y mas de 6 caracteres').isLength({ min: 6 }),
    //check('correo', 'El correo no es valido').isEmail(),

    //validacion de correo escrito contra la  grabada contra la db
    check('correo').custom(emailExiste),
    //check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),  // el rol debe existir en el arreglo

    //validacion de rol escrito contra la  grabada contra la db
    check('rol').custom(esRoleValido),
    validarCampos
],
    usuariosPost);

//borrar pero no necesariamente de la db , delete
router.delete('/:id',[
    validarJWT,
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
   ],
   usuariosDelete );

//para actualizacion parcial
router.patch('/', usuariosPath);



module.exports = router;