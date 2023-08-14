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

ctrl.renderFormEditarCloudinary = (req, res) => {
  const { id } = req.params;
  res.render("editar-cloudinary", { id });
};

//Acciones

ctrl.obtenerCloudinary = async (req, res) => {
  try {
    const archivos = await Archivo.findAll({
      where: {
        tipo_subida: "cloudinary",
      },
    });

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
    const imagen = req.files.file;
    const tipo_subida = "cloudinary";

    let result = await cloudinary.uploader.upload(imagen.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });

    const ruta = result.url;

    const nuevoArchivo = await Archivo.create({
      ruta: ruta,
      tipo_subida: tipo_subida,
    });

    return res.status(201).json({
      message: "Archivo creado con éxito",
    });
  } catch (error) {
    console.log("Error al crear las Archivos", error);
    res.status(500).json(error);
  }
};

ctrl.actualizarCloudinary = async (req, res) => {
  const id = req.params.id;

  try {
    const imagen = req.files.file;
    const tipo_subida = "cloudinary";

    const result = await cloudinary.uploader.upload(imagen.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });

    const ruta = result.url;

    const archivo = await Archivo.update(
      {
        ruta,
        tipo_subida,
      },
      {
        where: {
          id,
        },
      }
    );
    return res.status(201).json({
      message: "Archivo actualizado con éxito",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al actualizar archivo",
    });
  }
};

module.exports = ctrl;
