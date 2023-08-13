// Se importan las clases de la librería
const { Sequelize, DataTypes } = require('sequelize');

// Se crea una instancia de la conexión a la base de datos
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST, 
        dialect: process.env.DB_DIALECT 
    });


const conectarDB = async () =>{
    try {
        await sequelize.authenticate()
        console.log("Base de Datos Conectada")
    }catch (error) {
        console.log("Error: " + error)
    }
}



// Se exportan la conexión
module.exports = {
    sequelize,
    DataTypes,
    conectarDB
    
}
