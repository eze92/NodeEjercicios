const mongoose = require('mongoose');

// FUNCION PARA CONECTAR A DB
const dbConnection = async() =>{

    try{
        await mongoose.connect(process.env.MONGO_DB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: false,
           /* useCreateIndex: false,
            useFindAndModify: false*/
        });
        console.log('Base de datos online');
    }
    catch(error){
        console.log(error); // para ver el error disparado
        throw new Error ('Error a la hora de iniciar la base de datos');
    }

}

module.exports = { 
    dbConnection
}