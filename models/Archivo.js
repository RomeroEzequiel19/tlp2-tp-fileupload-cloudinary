// Modelo de datos de Reserva

const { DataTypes, sequelize } = require("../database");

const Archivo = sequelize.define(
  "Archivo",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ruta: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    tipo_archivo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "archivo",
  }
);

// Crear tabla si no existe
Archivo.sync({ force: true }).then(() => {
  console.log("Tabla de Archivos creada");
});

module.exports = Archivo;
