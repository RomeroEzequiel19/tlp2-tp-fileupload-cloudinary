const Archivo = require("../models/Archivo");
const ctrl = {};

//Direccionar pantallas
ctrl.renderPrincipal = (req, res) => {
  res.render("index");
};

ctrl.renderListaArchivos = (req, res) => {
  res.render("listado-archivo");
};

ctrl.renderFormNuevoArchivo = (req, res) => {
  res.render("crear-archivo");
};

//Acciones

ctrl.obtenerArchivos = async (req, res) => {
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

ctrl.crearArchivo = async (req, res) => {
  try {
    console.log(req.files);
    const file = req.files.file;

    const filename = file.name;
    console.log(filename);
    const nuevoArchivo = await Archivo.create({
      ruta: filename,
    });

    file.mv("public/images/" + filename, function (err) {
      if (err) {
        console.log("Error: " + err);
        return res.status(500).json(err);
      }
      return res.status(201).json({
        message: "Archivo creado con éxito",
      });
    });

    // await nuevoArchivo.save();
  } catch (error) {
    console.log("Error al crear las Archivos", error);
    res.status(500).json(error);
  }
};

module.exports = ctrl;
