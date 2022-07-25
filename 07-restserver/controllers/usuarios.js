//se agrega para al hacer res. me salga las sugerencias
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


//estandar de poner la U en mayuscula para luego crear instancias del modelo
const Usuario = require('../models/usuario');

//se agrega el igual a response por lo escrito arriba aunque quede redundante
const usuariosGet = async (req = request, res = response) => {
    //con query desectructuro lo que mando en la url /api/resource?p1=v1&p2=v2
    // con body desectructuro parte del cuerpo de jsom
    // const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    //leer usuarios
    const{limite = 5, desde = 0} = req.query;
   /* const usuarios = await Usuario.find()
        .skip(desde) //desde  ; si no funciona casteo con Number
        .limit(limite); */
    const query = { estado: true}; //filtro de registro en db
    
    //desectructuro el arreglo
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(desde) 
            .limit(limite)
    ]);
    
    res.json({
        total,
        usuarios
    });
}

const usuariosPut = async (req, res = response) => {

    const { id } = req.params;
    //argumentos a sacar para que no rompa y no actualice
    const { _id, password, google, correo, ...resto } = req.body;

    // validar contra la base de datos
    if (password) {
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }
    //actualizar usuario
    //busca por el id y actualiza
    const usuario = await Usuario.findByIdAndUpdate(id, resto);



    res.json({ usuario });
}


const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    //Verificar si el correo existe

    /*   const existeEmail = await Usuario.findOne({ correo });
       if (existeEmail) {
           return res.status(400).json({
               msg: 'Ese correo ya esta registrado'
           });
       }*/

    //Encriptar la contraseña

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardar en DB
    await usuario.save();

    //devuelve lo que se guardo
    //res.status(201).json({
    res.json({
        //msg: 'post API - controlador ',
        usuario
    });
}

const usuariosPath = (req, res = response) => {
    res.json({
        msg: 'get Path - controlador'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

//mando un objeto a ser varias funciones las que se tiene que exportar
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPath,
    usuariosDelete

}