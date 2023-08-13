const Archivo = require("../models/Archivo");
const ctrl = {};

//Direccionar pantallas

ctrl.renderListaCloudinary = (req, res) => {
  res.render("listado-cloudinary");
};

ctrl.renderFormNuevoArchivo = (req, res) => {
  res.render("crear-archivo");
};

ctrl.renderFormEditarArchivo = (req, res) => {
  const { id } = req.params;
  res.render("editar-archivo", { id });
};

//Acciones

ctrl.obtenerCloudinary = async (req, res) => {
  try {
    const archivos = await Archivo.findAll();

    return res.json(archivos);
  } catch (error) {
    console.log("Error al obtener las archivos", error);
    return res.status(500).json({
      message: "Error al obtener las archivos",
    });
  }
};

module.exports = ctrl;
