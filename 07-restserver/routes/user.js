//desectructuro para separar las rutas del server.js
const { Router } = require('express');

const router = Router();

//endpoints
// leer read 
router.get('/api', (req, res) => {
    res.json({
        msg: 'get API'
    });
});
//actualizar update 
router.put('/api', (req, res) => {
    res.json({
        msg: 'put API'
    });
});
// crear nuevo recurso create
router.post('/api', (req, res) => {
    res.status(201).json({
        msg: 'post API'
    });
});
//borrar pero no necesariamente de la db , delete
router.delete('/api', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});










module.exports = router;