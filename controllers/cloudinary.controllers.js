const Archivo = require("../models/Archivo");
const ctrl = {};
const path = require("path");
const cloudinary = require("../utils/cloudinary");

//Direccionar pantallas

ctrl.renderListaCloudinary = (req, res) => {
  res.render("listado-cloudinary");
};

ctrl.renderFormNuevoCloudinary = (req, res) => {
  res.render("crear-cloudinary");
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

ctrl.crearCloudinary = async (req, res) => {
  try {
    console.log(req.files);
    const file = req.files.file;

    const uploader = cloudinary.uploader;

    const result = await uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });

    const ruta = result.url;
    console.log(ruta);

    const nuevoArchivo = await Archivo.create({
      ruta: ruta,
    });

    console.log(nuevoArchivo);

    file.mv(result, function (err) {
      if (err) {
        console.log("Error: " + err);
        return res.status(500).json(err);
      }
    });
    return res.status(201).json({
      message: "Archivo creado con éxito",
    });
  } catch (error) {
    console.log("Error al crear las Archivos", error);
    res.status(500).json(error);
  }
};

module.exports = ctrl;
